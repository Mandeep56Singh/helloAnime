import { Skeleton, SxProps, Typography } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";
import React from "react";
type props = {
  typographyVariant?: TypographyProps["variant"];
  sx?: SxProps;
};
const TypographySkeleton: React.FC<props> = ({ typographyVariant, sx }) => {
  return (
    <Typography variant={typographyVariant} sx={sx}>
      <Skeleton variant="text"></Skeleton>
    </Typography>
  );
};

export default TypographySkeleton;
