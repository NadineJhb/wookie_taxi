import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import DriversPage from "./pages/DriversPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/driver",
    element: <DriversPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
