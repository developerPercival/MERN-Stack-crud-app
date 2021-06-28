import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import reducers from "./reducer";
import { Provider } from "react-redux";
import App from "./components/App";

const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
