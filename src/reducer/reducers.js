import {
  CREATE_COMMENT,
  GET_COMMENTS,
  DELETE_COMMENT,
  EDIT_COMMENT,
  UPDATE_COMMENT,
} from "../config/config.js";

// All reducers
export const reducers = (state = [], action) => {
  switch (action.type) {
    case CREATE_COMMENT:
      return [...state, action.payload.data];
    case GET_COMMENTS:
      return action.payload;
    case EDIT_COMMENT:
      return state.map((comment) => {
        if (comment._id === action.payload) {
          return {
            ...comment,
            isEditing: !comment.isEditing,
          };
        }

        return comment;
      });
    case UPDATE_COMMENT:
      return state.map((comment) => {
        if (comment._id === action.payload._id) {
          return {
            ...comment,
            title: action.payload.title,
            comment: action.payload.comment,
            isEditing: !comment.isEditing,
          };
        } else {
          return comment;
        }
      });
    case DELETE_COMMENT:
      return state.filter((comment) => comment._id !== action.payload);
    default:
      return state;
  }
};
