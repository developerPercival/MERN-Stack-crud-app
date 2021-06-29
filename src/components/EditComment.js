import React from "react";
import { connect } from "react-redux";
import { updatePost } from "../action/index.js";

class EditComment extends React.Component {
  constructor(props) {
    super(props);

    this.state = { title: "", comment: "" };
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
      <form onSubmit={this.onFormSubmit}>
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
            defaultValue={this.props.comment.title}
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
            defaultValue={this.props.comment.comment}
            onChange={(e) => {
              this.setState({ comment: e.target.value });
            }}
          ></textarea>
        </section>

        <button>Edit</button>
      </form>
    );
  }
}

export default connect(null, { updatePost })(EditComment);
