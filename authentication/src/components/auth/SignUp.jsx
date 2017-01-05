import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../helpers/form';

const SignUp = React.createClass({
  render() {
    const {
      submitHandler,
      handleSubmit,
      pristine,
      reset,
      submitting,
      values,
      errorMessage
    } = this.props;

    return (
      <form onSubmit={handleSubmit(submitHandler)}>
        <fieldset>
          <Field
            name="email"
            label="E-Mail"
            type="email"
            component={renderField}
          />
          <Field
            name="password"
            label="Password"
            type="password"
            component={renderField}
          />
          <Field
            name="password_confirm"
            label="Confirm Password"
            type="password"
            component={renderField}
          />
        </fieldset>

        {errorMessage && <div className="alert alert-danger">
          <strong>Oops!</strong> {errorMessage}
        </div>}

        <div>
          <button type="submit" disabled={pristine || submitting} className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
});

export default SignUp;
