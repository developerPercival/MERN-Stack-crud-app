import React from "react";
import { connect } from "react-redux";
import { readComments } from "../action/index";
import EditComment from "./EditComment";
import Comment from "./Comment";

class ListOfComments extends React.Component {
  //Data fetching
  componentDidMount() {
    //Call action creator
    this.props.readComments();
  }

  //Render all comments
  renderComments = () => {
    //Check if comments is empty
    if (!this.props.comments) {
      return <h1>Start writing your comment.</h1>;
    }

    //Return a block JSX
    return this.props.comments.map((comment) => {
      // Check isEdting
      return (
        <section key={comment._id}>
          {comment.isEditing ? (
            <EditComment comment={comment} />
          ) : (
            <Comment comment={comment} />
          )}
        </section>
      );
    });
  };

  // Render Component
  render() {
    return (
      <section>
        <h1>List of Comments</h1>

        {this.renderComments()}
      </section>
    );
  }
}

//Map state
const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};

export default connect(mapStateToProps, { readComments })(ListOfComments);
