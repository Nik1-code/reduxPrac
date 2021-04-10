import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const createStoreWithApplyMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithApplyMiddleware(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
