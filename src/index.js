import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Lazy load the App component
const App = lazy(() => import("./App"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div>Loading...</div>}>
      <App />
    </Suspense>
  </React.StrictMode>
);
