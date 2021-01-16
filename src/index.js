import React from "react";
import ReactDOM from "react-dom";
import InputContents from "./components/InputContents";
import ss from "./components/ss";
import Nav from "./components/Nav";

import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <InputContents />
    <Nav />
  </React.StrictMode>,
  document.getElementById("root")
);

<ss />;
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
