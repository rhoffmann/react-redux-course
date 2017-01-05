import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../modules/user/actions';

class Header extends Component {
  renderLinks() {
    if ( this.props.isAuthenticated ) {
      return (
        <li key="signout" className="nav-item">
          <Link className="nav-link" to="/signout">Sign Out</Link>
        </li>
      );
    } else {
      return [
        <li key="signin" className="nav-item">
          <Link className="nav-link" to="/signin">Sign In</Link>
        </li>,
        <li key="signup" className="nav-item">
          <Link className="nav-link" to="/signup">Sign Up</Link>
        </li>
      ];
    }
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <Link to="/" className="navbar-brand">Redux Auth</Link>
          {this.renderLinks()}
        </ul>
      </nav>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    isAuthenticated: state.user.isAuthenticated
  }),
  actions
)(Header);
