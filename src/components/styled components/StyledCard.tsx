import { Card, styled } from "@mui/material";

export const StyledCard = styled(Card)(({ theme }) => ({
    borderRadius:0,
    boxShadow:"none",
    backgroundColor:theme.palette.primary.dark
}));
