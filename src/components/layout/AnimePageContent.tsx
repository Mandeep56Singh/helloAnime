import { Stack, Typography } from "@mui/material";
import React from "react";
import { MediafieldsFragment, PageInfo } from "../../graphql/types/graphql";
import Genre from "../Genre/Genre";
import { StyledPagination } from "../styled components/StyledPagination";
import AnimeCardGrid from "./AnimeCardGrid";

type props = {
  title: string;
  animeList: MediafieldsFragment[];
  pageInfo: PageInfo | null;
  onPageChange: (page: number) => void;
};
const AnimePageContent: React.FC<props> = ({
  title,
  animeList,
  onPageChange,
  pageInfo,
}) => {
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    onPageChange(value);
  };
  console.log("Page", pageInfo, "page number", pageInfo?.currentPage);
  return (
    <Stack direction={"column"} spacing={4}>
      <Typography variant="h3" color="text.secondary">
        {title}
      </Typography>
      <Stack
        direction={{
          xs: "column",
          lg: "row",
        }}
        spacing={4}
      >
        <Stack
          direction={"column"}
          spacing={4}
          flex={{ lg: 3 }}
          alignItems={"center"}
        >
          <AnimeCardGrid AnimeList={animeList || []}></AnimeCardGrid>
          <StyledPagination
            count={pageInfo?.lastPage || 10}
            page={pageInfo?.currentPage || 1}
            onChange={handleChange}
            size="large"
            showFirstButton
            showLastButton
          ></StyledPagination>
        </Stack>
        <Stack direction={"column"} spacing={2} flex={{ lg: 1 }}>
          <Genre></Genre>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AnimePageContent;
