import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Intro from "./components/Intro";
import Booking from "./components/Booking";
import Driver from "./components/Driver";
import Captcha from "./components/Captcha";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Intro />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/driver",
    element: <Driver />,
  },
  {
    path: "/captcha",
    element: <Captcha />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
