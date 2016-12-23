import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import * as actions from '../modules/user/actions';

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleAuth = this.toggleAuth.bind(this);
  }

  authButton() {
    return (
      <button onClick={this.toggleAuth} className="btn btn-primary">
        {this.props.isAuthenticated ? 'sign out' : 'sign in'}
      </button>
    );
  }

  toggleAuth() {
    this.props.setAuthenticated(!this.props.isAuthenticated);
  }

  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
            {this.authButton()}
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
