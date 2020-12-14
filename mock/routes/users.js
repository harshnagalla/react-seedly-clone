const initUserCollection = require("../db/users.json");

// boom is library for HTTP-friendly error reporting. It is a dependency of hapi and doesn't need to be installed
const Boom = require("@hapi/boom");

// joi is for object/schema validation
const Joi = require("@hapi/joi");

// lowdb is the json database
const low = require("lowdb");

// load in-memory adapter for lowdb. This will keep changes in memory and not write to file system
const MemorySync = require("lowdb/adapters/Memory");

// create a lowdb database using the memory adapter
const db = low(new MemorySync());

// initialize the database with data from json file
db.defaults({ users: initUserCollection }).write();
// after any interaction that changes the database, use `write()` to commit changes

// create and export plugin
module.exports = {
  // plugin requires a name
  name: "user-routes",
  // and a version
  version: "1.0.0",
  // and the register function
  register: async function (server, options) {
    /**
     * list users route
     */
    server.route({
      // define get method
      method: "GET",
      // and the url
      path: "/user",
      /*
       and define the handler
       the handler passes two objects, request and h
       - request is the server request object, it gives access to the the request and the server internals
       - h is the response toolkit, and it helps with modifying the response (like adding response code)
      */
      handler: (request, h) => {
        // get all users from users array
        const users = db.get("users").value();
        // returning users array will be converted to a json array by hapi
        return users;
      },
    });
  },
};
