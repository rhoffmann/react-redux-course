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

    this._onTermChange = this._onTermChange.bind(this);
  }

  _onTermChange() {
    const newTerm = this._input.value;
    this.setState({ term: newTerm });
    this.props.onSearchTermChange(newTerm);
  }

  render() {
    return (
      <div className='search-bar' ref='searchBar'>
        <input
          ref={component => this._input = component}
          value={this.state.term}
          onChange={this._onTermChange}
          className="form-control"
          placeholder={this.props.placeholder}
          type="text"
        />
      </div>
    );
  }
}

SearchBar.defaultProps = {
  placeholder: 'Search...'
};

export default SearchBar;
