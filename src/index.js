import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// graphQL
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm3npracc00uy07upiu476adh/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
