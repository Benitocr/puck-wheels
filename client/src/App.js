import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { StoreProvider } from "./utils/GlobalState";
import Landing from "./pages/Landing";
import Home from "./pages/Home";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Landing />
            <Home />
            {/* <Switch>
              <Route exact path="/modelA" component={ModelA} />
              <Route exact path="/modelB" component={ModelB} />
              <Route exact path="/modelC" component={ModelC} />
              <Route exact path="/wishList" component={WistList} />
              <Route component={NoMatch} />
            </Switch> */}
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
