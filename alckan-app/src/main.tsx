import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import Providers from "./providers";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers />
  </React.StrictMode>,
);
