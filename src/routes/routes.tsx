import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AnimePage from "../pages/AnimePage";
import DubbedAnimePage from "../pages/DubbedAnimePage";
import ErrorPage from "../pages/ErrorPage";
import GenrePage from "../pages/GenrePage";
import HomePage from "../pages/HomePage";
import MoviesPage from "../pages/MoviesPage";
import SubbedAnimePage from "../pages/SubbedAnimePage";
import TVSeriesPage from "../pages/TVSeriesPage";
import ViewAllSearchResultPage from "../pages/ViewAllSearchResultPage";
import MostPopular from "../pages/MostPopular";
import TopAiring from "../pages/TopAiring";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "subbed-anime",
        element: <SubbedAnimePage></SubbedAnimePage>,
      },
      {
        path: "dubbed-anime",
        element: <DubbedAnimePage></DubbedAnimePage>,
      },
      {
        path: "movies",
        element: <MoviesPage></MoviesPage>,
      },
      {
        path: "genre",
        element: <GenrePage></GenrePage>,
      },
      {
        path: "tv-series",
        element: <TVSeriesPage></TVSeriesPage>,
      },
      {
        path: "search/:searchQuery",
        element: <ViewAllSearchResultPage></ViewAllSearchResultPage>,
      },
      {
        path: "anime/:id",
        element: <AnimePage></AnimePage>,
      },
      {
        path:"most-popular/:page?",
        element:<MostPopular></MostPopular>
      },
      {
        path:"top-airing/:page?",
        element:<TopAiring></TopAiring>
      }
    ],
  },
]);

export default routes;
