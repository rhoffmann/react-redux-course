import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../modules/user/actions';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
    )
  }
}

export default connect(
  (state, ownProps) => ({
    isAuthenticated: state.user.isAuthenticated
  }),
  actions
)(Header);
