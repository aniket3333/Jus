import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; // Import the Provider
import store from "./Store"; // Make sure you have imported the Redux store correctly
import App from "./App";
import "tailwindcss/tailwind.css";

console.log("hi");

ReactDOM.render(
  <React.StrictMode>
   
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
