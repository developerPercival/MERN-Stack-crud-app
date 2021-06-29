import {
  CREATE_COMMENT,
  GET_COMMENTS,
  EDIT_COMMENT,
  UPDATE_COMMENT,
  DELETE_COMMENT,
} from "../config/config.js";
import connectServer from "../api/index.js";

//Create new comment
export const createComment =
  ({ title, comment, isEditing }) =>
  async (dispatch) => {
    try {
      // Post request
      const response = await connectServer.post("/comment/post", {
        title,
        comment,
        isEditing,
      });

      // Dispatch response
      dispatch({ type: CREATE_COMMENT, payload: { data: response.data } });
    } catch (err) {
      console.log(err);
    }
  };

//Fetch all comments
export const readComments = () => async (dispatch) => {
  try {
    // Get request
    const response = await connectServer.get("/comment/");

    //Dispatch response
    dispatch({ type: GET_COMMENTS, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

//Edit post
export const editPost = (id) => {
  return {
    type: EDIT_COMMENT,
    payload: id,
  };
};

//Udpate post
export const updatePost = (id, title, comment) => async (dispatch) => {
  try {
    //Update request
    const response = await connectServer.patch(`/comment/edit/${id}`, {
      title: title,
      comment: comment,
    });

    //Dispatch response
    dispatch({ type: UPDATE_COMMENT, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

//Delete comment
export const deleteComment = (id) => async (dispatch) => {
  try {
    // Delete request
    const response = await connectServer.delete(`/comment/delete/${id}`);

    // Dispatch response
    dispatch({ type: DELETE_COMMENT, payload: response.data._id });
  } catch (err) {
    console.log(err);
  }
};
