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
        <h2>Posts</h2>
        <div>
          {posts.map(post => {
            const url = `posts/${post.id}`;
            return (
              <li className="list-group-item" key={post.id}>
                <Link to={url}>
                  <span className="float-xs-right">
                    {post.categories}
                  </span>
                  <strong>{post.title}</strong>
                </Link>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}
