import { connect } from 'react-redux';
import fromPosts from '../../modules/posts';

import PostsList from './PostsList.jsx';

const enhance = connect(
  (state, ownProps) => ({
    posts: fromPosts.selectors.getAll(state)
  }),
  {
    fetchPosts: fromPosts.actions.fetchPosts
  }
);


export default enhance(PostsList);
