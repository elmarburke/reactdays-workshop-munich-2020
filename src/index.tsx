import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./App";
import configureApollo from "./configureApollo";

const apolloClient = configureApollo();

const element = (
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(element, document.getElementById("root"));
