import React from "react";
import ReactDOM from "react-dom/client";
// components
import App from "./App";
// graphQL
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// mui
import { ThemeProvider } from "@mui/material";
import theme from "./mui/theme";
// styles
import "./styles/index.css";
import "./styles/fonts.css";

const client = new ApolloClient({
  uri: "https://us-west-2.cdn.hygraph.com/content/cm3npracc00uy07upiu476adh/master",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
);
