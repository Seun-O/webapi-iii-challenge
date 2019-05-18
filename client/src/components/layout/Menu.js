import React from "react";
import { Link } from "react-router-dom";
export default () => {
  return (
    <nav className="main-nav">
      <h1>Ring Village</h1>
      <ul className="nav-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </nav>
  );
};
