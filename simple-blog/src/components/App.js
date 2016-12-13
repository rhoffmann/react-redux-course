import React, { Component, PropTypes } from 'react';

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    const { children } = this.props;
    return (
      <div>
        App!
        {children}
      </div>
    );
  }
}

export default App;
