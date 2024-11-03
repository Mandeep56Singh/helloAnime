import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import AnimeFormatPage from "../pages/AnimeFormatPage";
import AnimePage from "../pages/AnimePage";
import DubbedAnimePage from "../pages/DubbedAnimePage";
import ErrorPage from "../pages/ErrorPage";
import GenrePage from "../pages/GenrePage";
import HomePage from "../pages/HomePage";
import LatestCompleted from "../pages/LatestCompleted";
import MostFavourites from "../pages/MostFavourites";
import MostPopular from "../pages/MostPopular";
import MoviesPage from "../pages/MoviesPage";
import PopularThisSeasonPage from "../pages/PopularThisSeasonPage";
import StudioPage from "../pages/StudioPage";
import SubbedAnimePage from "../pages/SubbedAnimePage";
import TopAiring from "../pages/TopAiring";
import TVSeriesPage from "../pages/TVSeriesPage";
import UpcomingAnimePage from "../pages/UpcomingAnimePage";
import ViewAllSearchResultPage from "../pages/ViewAllSearchResultPage";
import TopHundredPage from "../pages/TopHundredPage";

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
        path: "genre/:type/:page?",
        element: <GenrePage></GenrePage>,
      },
      {
        path: "tv-series",
        element: <TVSeriesPage></TVSeriesPage>,
      },
      {
        path: "search/:searchQuery/:page?",
        element: <ViewAllSearchResultPage></ViewAllSearchResultPage>,
      },
      {
        path: "anime/:id",
        element: <AnimePage></AnimePage>,
      },
      {
        path: "most-popular/:page?",
        element: <MostPopular></MostPopular>,
      },
      {
        path: "top-airing/:page?",
        element: <TopAiring></TopAiring>,
      },
      {
        path: "latest-completed/:page?",
        element: <LatestCompleted></LatestCompleted>,
      },
      {
        path: "most-favourites/:page?",
        element: <MostFavourites></MostFavourites>,
      },
      {
        path: "producer/:studio/:page?",
        element: <StudioPage></StudioPage>,
      },
      {
        path: "format/:formatType/:page?",
        element: <AnimeFormatPage></AnimeFormatPage>,
      },
      {
        path: "upcoming/:page?",
        element: <UpcomingAnimePage></UpcomingAnimePage>,
      },
      {
        path: "popular-this-season/:page?",
        element: <PopularThisSeasonPage></PopularThisSeasonPage>,
      },
      {
        path: "top-hundred/:page?",
        element: <TopHundredPage></TopHundredPage>,
      },
    ],
  },
]);

export default routes;
