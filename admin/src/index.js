import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./i18n";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./store";
window.store = store;

ReactDOM.render(
  <Suspense fallback='...Loading'>
    <Provider store={store}>
      <Router>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Router>
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
