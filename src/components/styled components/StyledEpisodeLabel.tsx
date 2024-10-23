import MovieIcon from "@mui/icons-material/Movie";
import { Stack, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
type Props = {
  episodes: number;
};
const StyledEpisodeLabel: React.FC<Props> = ({ episodes }) => {
  return (
    <Stack
      direction={"row"}
      spacing={"4px"}
      alignItems={"center"}
      justifyContent={"start"}
      sx={{
        backgroundColor: `${green[200]}`,
        padding: "2px 6px",
        borderRadius: "4px",
      }}
    >
      <MovieIcon
        sx={{
          width: "12px",
          color: "black",
        }}
      ></MovieIcon>
      <Typography
        variant="caption"
        color="text.dark.primary"
        sx={{
          fontWeight: 700,
        }}
      >
        {episodes}
      </Typography>
    </Stack>
  );
};

export default StyledEpisodeLabel;
