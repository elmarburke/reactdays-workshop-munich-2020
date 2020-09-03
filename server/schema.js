const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Message {
    id: ID!
    text: String!
    author: String!
    createdAt: Date!
  }

  #   type Person {
  #     firstName: String!
  #     lastName: String!
  #     email: String!
  #   }

  type Query {
    messages: [Message!]!
  }

  type Mutation {
    sendMessage(input: SendMessageInput): Message!
  }

  input SendMessageInput {
    text: String!
    author: String!
  }
`;

module.exports = typeDefs;
