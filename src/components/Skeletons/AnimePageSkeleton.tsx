import { Box, Stack, Typography } from "@mui/material";
import AnimeGridSkeleton from "./AnimeGridSkeleton";
import AnimeInfoCardSkeleton from "./AnimeInfoCardSkeleton";
import AnimeListSkeleton from "./AnimeListSkeleton";
import AnimeMetaDataSkeleton from "./AnimeMetaDataSkeleton";

const AnimePageSkeleton = () => {
  return (
    <Box
      sx={{
        padding: "14px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Stack
        direction={{
          xs: "column",
          lg: "row",
        }}
        sx={{
          overflow: "hidden",
          marginInline: -4,
        }}
      >
        <AnimeInfoCardSkeleton></AnimeInfoCardSkeleton>
        <AnimeMetaDataSkeleton></AnimeMetaDataSkeleton>
      </Stack>
      <Stack
        direction={{
          xs: "column",
          lg: "row",
        }}
        spacing={4}
      >
        <Stack direction={"column"} spacing={2} flex={{ lg: 3 }}>
          <Typography variant="h3" color="text.secondary">
            Recommended for you
          </Typography>
          <AnimeGridSkeleton limit={6}></AnimeGridSkeleton>
        </Stack>
        <Stack
          flex={{ lg: 1 }}
          sx={{
            backgroundColor: "primary.light",
          }}
        >
          {Array.from(new Array(10)).map((_, i) => (
            <AnimeListSkeleton key={i}></AnimeListSkeleton>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AnimePageSkeleton;
