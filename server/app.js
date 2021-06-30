import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import commentRouter from "./router/router.js";

//Create new express app
const app = express();

//Use middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Use router
app.use("/comment", commentRouter);

//listen to a port
app.listen(4000, () => {
  console.log("Server is running in Port: 4000");

  //Connect to mongo
  mongoose
    .connect("mongodb://localhost:27017/react-crud-app", {
      useCreateIndex: true,
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB is connected!");
    })
    .catch(() => {
      console.log("Failed to connect!");
    });
});
