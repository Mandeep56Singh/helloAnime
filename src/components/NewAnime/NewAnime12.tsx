import { useQuery } from "@apollo/client";
import { NewAnime12Query } from "../../graphql/types/graphql";
import { newAnime12 } from "../../services/newAnime/queries";
import AnimeCardGrid from "../layout/AnimeCardGrid";

const NewAnime12 = () => {
  const { loading, error, data } = useQuery<NewAnime12Query>(newAnime12, {
    variables: {
      page: 1,
      perPage: 12,
    },
  });

  if (loading) return <div>loading...</div>;
  else if (error) return <div>{error.message}</div>;

  const newAnimeList = data?.Page?.media;
  return <AnimeCardGrid AnimeList={newAnimeList || []}></AnimeCardGrid>;
};

export default NewAnime12;
