import { useQuery } from "@apollo/client";
import {
  MediafieldsFragment,
  MediaSeason,
  UpcomingQuery,
  UpcomingQueryVariables,
} from "../../graphql/types/graphql";
import { upcoming } from "../../services/upcoming/queries";
import AnimeCardGrid from "../layout/AnimeCardGrid";
import AnimeGridSkeleton from "../Skeletons/AnimeGridSkeleton";

const PopularThisSeason = () => {
  const PER_PAGE_LIMIT = 12;
  const { loading, error, data } = useQuery<
    UpcomingQuery,
    UpcomingQueryVariables
  >(upcoming, {
    variables: {
      page: 1,
      perPage: PER_PAGE_LIMIT,
      seasonYear: 2024,
      season: "FALL" as MediaSeason,
    },
  });

  if (error) return <div>{error.message}</div>;
  const animeList = data?.Page?.media as MediafieldsFragment[];
  return loading ? (
    <AnimeGridSkeleton limit={PER_PAGE_LIMIT}></AnimeGridSkeleton>
  ) : (
    <AnimeCardGrid
      loading={loading}
      AnimeList={animeList || []}
    ></AnimeCardGrid>
  );
};

export default PopularThisSeason;
