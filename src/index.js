import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import rootReducers from "./modules";
import { Provider } from "react-redux";
// import loggerMiddelware from "./lib/loggerMiddleware";
import ReduxThunk from "redux-thunk";
import { createLogger } from "redux-logger";

const root = createRoot(document.getElementById("root"));
const logger = createLogger();
const store = createStore(rootReducers, applyMiddleware(logger, ReduxThunk));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
