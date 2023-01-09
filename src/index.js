import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import App from "App";

import { SoftUIControllerProvider } from "context";

ReactDOM.render(
  <BrowserRouter>
    <SoftUIControllerProvider>
      <App />
    </SoftUIControllerProvider>
  </BrowserRouter>,
  
  document.getElementById("root")
);
