import { useQuery } from "@apollo/client";
import { Grid2, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { GenreCollectionQuery } from "../../graphql/types/graphql";
import { useSkeletonLoading } from "../../hooks/useSkeletonLoading";
import { genreCollection } from "../../services/genreCollection/queries";
import GenreSkeleton from "../Skeletons/GenreSkeleton";

const Genre = () => {
  const { loading, error, data } =
    useQuery<GenreCollectionQuery>(genreCollection);
  const theme = useTheme();
  const genreColorsArray = Object.values(theme.palette.genreColors);
  console.log(theme, "Theme object");
  const genrelist = data?.GenreCollection;
  const loaded = useSkeletonLoading(loading);
  if (error) return <div>{error.message}</div>;

  return (
    <Stack direction={"column"} spacing={2}>
      <Typography variant="h3" color="text.secondary">
        Genres
      </Typography>
      <Grid2
        container
        spacing={1}
        sx={{
          backgroundColor: "primary.light",
          padding: 2,
        }}
      >
        {loading
          ? Array.from(new Array(25)).map(() => <GenreSkeleton></GenreSkeleton>)
          : genrelist?.map((genre, i) => (
              <Grid2
                sx={{
                  opacity: loaded ? 1 : 0,
                  transition: "opacity 0.3s ease-in-out",
                }}
                size={{
                  xs: 6,
                  sm: 4,
                }}
              >
                <Stack
                  sx={{
                    padding: 1,
                    overflow: "hidden",
                    borderRadius: 1,
                    ":hover": {
                      backgroundColor: "background.transparent",
                    },
                  }}
                >
                  <Typography
                    component={Link}
                    to={`/genre/${genre}`}
                    noWrap
                    title={`${genre}`}
                    color={`${genreColorsArray[i % genreColorsArray.length]}`}
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    {genre}
                  </Typography>
                </Stack>
              </Grid2>
            ))}
      </Grid2>
    </Stack>
  );
};

export default Genre;
