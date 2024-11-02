import { Box, Stack } from "@mui/material";
import React from "react";
import TypographySkeleton from "./Typographyskeleton";

const AnimeMetaDataSkeleton = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        flex: { lg: 1 },
        padding: 4,
      }}
    >
      <Stack
        direction={"column"}
        spacing={0.5}
        sx={{
          zIndex: 1,
        }}
      >
        <TypographySkeleton typographyVariant="subtitle1"></TypographySkeleton>
        <TypographySkeleton typographyVariant="subtitle1"></TypographySkeleton>
        <TypographySkeleton typographyVariant="subtitle1"></TypographySkeleton>
        <TypographySkeleton typographyVariant="subtitle1"></TypographySkeleton>
        <TypographySkeleton typographyVariant="subtitle1"></TypographySkeleton>
        <TypographySkeleton typographyVariant="subtitle1"></TypographySkeleton>
      </Stack>
    </Box>
  );
};

export default AnimeMetaDataSkeleton;
