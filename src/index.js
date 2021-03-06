import React from "react";
import ReactDOM from "react-dom/client";

import "./css/index.scss";
import App from "./App";

import Provider from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider>
    <App />
  </Provider>
);

