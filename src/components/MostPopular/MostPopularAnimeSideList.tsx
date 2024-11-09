import { useQuery } from "@apollo/client";
import { Stack, Typography } from "@mui/material";
import {
  AnimeListItemFragment,
  MostPopularQuery,
  MostPopularQueryVariables,
} from "../../graphql/types/graphql";
import { mostPopular } from "../../services/mostpopular/queries";
import AnimeList from "../AnimeList/AnimeList";

const MostPopularAnimeSideList = () => {
  const { loading, error, data } = useQuery<
    MostPopularQuery,
    MostPopularQueryVariables
  >(mostPopular, {
    variables: {
      page: 1,
      perPage: 10,
    },
  });
  if (error) {
    return <div>{error.message}</div>;
  }
  const mostPopular10Data = data?.Page?.media as AnimeListItemFragment[];

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h3" color="text.secondary">
        Most Popular
      </Typography>
      <AnimeList data={mostPopular10Data} loading={loading}></AnimeList>
    </Stack>
  );
};

export default MostPopularAnimeSideList;
