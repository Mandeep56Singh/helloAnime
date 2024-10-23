import { useQuery } from "@apollo/client";
import { Stack, Typography } from "@mui/material";
import { MostPopular10Query } from "../../graphql/types/graphql";
import { mostPopular10 } from "../../services/mostpopular/queries";
import AnimeList from "../AnimeList/AnimeList";

const MostPopularAnime10 = () => {
  const { loading, error, data } = useQuery<MostPopular10Query>(mostPopular10);
  if (loading) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  const mostPopular10Data = data?.Page?.media;

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h3" color="text.secondary">
        Most Popular
      </Typography>
      <AnimeList data={mostPopular10Data}></AnimeList>
    </Stack>
  );
};

export default MostPopularAnime10;
