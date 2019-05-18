import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import UserList from "./components/UserList";
import UserCard from "./components/UserCard";
import PostList from "./components/PostList";
import Menu from "./components/layout/Menu";
import "./App.css";

function App() {
  return (
    <Router>
      <Menu />
      <Route path="/" exact render={props => <UserList {...props} />} />
      <Route path="/users/:id" render={props => <UserCard {...props} />} />
      <Route path="/posts" render={props => <PostList {...props} />} />
    </Router>
  );
}

export default App;
