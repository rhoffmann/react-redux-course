import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const CommentList = ({ comments, ...props }) => {
  return (
    <ul className="comment-list">
      {comments.map(comment =>
        <li key={comment}>{comment}</li>
      )}
    </ul>
  );
};

CommentList.propTypes = {
  comments: PropTypes.array
};

CommentList.defaultProps = {
  comments: []
};

export default connect(
  (state) => ({
    comments: state.comments
  }),
  // (dispatch, ownProps) => ({ })
)(CommentList);
