import { useQuery } from "@apollo/client";
import { Stack, Typography } from "@mui/material";
import {
  AnimeListItemFragment,
  TopHundredQuery,
  TopHundredQueryVariables,
} from "../../graphql/types/graphql";
import AnimeList from "../AnimeList/AnimeList";
import { topHundred } from "../../services/topHundred/queries";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TopHundred = () => {
  const { loading, error, data } = useQuery<
    TopHundredQuery,
    TopHundredQueryVariables
  >(topHundred, {
    variables: {
      page: 1,
      perPage: 18,

    },
  });
  if (loading) {
    return <div>Loading</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }
  const animeList = data?.Page?.media as AnimeListItemFragment[];

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h3" color="text.secondary">
        Top Hundred
      </Typography>
      <AnimeList data={animeList || []}></AnimeList>
      <Stack
        direction={"row"}
        spacing={1}
        component={Link}
        justifyContent={"start"}
        alignItems={"center"}
        to={`/top-hundred`}
        sx={{
          color: "text.primary",
          textDecoration: "none",
          ":hover": {
            color: "action.hover",
            backgroundColor: "transparent",
          },
        }}
      >
        <Typography variant="subtitle1">View More</Typography>
        <ChevronRightIcon></ChevronRightIcon>
      </Stack>
    </Stack>
  );
};

export default TopHundred;
