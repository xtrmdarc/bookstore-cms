import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
import booksReducer from "./reducers/books";
import { Provider } from "react-redux";

const store = createStore(booksReducer, {
  books: [
    {
      id: parseInt(Math.random() * 1000),
      title: "Harry Potter",
      category: "Sci-Fi",
    },
    {
      id: parseInt(Math.random() * 1000),
      title: "Holly Bible",
      category: "History",
    },
    {
      id: parseInt(Math.random() * 1000),
      title: "The hobbit",
      category: "Sci-Fi",
    },
    {
      id: parseInt(Math.random() * 1000),
      title: "Cashvertising",
      category: "Learning",
    },
  ],
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
