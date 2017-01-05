import { compose } from 'redux';
import { reduxForm, getFormValues } from 'redux-form';
import { withHandlers } from 'recompose';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import fromUser from '../../modules/user';

import SignUp from './SignUp.jsx';

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Please enter an email';
  }
  if (!values.password) {
    errors.password = 'Please provide a password';
  }
  if (values.password !== values.password_confirm) {
    errors.password_confirm = 'Passwords do not match';
  }

  return errors;
};


const enhance = compose(
  reduxForm({
    form: 'SignUpForm',
    validate
  }),
  withRouter,
  connect(
    // mapStateToProps
    (state, ownProps) => ({
      values: getFormValues('SignInForm')(state),
      errorMessage: state.user.error
    }),
    // mapDispatchToProps
    {
      signUpUser: fromUser.actions.signUpUser
    }
  ),
  withHandlers({
    submitHandler: ({ signUpUser, router }) => ({ email, password }) => {
      signUpUser({ email, password });
    }
  })
);

export default enhance(SignUp);
