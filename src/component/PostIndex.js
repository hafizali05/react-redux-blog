import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions/index";
class PostIndex extends Component {
  componentDidMount() {
    console.log("comp mount", this.props.fetchPosts());
  }
  renderPosts() {
    return _.map(this.props.post, post => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }
  render() {
    console.log("this.state", this.props.post);
    return (
      <div>
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
