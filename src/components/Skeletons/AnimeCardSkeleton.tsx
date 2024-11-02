import { Box, Skeleton, Stack } from "@mui/material";
import TypographySkeleton from "./Typographyskeleton";

const AnimeCardSkeleton = () => {
  return (
    <Stack>
      <Skeleton
        variant="rectangular"
        sx={{
          aspectRatio: "0.7",
          width: "100%",
          height: "100%",
        }}
      />
      <Box
        sx={{
          padding: "8px 0px",
        }}
      >
        <TypographySkeleton typographyVariant="subtitle1"></TypographySkeleton>
        <TypographySkeleton typographyVariant="caption"></TypographySkeleton>
      </Box>
    </Stack>
  );
};

export default AnimeCardSkeleton;
