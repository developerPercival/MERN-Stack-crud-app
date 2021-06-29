import express from "express";
import {
  getController,
  postController,
  updateController,
  deleteController,
} from "../controller/controller.js";

//Create new router
const router = express.Router();

//get route
router.get("/", getController);

//post route
router.post("/post", postController);

//update route
router.patch("/edit/:id", updateController);

//delete controller
router.delete("/delete/:id", deleteController);

//Export router
export default router;
