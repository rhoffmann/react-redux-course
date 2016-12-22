import React, { Component } from 'react';

import { connect } from 'react-redux';
import fromComments from '../modules/comments';

export class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);

    this.state = {
      comment: ''
    };
  }
  onHandleSubmit(evt) {
    evt.preventDefault();

    this.props.saveComment(this.state.comment);

    this.setState({
      comment: ''
    });
  }
  onHandleChange(evt) {
    this.setState({
      comment: evt.target.value
    });
  }
  render() {
    return (
      <form
        onSubmit={this.onHandleSubmit}
        className="comment-box"
      >
        <h4>Add a comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.onHandleChange}
        />
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  fromComments.actions
)(CommentBox);
