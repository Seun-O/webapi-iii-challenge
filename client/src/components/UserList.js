import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { getUsers } from "../actions/index";
import UserItem from "./UserItem";

export class UserList extends Component {
  render() {
    return (
      <div>
        <h1>Displays a list of Users</h1>
        {this.props.users.map(user => (
          <Link key={user.id} to={`/users/${user.id}`}>
            <UserItem name={user.name} />
          </Link>
        ))}
      </div>
    );
  }
  componentDidMount() {
    this.props.getUsers();
  }
}

const mapProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapProps,
  { getUsers }
)(UserList);
