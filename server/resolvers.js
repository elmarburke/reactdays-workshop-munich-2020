const resolvers = {
  Query: {
    messages: (_, __, { dataSources }) =>
      dataSources.messageApi.getAllMessages(),
  },
  Mutation: {
    sendMessage: async (_, { input }, { dataSources }) => {
      return dataSources.messageApi.sendMessage({
        text: input.text,
        author: input.author,
      });
    },
  },
};

module.exports = resolvers;
