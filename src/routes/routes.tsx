import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import PageTitle from "../components/PageTitle";
import AnimeFormatPage from "../pages/AnimeFormatPage";
import AnimePage from "../pages/AnimePage";
import ErrorPage from "../pages/ErrorPage";
import GenrePage from "../pages/GenrePage";
import HomePage from "../pages/HomePage";
import LatestCompleted from "../pages/LatestCompleted";
import MostFavourites from "../pages/MostFavourites";
import MostPopular from "../pages/MostPopular";
import PopularThisSeasonPage from "../pages/PopularThisSeasonPage";
import StudioPage from "../pages/StudioPage";
import TopAiring from "../pages/TopAiring";
import TopHundredPage from "../pages/TopHundredPage";
import UpcomingAnimePage from "../pages/UpcomingAnimePage";
import ViewAllSearchResultPage from "../pages/ViewAllSearchResultPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: (
          <>
            <PageTitle title="Watch Anime Online - Home" />
            <HomePage />
          </>
        ),
      },
      {
        path: "genre/:type/:page?",
        element: (
          <>
            <PageTitle title="Browse Anime by Genre" />
            <GenrePage />
          </>
        ),
      },
      {
        path: "search/:searchQuery/:page?",
        element: (
          <>
            <PageTitle title="Search Results" />
            <ViewAllSearchResultPage />
          </>
        ),
      },
      {
        path: "anime/:id",
        element: (
          <>
            <PageTitle title="Anime Details" />
            <AnimePage />
          </>
        ),
      },
      {
        path: "most-popular/:page?",
        element: (
          <>
            <PageTitle title="Most Popular Anime" />
            <MostPopular />
          </>
        ),
      },
      {
        path: "top-airing/:page?",
        element: (
          <>
            <PageTitle title="Top Airing Anime" />
            <TopAiring />
          </>
        ),
      },
      {
        path: "latest-completed/:page?",
        element: (
          <>
            <PageTitle title="Latest Completed Anime" />
            <LatestCompleted />
          </>
        ),
      },
      {
        path: "most-favourites/:page?",
        element: (
          <>
            <PageTitle title="Most Favourite Anime" />
            <MostFavourites />
          </>
        ),
      },
      {
        path: "producer/:studio/:page?",
        element: (
          <>
            <PageTitle title="Anime by Studio" />
            <StudioPage />
          </>
        ),
      },
      {
        path: "format/:formatType/:page?",
        element: (
          <>
            <PageTitle title="Browse Anime Formats" />
            <AnimeFormatPage />
          </>
        ),
      },
      {
        path: "upcoming/:page?",
        element: (
          <>
            <PageTitle title="Upcoming Anime" />
            <UpcomingAnimePage />
          </>
        ),
      },
      {
        path: "popular-this-season/:page?",
        element: (
          <>
            <PageTitle title="Popular Anime This Season" />
            <PopularThisSeasonPage />
          </>
        ),
      },
      {
        path: "top-hundred/:page?",
        element: (
          <>
            <PageTitle title="Top 100 Anime" />
            <TopHundredPage />
          </>
        ),
      },
    ],
  },
]);

export default routes;
