import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class PostsDetail extends Component {
  static propTypes = {
    post: PropTypes.object,
    deleteCurrentPost: PropTypes.func
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
    const { post, deleteCurrentPost } = this.props;
    if (!post) {
      return <div>loading...</div>;
    }
    return (
      <div>
        <Link to="/">back</Link>
        <h3>{ post.title }</h3>
        <h6>Categories: {post.categories}</h6>
        <p>
          {post.content}
        </p>
        <button onClick={deleteCurrentPost} className="btn btn-danger">delete</button>
      </div>
    );
  }
}
