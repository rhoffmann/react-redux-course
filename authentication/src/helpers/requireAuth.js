import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function requireAuth(WrappedComponent) {
  class Authentication extends Component {
    static contextTypes = {
      router: React.PropTypes.object
    };
    componentWillMount() {
      if (!this.props.isAuthenticated) {
        this.context.router.push('/');
      }
    }
    componentWillUpdate(newProps) {
      if (!newProps.isAuthenticated) {
        this.context.router.push('/');
      }
    }
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.user.isAuthenticated
    }
  }

  return connect(mapStateToProps)(Authentication);
}
