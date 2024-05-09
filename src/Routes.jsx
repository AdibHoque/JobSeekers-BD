import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import App from "./App";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Root></Root>,
    children: [
      {
        path: "/",
        element: <App></App>,
      },
    ],
  },
]);

export default routes;
