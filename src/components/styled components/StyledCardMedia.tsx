import styled from "@emotion/styled";
import { CardMedia } from "@mui/material";

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "160px",
  [theme.breakpoints.up("sm")]: {
    width: "190px",
  },
  objectFit: "contain",
  aspectRatio: "0.7",
}));
