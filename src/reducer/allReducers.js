import {
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  UPDATE_POST,
} from "../config/config.js";

export const allReducers = (state = [], action) => {
  switch (action.type) {
    case ADD_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return state.filter((post) => post.id !== action.payload);
    case EDIT_POST:
      return state.map((post) =>
        post.id === action.payload
          ? { ...post, isEditing: !post.editing }
          : post
      );
    case UPDATE_POST:
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.payload.updatedTitle,
            post: action.payload.updatedPost,
            isEditing: !post.isEditing,
          };
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};
