const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const createStore = require("./store");
const AuthorApi = require("./dataSources/author");
const MessagesApi = require("./dataSources/message");

const startServer = async () => {
  const store = await createStore();

  const authorApi = new AuthorApi(store);
  const messageApi = new MessagesApi(store);

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({ authorApi, messageApi }),
  });

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

startServer();
