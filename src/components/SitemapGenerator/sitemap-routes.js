import React from "react";
import { Route } from "react-router";

export default (
  <Route>
    <Route path="/careers" />
    <Route path="/blogs" />
    <Route path="/blogs/:fileName" />
    <Route path="/how-it-works" />
    <Route path="/careers/:fileName" />
    <Route path="/contact" />
    <Route path="/" />
  </Route>
);
