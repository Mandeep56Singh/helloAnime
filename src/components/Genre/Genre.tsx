import { useQuery } from "@apollo/client";
import { Box, Grid2, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { GenreCollectionQuery } from "../../graphql/types/graphql";
import { genreCollection } from "../../services/genreCollection/queries";

const Genre = () => {
  const { loading, error, data } =
    useQuery<GenreCollectionQuery>(genreCollection);
  const theme = useTheme();
  const genreColorsArray = Object.values(theme.palette.genreColors);
  const genrelist = data?.GenreCollection;
  if (loading) return <div>loading...</div>;
  else if (error) return <div>{error.message}</div>;

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
        {genrelist?.map((genre, i) => (
          <Grid2
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
