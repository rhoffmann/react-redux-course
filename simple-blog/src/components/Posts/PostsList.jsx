import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class PostsList extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func,
    posts: PropTypes.array
  }
  static defaultProps = {
    posts: []
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <div>
          {posts.map(post => <div key={post.id}>{post.id}: {post.title}</div>)}
        </div>
      </div>
    );
  }
}
