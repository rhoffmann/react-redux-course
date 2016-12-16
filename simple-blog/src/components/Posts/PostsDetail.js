import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { compose } from 'recompose';

import fromPosts from '../../modules/posts';

import PostsDetail from './PostsDetail.jsx';

const enhance = compose(
  withRouter,
  connect(
    (state, ownProps) => ({
      post: fromPosts.selectors.getPost(state, ownProps.params.id)
    }), {
      fetchPost: fromPosts.actions.fetchPost
    }
  )
);


export default enhance(PostsDetail);
