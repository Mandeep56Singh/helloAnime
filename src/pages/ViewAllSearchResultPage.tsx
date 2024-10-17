import { Box, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
const ViewAllSearchResultPage = () => {
  const { searchQuery } = useParams();
  return (
    <Box>
      <Typography>Search Results for:{searchQuery}</Typography>
    </Box>
  );
};

export default ViewAllSearchResultPage;
