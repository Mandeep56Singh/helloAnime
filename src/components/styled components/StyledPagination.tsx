import { Pagination, styled } from "@mui/material";

export const StyledPagination = styled(Pagination)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  padding: theme.spacing(2),
  size:"large",
  "& .MuiPaginationItem-root": {
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.text.disabled,
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.primary.light,
    },
    "&.Mui-selected": {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.text.dark.primary,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.dark.primary,
      },
    },
  },

  // Adjust spacing for pagination buttons if needed
  "& .MuiPagination-ul": {
    gap: theme.spacing(1),
  },
}));

