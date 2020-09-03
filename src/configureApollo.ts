import { ApolloClient, InMemoryCache } from "@apollo/client";

const configureApollo = () => {
  const client = new ApolloClient({
    uri: "http://localhost:4000",
    cache: new InMemoryCache(),
  });

  return client;
};

export default configureApollo;
