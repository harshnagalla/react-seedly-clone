const initTopicCollection = require("../db/topics.json");
const initQuestionCollection = require("../db/questions.json");
const initUserCollection = require("../db/users.json");
const initAnswersCollection = require("../db/answers.json");

// lowdb is the json database
const low = require("lowdb");

// load in-memory adapter for lowdb. This will keep changes in memory and not write to file system
const MemorySync = require("lowdb/adapters/Memory");

// create a lowdb database using the memory adapter
const db = low(new MemorySync());

// initialize the database with data from json file
db.defaults({
  topics: initTopicCollection,
  questions: initQuestionCollection,
  users: initUserCollection,
  answers: initAnswersCollection,
}).write();
// after any interaction that changes the database, use `write()` to commit changes

// create and export plugin
module.exports = {
  name: "topic-routes",
  register: async function (server) {
    /**
     * list topics route
     */
    server.route({
      // define get method
      method: "GET",
      // and the url
      path: "/topics",
      /*
       and define the handler
       the handler passes two objects, request and h
       - request is the server request object, it gives access to the the request and the server internals
       - h is the response toolkit, and it helps with modifying the response (like adding response code)
      */
      handler: (request, h) => {
        // get all topics from users array
        const topics = db.get("topics").value();
        // returning topics array will be converted to a json array by hapi
        return topics;
      },
    });

    server.route({
      method: "GET",
      // define path with a required parameter - id
      path: "/topic/{id}",
      handler: (request, h) => {
        // get id from request parameters
        const { id } = request.params;
    
        const answers = db.get("answers").value();
        const users = db.get("users").value();
        const questions = db
          .get("questions")
          .filter({ topicId: parseInt(id, 10) })
          .value();

        const mapAnserwsToUsers = answers.map((answer) => {
          const user = users.find((item) => {
            if (item.userId === answer.userId) {
              return item;
            }
          });

          return {
            userId: user.userId,
            firstName: user.first_name,
            lastName: user.last_name,
            answerId: answer.answerId,
            answer: answer.answer,
            timestamp: answer.timestamp,
            questionId: answer.questionId,
          };
        });

        const mapQuestionsToAnswers = questions.map((questionItem) => {
          const answers = mapAnserwsToUsers.filter((item) => {
            if (item.questionId === questionItem.questionId) {
              return item;
            }
          });

          const { questionId, question, timestamp } = questionItem;
          return Object.assign(
            { question, questionId, timestamp },
            { answers: answers }
          );
        });

        if (mapQuestionsToAnswers !== undefined) {
          return mapQuestionsToAnswers;
        }
        // I'm using the Boom library to generate the error, this will add the 400 code.
        throw Boom.badRequest(`id ${id} not found`);
       
      },
    });
  },
};
