import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { createStore } from 'redux';
// import { movieReducer } from './Ex_MovieSeat/redux/reducer';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import MovieSlice from './Components/MovieSlice/MovieSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));
let store = configureStore({
  reducer: {
    MovieSlice: MovieSlice,
  }
})
// let store = createStore(movieReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
