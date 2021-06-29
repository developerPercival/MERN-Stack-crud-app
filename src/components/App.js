import React from "react";
import PostForm from "./PostForm";
import ListOfComments from "./ListOfComments";

const App = () => {
  return (
    <section>
      <h1>Application is running!</h1>

      <PostForm />

      <ListOfComments />
    </section>
  );
};

export default App;
