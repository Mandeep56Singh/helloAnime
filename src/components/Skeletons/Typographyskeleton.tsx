import { Skeleton, SxProps, Typography } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";
import React from "react";
type props = {
  typographyVariant?: TypographyProps["variant"];
  sx?: SxProps;
  children?:React.ReactNode
};
const TypographySkeleton: React.FC<props> = ({ typographyVariant, sx,children }) => {
  return (
    <Typography variant={typographyVariant} sx={sx}>
      <Skeleton variant="text">{children}</Skeleton>
    </Typography>
  );
};

export default TypographySkeleton;
