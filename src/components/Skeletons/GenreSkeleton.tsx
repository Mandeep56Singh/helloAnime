import { Grid2, Skeleton, Stack } from "@mui/material";

const GenreSkeleton = () => {
  return (
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
        <Skeleton variant="text"></Skeleton>
      </Stack>
    </Grid2>
  );
};

export default GenreSkeleton;
