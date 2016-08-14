import React, { Component, PropTypes } from 'react';

class SearchBar extends Component {

  static propTypes: {
    placeholder: PropTypes.string
  }

  constructor(props) {
    super(props);

    // getInitialState
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div ref='piff'>
        <input
          ref={component => this._input = component}
          value={this.state.term}
          onChange={() => this.setState({ term: this._input.value })}
          className="form-control"
          placeholder={this.props.placeholder}
          type="text"
        />
        <h3>Term:{this.state.term}</h3>
      </div>
    );
  }
}

SearchBar.defaultProps = {
  placeholder: 'Search...'
};

export default SearchBar;
