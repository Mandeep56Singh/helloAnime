import { Box, Skeleton, Stack } from "@mui/material";
import Typographskeleton from "./Typographskeleton";

const AnimeCardSkeleton = () => {
  return (
    <Stack>
      <Skeleton
        variant="rectangular"
        sx={{
          aspectRatio: "0.7",
          width: "100%",
          height: "auto",
        }}
      />
      <Box
        sx={{
          padding: "8px 0px",
        }}
      >
        <Typographskeleton typographyVariant="subtitle1"></Typographskeleton>
        <Typographskeleton typographyVariant="caption"></Typographskeleton>
      </Box>
    </Stack>
  );
};

export default AnimeCardSkeleton;
