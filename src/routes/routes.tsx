import { createBrowserRouter } from "react-router-dom";
import DubbedAnimePage from "../pages/DubbedAnimePage";
import ErrorPage from "../pages/ErrorPage";
import GenrePage from "../pages/GenrePage";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import SubbedAnimePage from "../pages/SubbedAnimePage";
import TVSeriesPage from "../pages/TVSeriesPage";

const routes = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage></HomePage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/subbed-anime",
    element: <SubbedAnimePage></SubbedAnimePage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/dubbed-anime",
    element: <DubbedAnimePage></DubbedAnimePage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/movies",
    element: <MoviesPage></MoviesPage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/genre",
    element: <GenrePage></GenrePage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
  {
    path: "/tv-series",
    element: <TVSeriesPage></TVSeriesPage>,
    errorElement: <ErrorPage></ErrorPage>,
  },
]);

export default routes;
