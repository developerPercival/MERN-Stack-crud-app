import React from "react";
import { connect } from "react-redux";
import { deletePost, editPost } from "../action";

//Post component
const Post = (props) => {
  // Destructure post property
  const { title, post, id } = props.post;

  console.log(props.post);

  //Render component
  return (
    <section>
      <h1>{title}</h1>
      <p>{post}</p>

      <section style={{ margin: "20px 0" }}>
        <button
          onClick={(e) => {
            e.preventDefault();

            props.editPost(id);
          }}
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();

            props.deletePost(id);
          }}
        >
          Delete
        </button>
      </section>
    </section>
  );
};

//Access redux state
const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { editPost, deletePost })(Post);
