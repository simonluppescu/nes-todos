import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from "../components/App";
import TodoItem from "../components/TodoItem";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Router>
      <Route exact path="/" component={App} />
    </Router>,
    document.body.appendChild(document.createElement("div"))
  );
});
