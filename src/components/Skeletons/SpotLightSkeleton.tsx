// components/SpotLight/SpotLightSkeleton.tsx
import { Stack, Typography, Skeleton } from "@mui/material";

const SpotLightSkeleton = () => {
  return (
    <Stack
      direction={"column"}
      justifyContent={"end"}
      sx={{
        aspectRatio: { xs: 4 / 2, md: 12 / 4 },
        paddingInline: 2,
      }}
    >
      <Typography variant="h6" color="text.secondary">
        <Skeleton variant="text" width={80} height={20} />
      </Typography>
      <Typography variant="h2" color="text.primary" sx={{ marginBottom: 2 }}>
        <Skeleton variant="text" width="60%" height={40} />
      </Typography>
    </Stack>
  );
};

export default SpotLightSkeleton;
