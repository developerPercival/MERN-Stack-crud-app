import React from "react";
import PostForm from "./PostForm";
import ListOfComments from "./ListOfComments";

const App = () => {
  return (
    <section className="container">
      <section className="main-content">
        <section className="grid">
          <PostForm />
          <ListOfComments />
        </section>
      </section>
    </section>
  );
};

export default App;
