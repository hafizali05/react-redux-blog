import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createPosts } from "../actions";
class PostNew extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = `form-group ${touched && error ? "has-danger" : ""}`;
    return (
      <div className={className}>
        <h1>{field.label}</h1>
        <input type="text" className="form-control" {...field.input} />
        {touched ? error : " "}
      </div>
    );
  }
  onSubmit(values) {
    this.props.createPosts(values, () => {
      this.props.history.push("/");
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field label="title" name="title" component={this.renderField} />
        <Field
          label="categories"
          name="categories"
          component={this.renderField}
        />
        <Field label="content" name="content" component={this.renderField} />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <Link className="btn btn-danger" to="/post">
          Cancel
        </Link>
      </form>
    );
  }
}
function validate(values) {
  const error = {};
  if (!values.title) {
    error.title = "please enter a title";
  }
  if (!values.categories) {
    error.categories = "please enter a categories";
  }
  if (!values.content) {
    error.content = "please enter a content";
  }
  return error;
}
export default reduxForm({ validate, form: "PostsNewForm" })(
  connect(
    null,
    { createPosts }
  )(PostNew)
);
