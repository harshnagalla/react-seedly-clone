const Hapi = require("@hapi/hapi");
const Boom = require("@hapi/boom");

// get routes plugin
const userRoutes = require("./routes/users");
const topicRoutes = require("./routes/topics");

// get host from environment variable, or default to "localhost"
const HOST = process.env.HOST || "localhost";

// get port from environment variable, or default to 7000
const PORT = process.env.PORT || 7000;

// create async function, this allows using await
(async () => {
  // create a new hapi server
  const server = Hapi.server({
    host: HOST,
    port: PORT,
    // define route defaults
    routes: {
      cors: true,
      validate: {
     
        failAction: async (request, h, err) => {
   
          throw Boom.badRequest(err.message);
        },
      },
    },
  });

  // difinition of the base route
  server.route({
    method: "GET",
    path: "/",
    handler: (request, h) => {
      // respond with a json object
      return h.response({ message: "Hello World" });
      // you can also just return an object, hapi will handle
      //   it the same way
    },
  });

  // register the user routes plugin
  // this needs to finish before server.start(), that's why it
  //   uses await. You can also use a promise.
  await server.register(userRoutes);
  await server.register(topicRoutes);

  // start the server
  server.start();

  // display information to console about what host/port the
  //   server is running on
  console.info(`Server started at ${server.info.uri}`);
})();
