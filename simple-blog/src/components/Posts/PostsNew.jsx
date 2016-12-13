import React, { Component, PropTypes } from 'react';

import { Field } from 'redux-form';

class PostsNew extends Component {
  render() {
    const {
      submitHandler,
      handleSubmit,
      pristine,
      reset,
      submitting,
    } = this.props;

    return (
      <form onSubmit={handleSubmit(submitHandler)}>
        <h3>Create new post</h3>
        <div className="form-group">
          <label>Title</label>
          <Field name="title" component="input" required type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Categories</label>
          <Field name="categories" component="input" type="text" className="form-control" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <Field name="content" component="textarea" className="form-control" />
        </div>

        <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
      </form>
    )
  }
}

export default PostsNew;
