import { PaginationItem, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { MediafieldsFragment, PageInfo } from "../../graphql/types/graphql";
import Genre from "../Genre/Genre";
import { StyledPagination } from "../styled components/StyledPagination";
import AnimeCardGrid from "./AnimeCardGrid";

type props = {
  title: string;
  animeList: MediafieldsFragment[];
  pageInfo: PageInfo | null;
  baseRoute: string;
  setCurrentPage: (page: number) => void;
  stableLastPage: number; // Use stable last page from parent
};

const AnimePageContent: React.FC<props> = ({
  title,
  animeList,
  pageInfo,
  baseRoute,
  setCurrentPage,
  stableLastPage,
}) => {
  const currentPage = pageInfo?.currentPage as number;

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

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
          <AnimeCardGrid AnimeList={animeList || []} />
          <StyledPagination
            count={stableLastPage || 10}
            page={currentPage || 1}
            size="large"
            showFirstButton
            showLastButton
            onChange={handleChange}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={`${baseRoute}/${item.page}`}
                {...item}
              />
            )}
          />
        </Stack>
        <Stack direction={"column"} spacing={2} flex={{ lg: 1 }}>
          <Genre />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AnimePageContent;
