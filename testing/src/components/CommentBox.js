import React, { Component } from 'react';

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
        <textarea
          value={this.state.comment}
          onChange={this.onHandleChange}
        />
        <button action="submit">Submit Comment</button>
      </form>
    );
  }
}

export default CommentBox;
