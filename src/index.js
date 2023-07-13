import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import rootReducers from "./modules";
import { Provider } from "react-redux";
import loggerMiddelware from "./lib/loggerMiddleware";

const root = createRoot(document.getElementById("root"));
const store = createStore(rootReducers, applyMiddleware(loggerMiddelware));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
