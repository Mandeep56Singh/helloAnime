import { useQuery } from "@apollo/client";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Grid2, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AnimeListOf5Query } from "../../graphql/types/graphql";
import { AnimeOf5 } from "../../services/animeOf5/queries";
import AnimeList from "../AnimeList/AnimeList";
const AnimeTop5 = () => {
  const { loading, error, data } = useQuery<AnimeListOf5Query>(AnimeOf5);

  if (loading) return "loading...";
  else if (error) return <div>{error.message}</div>;

  const TopAiring = data?.topAiringAnime5?.media;
  const TopFavorites = data?.mostFavoritedAnime5?.media;
  const LatestCompleted = data?.latestCompletedAnime5?.media;
  const MostPopular = data?.mostPopularAnime5?.media;
  const TopAnime5List = [TopAiring, TopFavorites, LatestCompleted, MostPopular];
  const ListItemNames = [
    "Top Airing",
    "Most Favourites",
    "Latest Completed",
    "Most Popular",
  ];
  return (
    <Grid2 container spacing={3}>
      {TopAnime5List.map((listData, i) => (
        <Grid2
          size={{
            xs: 12,
            md: 6,
            xl: 3,
          }}
        >
          <Stack direction={"column"} spacing={2}>
            <Typography variant="h5" color="text.secondary">
              {ListItemNames[i]}
            </Typography>
            <AnimeList data={listData || []}></AnimeList>
            <Stack
              direction={"row"}
              spacing={1}
              component={Link}
              justifyContent={"start"}
              to={`/${ListItemNames[i].toLowerCase().split(" ").join("-")}`}
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
        </Grid2>
      ))}
    </Grid2>
  );
};

export default AnimeTop5;
