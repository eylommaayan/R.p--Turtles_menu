import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // וודא שהנתיב נכון
import "./index.css"; // ייבוא סגנונות CSS אם יש לך

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
