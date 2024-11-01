import { Skeleton, Typography } from "@mui/material";
import { TypographyProps } from "@mui/material/Typography";
import React from "react";
type props = {
  typographyVariant?: TypographyProps["variant"];
};
const Typographskeleton: React.FC<props> = ({ typographyVariant }) => {
  return (
    <Typography variant={typographyVariant}>
      <Skeleton variant="text"></Skeleton>
    </Typography>
  );
};

export default Typographskeleton;
