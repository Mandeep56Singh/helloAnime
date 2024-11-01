import { useQuery } from "@apollo/client";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import {
  AnimeListItemFragment,
  TopHundredQuery,
  TopHundredQueryVariables,
} from "../../graphql/types/graphql";
import { topHundred } from "../../services/topHundred/queries";
import AnimeList from "../AnimeList/AnimeList";

const TopHundred = () => {
  const PER_PAGE_LIMIT = 18;
  const { loading, error, data } = useQuery<
    TopHundredQuery,
    TopHundredQueryVariables
  >(topHundred, {
    variables: {
      page: 1,
      perPage: PER_PAGE_LIMIT,
    },
  });

  if (error) {
    return <div>{error.message}</div>;
  }
  const animeList = data?.Page?.media as AnimeListItemFragment[];

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h3" color="text.secondary">
        Top Hundred
      </Typography>
      <AnimeList
        limit={PER_PAGE_LIMIT}
        data={animeList || []}
        loading={loading}
      ></AnimeList>
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
