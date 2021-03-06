import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Reducer, {getData} from './store/slice';
import {addPhotos} from'./store/middlewares/add-photos';
import './sass/style.scss';
import App from './components/app/app';

const store = configureStore({
  reducer: Reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(addPhotos),
});

Promise.all([
  store.dispatch(getData()),
])
.then(() => {
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
})
.catch((err) => {
  console.error(err);
});
