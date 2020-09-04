const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  """
  This is a date
  """
  scalar Date

  type Message {
    id: ID!
    text: String!
    author: String!
    date: Date!
  }

  type Query {
    messages: [Message!]!
  }

  type Mutation {
    sendMessage(text: String!, author: String!): Message!
  }
`;

let messages = [
  { id: "1", text: "Hallo Welt", author: "Elmar", date: new Date() },
];

const resolvers = {
  Query: {
    messages: () => {
      return messages;
    },
  },
  Mutation: {
    sendMessage: (_, { text, author }) => {
      const newMessage = {
        id: `Message:${new Date().toJSON()}`,
        text,
        author,
        date: new Date(),
      };

      messages.push(newMessage);

      return newMessage;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log("🚀 Server started at " + url);
});
