import React, { Component, PropTypes } from 'react';

export default class PostsList extends Component {
  static propTypes = {
    fetchPosts: PropTypes.func
  }
  // static get defaultProps() {
  //   return {
  //   }
  // }
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    this.props.fetchPosts();
  }
  render() {
    return <div>List of blog posts.</div>;
  }
}
