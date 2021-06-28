import React, { Component } from "react";
import { connect } from "react-redux";
import Post from "./Post";
import EditPost from "./EditPost";

// AllPost component
class AllPost extends Component {
  //render all post
  renderAllPost = () => {
    //Check if props is empty
    if (!this.props.posts) {
      return null;
    }

    //return a list of Post component
    return this.props.posts.map((post) => {
      return (
        <section key={post.id}>
          {post.isEditing ? (
            <EditPost post={post} key={post.title} />
          ) : (
            <Post post={post} key={post.title} />
          )}
        </section>
      );
    });
  };

  //Render component
  render() {
    return (
      <section>
        <h1>All Post here!</h1>
        {this.renderAllPost()}
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

export default connect(mapStateToProps)(AllPost);
