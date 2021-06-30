import React from "react";
import { connect } from "react-redux";
import { editPost, deleteComment } from "../action/index.js";

class Comment extends React.Component {
  // Render Comment
  render() {
    return (
      <section className="card-comment">
        <section className="card-content">
          <h3>{this.props.comment.title}</h3>
          <span>{this.props.comment.date}</span>
          <p>{this.props.comment.comment}</p>
        </section>

        <section className="card-button">
          <button
            onClick={(e) => {
              e.preventDefault();

              this.props.editPost(this.props.comment._id);
            }}
            className="edit"
          >
            Edit
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();

              this.props.deleteComment(this.props.comment._id);
            }}
            className="delete"
          >
            Delete
          </button>
        </section>
      </section>
    );
  }
}

export default connect(null, { editPost, deleteComment })(Comment);
