import { Button, styled } from "@mui/material";

export const StyledChevronButton = styled(Button)(({ theme }) => ({
  backgroundColor: "rgba(255,255,255,.1)",
  color: theme.palette.text.primary,
  padding: "0.5rem",
  minWidth: "auto",
  zIndex:10,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.text.dark.primary,
  },
}));
