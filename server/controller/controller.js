import Comment from "../models/comment.js";

//get controller
export const getController = async (req, res) => {
  try {
    //Find all comments
    const comments = await Comment.find();

    //Responds with a response from mongoose
    res.json(comments).status(200);
  } catch (err) {
    console.log(err);
  }
};

//post controller
export const postController = async (req, res) => {
  try {
    //Create new comment
    const comment = await Comment(req.body);

    //Save new comment
    const newComment = await comment.save();

    //Respond with a response from mongoose
    res.json(newComment).status(200);
  } catch (err) {
    console.log(err);
  }
};

//update controller
export const updateController = async (req, res) => {
  try {
    //Destructure body and params
    const { id } = req.params;
    const { title, comment } = req.body;

    //Find document with id and update the property
    const updated = await Comment.findByIdAndUpdate(
      id,
      {
        title: title,
        comment: comment,
      },
      { new: true }
    );

    //Respond with a response from mongoose
    res.json(updated).status(200);
  } catch (err) {
    console.log(err);
  }
};

//delete controller
export const deleteController = async (req, res) => {
  try {
    //Destructure the id from request params
    const { id } = req.params;

    //Find by id and delete the document
    const deleted = await Comment.findByIdAndDelete(id);

    //Respond with a response form mongoose
    res.json(deleted).status(200);
  } catch (err) {
    console.log(err);
  }
};
