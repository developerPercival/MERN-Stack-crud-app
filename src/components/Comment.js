import React from "react";
import { connect } from "react-redux";
import { editPost, deleteComment } from "../action/index.js";

class Comment extends React.Component {
  // Render Comment
  render() {
    return (
      <section>
        <h3>{this.props.comment.title}</h3>
        <span>{this.props.comment.date}</span>
        <p>{this.props.comment.comment}</p>
        <button
          onClick={(e) => {
            e.preventDefault();

            this.props.editPost(this.props.comment._id);
          }}
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();

            this.props.deleteComment(this.props.comment._id);
          }}
        >
          Delete
        </button>
      </section>
    );
  }
}

export default connect(null, { editPost, deleteComment })(Comment);
