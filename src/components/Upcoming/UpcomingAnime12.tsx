import { useQuery } from "@apollo/client";
import { UpcomingQuery } from "../../graphql/types/graphql";
import { upcoming } from "../../services/upcoming/queries";
import AnimeCardGrid from "../layout/AnimeCardGrid";

const UpcomingAnime12 = () => {
  const { loading, error, data } = useQuery<UpcomingQuery>(upcoming, {
    variables: {
      page: 1,
      perPage: 12,
    },
  });

  if (loading) return <div>loading...</div>;
  else if (error) return <div>{error.message}</div>;
  const upcomingAnimeList = data?.Page?.media;
  return <AnimeCardGrid AnimeList={upcomingAnimeList || []}></AnimeCardGrid>;
};

export default UpcomingAnime12;
