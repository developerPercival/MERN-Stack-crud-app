import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  UPDATE_POST,
} from "../config/config.js";

//Action for add post
export const addPost = (input) => {
  return {
    type: ADD_POST,
    payload: input,
  };
};

//Action for delete post
export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    payload: id,
  };
};

//Action for edit post
export const editPost = (id) => {
  return {
    type: EDIT_POST,
    payload: id,
  };
};

//Action for update post
export const updatePost = (updatedData, id) => {
  console.log(updatedData);

  return {
    type: UPDATE_POST,
    payload: updatedData,
    id: id,
  };
};
