import { compose } from 'redux';
import { reduxForm, getFormValues } from 'redux-form';
import { withHandlers } from 'recompose';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import fromUser from '../../modules/user';

import SignIn from './SignIn.jsx';

const enhance = compose(
  reduxForm({
    form: 'SignInForm',
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
      signInUser: fromUser.actions.signInUser
    }
  ),
  withHandlers({
    submitHandler: ({ signInUser, router }) => async ({ email, password }) => {
      try {
        const token = await signInUser({ email, password });
        router.push('/features');
      } catch (e) {
        console.warn('signIn Failed');
      };
    }
  })
);

export default enhance(SignIn);
