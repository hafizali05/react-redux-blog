import React, { Component } from "react";
import { connect } from "react-redux";
import { fetch_posts } from "../actions/index";
console.log(fetch_posts);
class PostIndex extends Component {
  componentDidMount() {
    console.log("comp mount", this.props.fetch_posts());
  }
  render() {
    return <div>Post Index</div>;
  }
}
export default connect(
  null,
  { fetch_posts }
)(PostIndex);
