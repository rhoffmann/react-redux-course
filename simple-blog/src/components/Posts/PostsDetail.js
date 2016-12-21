import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose, withHandlers } from 'recompose';

import fromPosts from '../../modules/posts';

import PostsDetail from './PostsDetail.jsx';

const enhance = compose(
  withRouter,
  connect(
    (state, ownProps) => ({
      post: fromPosts.selectors.getPost(state, ownProps.params.id)
    }), {
      fetchPost: fromPosts.actions.fetchPost,
      deletePost: fromPosts.actions.deletePost
    }
  ),
  withHandlers({
    deleteCurrentPost: ({ post, deletePost, router }) => async () => {
      const result = await deletePost(post.id);
      router.push('/');
    }
  })
);


export default enhance(PostsDetail);
