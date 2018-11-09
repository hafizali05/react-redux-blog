import React, { Component } from "react";
import { fetchPost, deletePost } from "../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchPost(id);
  }
  // onDeleteCLick() {
  //   var { id } = this.props.match.params;
  //   this.props.deletePost(id, () => {
  //     this.props.history.push("/");
  //   });
  // }
  onDeleteCLick() {
    const s = this.props.match.params.id;

    this.props.deletePost(s, () => {
      this.props.history.push("/");
    });
  }
  render() {
    const { post } = this.props;
    if (!post) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <Link to="/">GO BACK</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteCLick.bind(this)}
        >
          Delete
        </button>
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
  { fetchPost, deletePost }
)(PostsShow);
