const initTopicCollection = require("../db/topics.json");

// lowdb is the json database
const low = require("lowdb");

// load in-memory adapter for lowdb. This will keep changes in memory and not write to file system
const MemorySync = require("lowdb/adapters/Memory");

// create a lowdb database using the memory adapter
const db = low(new MemorySync());

// initialize the database with data from json file
db.defaults({ topics: initTopicCollection }).write();
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
        // get all users from users array
        const topics = db.get("topics").value();
        // returning users array will be converted to a json array by hapi
        return topics;
      },
    });

    // /**
    //  * get single user by id
    //  */
    // server.route({
    //   method: "GET",
    //   // define path with a required parameter - id
    //   path: "/user/{id}",
    //   handler: (request, h) => {
    //     // get id from request parameters
    //     const { id } = request.params;
    //     // find user in array, note that the id needs to be converted to a number, since that's how it's stored in the db
    //     const user = db
    //       .get("users")
    //       .find({ id: parseInt(id, 10) })
    //       .value();

    //     if (user !== undefined) {
    //       // uf user is define return
    //       return user;
    //     }
    //     // if user is not found, return an error
    //     // I'm using the Boom library to generate the errot, this will add the 400 code.
    //     throw Boom.badRequest(`id ${id} not found`);
    //     /*
    //      because you may be matching another API you may need to customize the response.
    //      you can then use the h toolkit like this: `h.response({error:"BAD ID"}).code(400)`
    //      */
    //   },
    // });
  },
};
