import React from 'react';
import { connect } from 'react-redux';
import fromUser from '../../modules/user';

const SignOut = React.createClass({
  componentWillMount() {
    this.props.signOutUser();
  },
  render() {
    return (
      <div>Sorry to see you go...</div>
    );
  }
});

export default connect(null, {
  signOutUser: fromUser.actions.signOutUser
})(SignOut);
