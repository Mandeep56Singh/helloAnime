import { Box, PaginationItem, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MediafieldsFragment, PageInfo } from "../../graphql/types/graphql";
import Genre from "../Genre/Genre";
import AnimeGridSkeleton from "../Skeletons/AnimeGridSkeleton";
import { StyledPagination } from "../styled components/StyledPagination";
import AnimeCardGrid from "./AnimeCardGrid";

type props = {
  title: string;
  animeList: MediafieldsFragment[];
  pageInfo: PageInfo | null;
  baseRoute: string;
  setCurrentPage: (page: number) => void;
  loading: boolean;
  limit: number;
};

const AnimePageContent: React.FC<props> = ({
  title,
  animeList,
  pageInfo,
  baseRoute,
  setCurrentPage,
  loading,
  limit,
}) => {
  const currentPage = pageInfo?.currentPage as number;
  const location = useLocation();
  const { page } = useParams();

  useEffect(() => {
    setCurrentPage(Number(page));
  }, [location, page, setCurrentPage]);

  return (
    <Stack
      direction={"column"}
      spacing={4}
      sx={{
        marginTop: 4,
      }}
    >
      <Stack
        direction={{
          xs: "column",
          lg: "row",
        }}
        spacing={4}
      >
        <Stack
          direction={"column"}
          spacing={2}
          flex={{ lg: 3 }}
          alignItems={"center"}
        >
          <Typography
            variant="h3"
            color="text.secondary"
            sx={{
              alignSelf: "self-start",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              width: "100%",
            }}
          >
            {loading ? (
              <AnimeGridSkeleton limit={limit}></AnimeGridSkeleton>
            ) : (
              <AnimeCardGrid AnimeList={animeList || []} loading={loading} />
            )}
          </Box>
          <StyledPagination
            count={pageInfo?.hasNextPage ? currentPage + 1 : currentPage}
            page={currentPage || 1}
            size="large"
            showFirstButton
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
