import { connect } from 'react-redux';
import { compose } from 'redux';
import { reduxForm } from 'redux-form';
import { withHandlers } from 'recompose';

import fromPosts from '../../modules/posts';

import PostsNew from './PostsNew.jsx';

const enhance = compose(
  connect(null, { createPost: fromPosts.actions.createPost }),
  reduxForm({
    form: 'PostsNewForm'
    // fields: ['title', 'categories', 'content']
  }),
  withHandlers({
    submitHandler: ({ createPost }) => ({ title, content, categories }) => {
      // console.log('submitting', formProps);
      createPost({ title, content, categories });
    }
  })
);


export default enhance(PostsNew);
