import React, { Component } from "react";
import { fetchPost } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">GO BACK</Link>
        <h2>{post.title}</h2>
        <h6>{post.categories}</h6>
        <p>{post.cotent}</p>
      </div>
    );
  }
}

function mapStateToProps({ post }, ownProps) {
  return {
    post: post[ownProps.match.params.id]
  };
}

export default connect(
  mapStateToProps,
  { fetchPost }
)(PostsShow);
