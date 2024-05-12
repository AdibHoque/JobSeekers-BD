import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import JobDetails from "./pages/JobDetails";
import AllJobs from "./pages/AllJobs";
import AddJobs from "./pages/AddJob";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader: ({params}) =>
          fetch(`http://localhost:5000/jobs?id=${params.id}`),
      },
      {
        path: "/jobs",
        element: <AllJobs></AllJobs>,
      },
      {path: "/addjob", element: <AddJobs></AddJobs>},
    ],
  },
]);

export default routes;
