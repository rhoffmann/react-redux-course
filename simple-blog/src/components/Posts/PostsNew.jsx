import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Field } from 'redux-form';
import cx from 'classnames';

const renderField = ({ input, label, type, meta: { touched, error, warning, valid } }) => (
  <div className={cx('form-group', {
      'has-danger': touched && error,
      'has-warning': touched && warning,
      'has-success': touched && valid
    })}>
    <label>{label}</label>
    <input {...input} className={cx('form-control')} placeholder={label} type={type}/>
    {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
  </div>
)

const renderTextarea = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className={cx('form-group', {
      'has-danger': touched && error,
      'has-warning': touched && warning,
      'has-success': touched && !error && !warning
    })}>
    <label>{label}</label>
    <textarea {...input} className={cx('form-control')} placeholder={label} type={type}/>
    {touched && ((error && <span className="help-block">{error}</span>) || (warning && <span className="help-block">{warning}</span>))}
  </div>
)


class PostsNew extends Component {
  render() {
    const {
      submitHandler,
      handleSubmit,
      pristine,
      reset,
      submitting,
      values
    } = this.props;

    return (
      <form onSubmit={handleSubmit(submitHandler)}>
        <h3>Create new post</h3>
        <Field name="title" label="Title" type="text" component={renderField} />
        <Field name="categories" label="Categories" type="text" component={renderField} />
        <Field name="content" label="Content" component={renderTextarea} />
        <div>
          <button type="submit" disabled={pristine || submitting} className="btn btn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </div>
      </form>
    )
  }
}

export default PostsNew;
