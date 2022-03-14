const fastifyPlugin = require("fastify-plugin");
const dotenv = require("dotenv").config();

async function dbConnector(fastify, options) {
  fastify.register(require("fastify-mongodb"), {
    url: process.env.MONGO_URL,
  });
}

// Wrapping a plugin function with fastify-plugin exposes the decorators
// and hooks, declared inside the plugin to the parent scope.
module.exports = fastifyPlugin(dbConnector);
