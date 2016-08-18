import React from 'react';
import { connect } from 'react-redux';

const BookDetail = React.createClass({
  render() {
    const { book } = this.props;
    if (!book) {
      return <div>Select a book</div>;
    }
    return(
      <div className="col-sm-8">
        <h3>Details for</h3>
        <div>Title: {book.title}</div>
        <div>Pages: {book.pages}</div>
      </div>
    );
  }
});

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  };
};

export default connect(mapStateToProps)(BookDetail);
