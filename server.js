const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
// Import .env variable
const dotenv = require("dotenv");
dotenv.config();

// Register Plugin
// Route
fastify.register(require("./routes/first-route"));
fastify.register(require("./db-connector"));

// Run the server!
fastify.listen(process.env.PORT || 5000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});

const start = async () => {
  try {
    await fastify.listen(process.env.PORT || 5000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`The server is started on ${process.env.PORT}`);
};
start();
