import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import SignUpContainer from "../main/signUp";

const RootContainer = () => {

  return (
    <Router>
        <Switch>
          <Route exact path="/signup" component={SignUpContainer} />
          <Redirect from="/" exact to="/signup" />
          <Route exact path="*" component={SignUpContainer} />
        </Switch>
    </Router>
  );
};

export default RootContainer;
