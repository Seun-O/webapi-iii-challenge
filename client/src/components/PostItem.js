import React from "react";
import { connect } from "react-redux";

const PostItem = props => {
  console.log(props.user);
  return (
    <div>
      <h1>{props.text}</h1>
      <p>Posted by: {props.user.name}</p>
    </div>
  );
};

const mapProps = (state, ownProps) => {
  return {
    user: state.users.find(user => user.id === ownProps.userId)
  };
};

export default connect(mapProps)(PostItem);
