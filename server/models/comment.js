import mongoose from "mongoose";

//Create schema
const commentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  isEditing: {
    type: Boolean,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

//Create model
const Comment = mongoose.model("Comment", commentSchema);

//Export comment
export default Comment;
