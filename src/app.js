const { GraphQLServer, PubSub } = require("graphql-yoga");
const schema = require("./schema");

const PORT = process.argv[2] || 3000;
const pubsub = new PubSub();

const server = new GraphQLServer({
  schema
});

const context = req => ({
  pubsub,
  request: req.request
});
server.context = context;

const options = {
  port: PORT,
  endpoint: "/graphql",
  playground: "/playground"
};

server
  .start(options)
  .then(() => {
    console.log("Server is running on localhost:" + PORT);
  })
  .catch(reason => {
    console.log(reason);
  });
