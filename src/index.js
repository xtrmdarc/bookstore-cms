import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App';
import booksReducer from './reducers/books';

const store = createStore(booksReducer, {
  books: [
    {
      id: parseInt(Math.random() * 1000, 10),
      title: 'Harry Potter',
      category: 'Sci-Fi',
    },
    {
      id: parseInt(Math.random() * 1000, 10),
      title: 'Holly Bible',
      category: 'History',
    },
    {
      id: parseInt(Math.random() * 1000, 10),
      title: 'The hobbit',
      category: 'Sci-Fi',
    },
    {
      id: parseInt(Math.random() * 1000, 10),
      title: 'Cashvertising',
      category: 'Learning',
    },
  ],
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
