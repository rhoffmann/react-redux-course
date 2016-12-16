import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, getFormValues } from 'redux-form';
import { withHandlers } from 'recompose';
import { withRouter } from 'react-router';

import fromPosts from '../../modules/posts';

import PostsNew from './PostsNew.jsx';

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = 'pleeease enter a title';
  }
  if (!values.content) {
    errors.content = 'this needs some content';
  }
  return errors;
};

const warn = values => {
  const warnings = {};
  if (!values.categories) {
    warnings.categories = 'maybe some categories?';
  }
  return warnings;
}

const enhance = compose(
  reduxForm({
    form: 'PostsNewForm',
    validate,
    warn
  }),
  withRouter,
  connect(
    (state, ownProps) => ({
      values: getFormValues('PostsNewForm')(state)
    }),
    {
      createPost: fromPosts.actions.createPost
    }
  ),
  withHandlers({
    submitHandler: ({ createPost, router }) =>
      async ({ title, content, categories }) => {
        await createPost({ title, content, categories });
        router.push('/');
      }
  })
);

export default enhance(PostsNew);
