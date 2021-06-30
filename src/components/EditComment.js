import React from "react";
import { connect } from "react-redux";
import { updatePost } from "../action/index.js";

class EditComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.comment.title,
      comment: this.props.comment.comment,
    };
  }

  // form submit handler
  onFormSubmit = (e) => {
    e.preventDefault();

    // update post action creator
    this.props.updatePost(
      this.props.comment._id,
      this.state.title,
      this.state.comment
    );
  };

  // Render component
  render() {
    return (
      <form
        onSubmit={this.onFormSubmit}
        className="edit-background border-radius container-padding form-control"
      >
        <section>
          <h2>Edit Comment</h2>
        </section>

        <section>
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            value={this.state.title}
            onChange={(e) => {
              this.setState({ title: e.target.value });
            }}
          />
        </section>

        <section>
          <label htmlFor="comment">Comment: </label>
          <textarea
            cols="28"
            rows="5"
            required
            value={this.state.comment}
            onChange={(e) => {
              this.setState({ comment: e.target.value });
            }}
          ></textarea>
        </section>

        <button className="edit-button">Edit</button>
      </form>
    );
  }
}

export default connect(null, { updatePost })(EditComment);
