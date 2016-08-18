import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { selectBook } from '../actions';

const BookList = React.createClass({
  renderList() {
    const { books, actions } = this.props;
    return books.map( book =>
      <li
        key={book.id}
        onClick={() => actions.selectBook(book)}
        className="list-group-item">
        {book.title}
      </li>
    );
  },
  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
});

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object)
};

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({ selectBook: selectBook }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookList);
