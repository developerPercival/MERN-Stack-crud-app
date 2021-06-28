import React, { Component } from "react";
import { connect } from "react-redux";
import { addPost } from "../action";

class PostForm extends Component {
  //Handle form event
  onSubmitForm = (e) => {
    // prevent default behaviour
    e.preventDefault();

    //fetch input value
    const title = this.inputTitle.value;
    const post = this.inputPost.value;

    //create new object
    const newPost = {
      id: new Date(),
      title,
      post,
      isEditing: false,
    };

    //Dispatch and action creator
    this.props.addPost(newPost);
  };

  //Render component
  render() {
    return (
      <section>
        <h1>Create new post!</h1>

        <form onSubmit={this.onSubmitForm}>
          <section style={{ marginBottom: "15px" }}>
            <label htmlFor="title">Title: </label>
            <input
              required
              type="text"
              id="title"
              name="title"
              placeholder="Enter title"
              ref={(input) => {
                this.inputTitle = input;
              }}
            />
          </section>

          <section style={{ marginBottom: "15px" }}>
            <textarea
              required
              cols="28"
              rows="5"
              placeholder="Enter post"
              ref={(input) => {
                this.inputPost = input;
              }}
            />
          </section>

          <button>Post</button>
        </form>
      </section>
    );
  }
}

//Access redux state
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

//Connect mapstatetoprops, action creator, and component
export default connect(mapStateToProps, { addPost })(PostForm);
