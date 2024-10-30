import { useQuery } from "@apollo/client";
import {
  MediafieldsFragment,
  MediaSeason,
  UpcomingQuery,
  UpcomingQueryVariables,
} from "../../graphql/types/graphql";
import { upcoming } from "../../services/upcoming/queries";
import AnimeCardGrid from "../layout/AnimeCardGrid";

const PopularThisSeason = () => {
  const { loading, error, data } = useQuery<
    UpcomingQuery,
    UpcomingQueryVariables
  >(upcoming, {
    variables: {
      page: 1,
      perPage: 12,
      seasonYear: 2024,
      season: "FALL" as MediaSeason,
    },
  });

  if (loading) return <div>loading...</div>;
  else if (error) return <div>{error.message}</div>;
  const upcomingAnimeList = data?.Page?.media as MediafieldsFragment[];
  return <AnimeCardGrid AnimeList={upcomingAnimeList || []}></AnimeCardGrid>;
};

export default PopularThisSeason;
