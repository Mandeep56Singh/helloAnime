import { Grid2 } from "@mui/material";
import React from "react";
import { MediafieldsFragment } from "../../graphql/types/graphql";
import AnimeCard from "../AnimeCard/AnimeCard";

type AnimeCardGridProps = {
  AnimeList: MediafieldsFragment[];
  loading: boolean;
};
const AnimeCardGrid: React.FC<AnimeCardGridProps> = ({
  AnimeList,
  loading,
}) => {
  return (
    <Grid2 container spacing={2}>
      {AnimeList.map((Anime, index) => (
        <Grid2
          size={{
            xs: 6,
            sm: 4,
            md: 3,
          }}
          key={Anime.id + index}
        >
          <AnimeCard loading={loading} data={Anime}></AnimeCard>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default AnimeCardGrid;
