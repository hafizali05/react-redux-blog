import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
import { Link } from "react-router-dom";
class PostIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPosts() {
    return _.map(this.props.post, post => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={`/post/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/post/new">
            New Post
          </Link>
        </div>
        <h1>hello post</h1>
        <ul className="list-group">{this.renderPosts(this.props.posts)}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    post: state.post
  };
}
export default connect(
  mapStateToProps,
  { fetchPosts }
)(PostIndex);
