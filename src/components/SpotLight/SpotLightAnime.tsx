import React from "react";

import { Stack, Typography } from "@mui/material";
import { useSkeletonLoading } from "../../hooks/useSkeletonLoading";

type props = {
  title: string | null | undefined;
  img: string | null | undefined;
  spotNumber: number;
  loading:boolean;
};
const SpotLightAnime: React.FC<props> = ({ title, img, spotNumber,loading }) => {
  const loaded = useSkeletonLoading(loading);
  return (
    <Stack
      direction={"column"}
      justifyContent={"end"}
      sx={{
        backgroundImage: `linear-gradient(45deg, #201F31 15%, rgba(32, 31, 49, 0.7) 50%, rgba(32, 31, 49, 0) 100%), url(${img})`,

        aspectRatio: {
          xs: 4 / 2,
          md: 12 / 4,
        },
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center ",
        paddingInline: 2,
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.5s ease, transform 0.5s ease",
      }}
    >
      <Typography variant="h6" color="text.secondary">
        #{spotNumber} Spotlight
      </Typography>
      <Typography
        variant="h2"
        color="text.primary"
        sx={{
          marginBottom: 2,
        }}
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default SpotLightAnime;
