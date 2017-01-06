import React from 'react';

import { connect } from 'react-redux';
import fromUser from '../modules/user';

const FeatureScreen = React.createClass({
  componentWillMount() {
    this.props.fetchMessage();
  },
  render() {
    return (
      <div>
        This is a feature
        <div>{this.props.message}</div>
      </div>
    );
  }
});

export default connect(state => ({
  message: state.user.serverMessage
}), fromUser.actions)(FeatureScreen);
