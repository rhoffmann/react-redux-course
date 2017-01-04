import { compose } from 'redux';
import { reduxForm, getFormValues } from 'redux-form';
import { withHandlers } from 'recompose';
import { connect } from 'react-redux';

import SignIn from './SignIn.jsx';

const enhance = compose(
  reduxForm({
    form: 'SignInForm',
  }),
  connect(
    (state, ownProps) => ({
      values: getFormValues('SignInForm')(state)
    }), {
      // signIn: fromUser.actions.signIn
    }
  ),
  withHandlers({
    submitHandler: ({ signIn, router }) =>
      async ({ email, password }) => {
        console.log(email, password);
        // const token = await signIn(email, password);
        //...
      }
  })
);

export default enhance(SignIn);
