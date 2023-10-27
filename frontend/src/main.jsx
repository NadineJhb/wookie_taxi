import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< HEAD
import "./style/index.scss";
=======
>>>>>>> 6225646ad0e32c9fd4f3d1803433f9c1c0541827

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
