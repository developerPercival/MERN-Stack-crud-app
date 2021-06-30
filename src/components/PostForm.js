import React from "react";
import { connect } from "react-redux";
import { createComment } from "../action/index.js";

class PostForm extends React.Component {
  // Initialize constructor and state
  constructor(props) {
    super(props);

    this.state = { title: "", comment: "" };
  }

  //Title input handler
  onTitleInput = (e) => {
    e.preventDefault();

    this.setState({ title: e.target.value });
  };

  //Comment input handler
  onCommentInput = (e) => {
    e.preventDefault();

    this.setState({ comment: e.target.value });
  };

  //Form submit handler
  onSubmitForm = (e) => {
    e.preventDefault();

    //Create new comment object
    const comment = {
      title: this.state.title,
      comment: this.state.comment,
      isEditing: false,
    };

    //Call action creator
    this.props.createComment(comment);

    //Reset state
    this.setState({ title: "" });
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form
        onSubmit={this.onSubmitForm}
        className="background-primary border-radius container-padding form-control"
      >
        <section className="form-heading">
          <h2>Create Comment</h2>
        </section>

        <section className="form-input">
          <label htmlFor="title">Title: </label>
          <input
            type="text"
            id="title"
            name="title"
            onChange={this.onTitleInput}
            value={this.state.title}
            required
          />
        </section>

        <section className="form-input">
          <label htmlFor="comment">Comment: </label>
          <textarea
            cols="28"
            rows="5"
            onChange={this.onCommentInput}
            value={this.state.comment}
            required
          ></textarea>
        </section>

        <button className="form-button">Create</button>
      </form>
    );
  }
}

export default connect(null, { createComment })(PostForm);
