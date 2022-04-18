import React, { Suspense } from "react";
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import reportWebVitals from './reportWebVitals';
import "./i18n";

ReactDOM.render(
  <Suspense fallback='...Loading'>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </Suspense>,
  document.getElementById('root')
);
reportWebVitals();
