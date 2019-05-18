import React, { Component } from "react";
import { connect } from "react-redux";

import { getPosts } from "../actions/index";
import PostItem from "./PostItem";

export class UserList extends Component {
  render() {
    return (
      <div>
        <h1>All Posts</h1>
        {this.props.posts.map(post => (
          <PostItem key={post.id} text={post.text} userId={post.user_id} />
        ))}
      </div>
    );
  }
  componentDidMount() {
    this.props.getPosts();
  }
}

const mapProps = state => {
  return {
    posts: state.posts
  };
};

export default connect(
  mapProps,
  { getPosts }
)(UserList);
