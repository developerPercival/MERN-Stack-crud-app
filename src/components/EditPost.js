import React, { Component } from "react";
import { updatePost } from "../action";
import { connect } from "react-redux";

class EditPost extends Component {
  //Form submit handler
  onSubmitHandler = (e) => {
    //Prevent default behaviour
    e.preventDefault();

    //get updated title and post
    const updatedTitle = this.getTitle.value;
    const updatedPost = this.getPost.value;

    //create new object
    const data = {
      updatedTitle,
      updatedPost,
    };

    //make and action
    this.props.updatePost(data, this.props.post.id);
  };

  //Render JSX
  render() {
    console.log(this.props);

    return (
      <section>
        <h1>Edit Post</h1>

        <form onSubmit={this.onSubmitHandler}>
          <section style={{ marginBottom: "15px" }}>
            <label htmlFor="title">Edit Title: </label>
            <input
              type="text"
              id="title"
              name="title"
              ref={(input) => {
                this.getTitle = input;
              }}
              defaultValue={this.props.post.title}
            />
          </section>

          <section style={{ marginBottom: "15px" }}>
            <textarea
              row="5"
              cols="28"
              ref={(input) => {
                this.getPost = input;
              }}
              defaultValue={this.props.post.post}
            ></textarea>
          </section>

          <button>Update</button>
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { updatePost })(EditPost);
