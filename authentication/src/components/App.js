import React, { Component, PropTypes } from 'react';

import Header from './Header';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };
  render() {
    const { children } = this.props;
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}
