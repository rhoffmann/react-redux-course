import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm, getFormValues } from 'redux-form';
import { withHandlers } from 'recompose';

import fromPosts from '../../modules/posts';

import PostsNew from './PostsNew.jsx';

const enhance = compose(
  reduxForm({
    form: 'PostsNewForm'
  }),
  connect(
    (state, ownProps) => ({
      values: getFormValues('PostsNewForm')(state)
    }),
    { createPost: fromPosts.actions.createPost }
  ),
  withHandlers({
    submitHandler: ({ createPost }) =>
      ({ title, content, categories }) => {
        createPost({ title, content, categories });
      }
  })
);

export default enhance(PostsNew);
