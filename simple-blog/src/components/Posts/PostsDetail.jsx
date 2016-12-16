import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class PostsDetail extends Component {
  static propTypes = {
    post: PropTypes.object
  }
  static defaultProps = {
    post: {} // POSTSCHEMA
  }
  componentWillMount() {
    const { fetchPost, params, post } = this.props;
    if (!post.id) {
      fetchPost(params.id);
    }
  }
  render() {
    const { post } = this.props;
    return (
      <div>
        <Link to="/" className="btn btn-primary">back</Link>
        <div>
          <h2>{ post.title }</h2>
          <span>
            {post.categories}
          </span>
        </div>
        <div>
          {post.content}
        </div>
      </div>
    );
  }
}
