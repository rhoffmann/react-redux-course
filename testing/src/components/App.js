import React, { Component, PropTypes } from 'react';

import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  render() {
    const { children } = this.props;
    return (
      <div>
        <CommentBox />
        <CommentList />
        {children}
      </div>
    );
  }
}
