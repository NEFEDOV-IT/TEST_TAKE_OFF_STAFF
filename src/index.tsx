import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.scss';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import './firebase'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter basename="/_sites/test_take_off_staff">
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>
);


