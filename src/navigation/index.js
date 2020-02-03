import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Home from "../pages/home";
import history from "./history";
import Layout from '../components/layout';

const NotFound = () => <h3>404 - Not found</h3>;

export default () => {
  return (
    <Router history={history}>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};
