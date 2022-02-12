const fastify = require("fastify")({ logger: true });
const dotenv = require("dotenv").config();

const start = async () => {
  try {
    await fastify.listen(process.env.PORT);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
