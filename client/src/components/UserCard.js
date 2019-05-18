import React, { Component } from "react";
import { connect } from "react-redux";

import { getUsersPosts } from "../actions";
import UserPost from "./UserPost";

class UserCard extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.user.name}</h1>
        {this.props.posts.map(post => (
          <UserPost key={post.id} text={post.text} />
        ))}
      </div>
    );
  }
  componentDidMount() {
    this.props.getUsersPosts(this.props.user.id);
  }
}

const mapProps = (state, ownProps) => {
  return {
    user: state.users.find(user => `${user.id}` === ownProps.match.params.id),
    posts: state.userPost
  };
};

export default connect(
  mapProps,
  { getUsersPosts }
)(UserCard);
