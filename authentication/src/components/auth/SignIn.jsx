import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';

import { renderField } from '../../helpers/form';

const SignIn = React.createClass({
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
        <fieldset>
          <Field name="email" label="E-Mail" type="email" component={renderField} />
          <Field name="password" label="Password" type="password" component={renderField} />
        </fieldset>
        <div>
          <button type="submit" disabled={pristine || submitting} className="btn btn-primary">
            Sign In
          </button>
        </div>
      </form>
    );
  }
});

export default SignIn;
