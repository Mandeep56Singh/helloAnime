import { useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import AnimeInfoCard from "../components/AnimePage/AnimeInfoCard";
import AnimeMetaData from "../components/AnimePage/AnimeMetaData";
import AnimeCardGrid from "../components/layout/AnimeCardGrid";
import MostPopularAnimeSideList from "../components/MostPopular/MostPopularAnimeSideList";
import AnimePageSkeleton from "../components/Skeletons/AnimePageSkeleton";
import {
  GetAnimeByIdQuery,
  GetAnimeByIdQueryVariables,
  MediafieldsFragment,
} from "../graphql/types/graphql";
import { useSkeletonLoading } from "../hooks/useSkeletonLoading";
import { animePage } from "../services/animePage/queries";
const AnimePage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<
    GetAnimeByIdQuery,
    GetAnimeByIdQueryVariables
  >(animePage, {
    variables: { mediaId: Number(id) },
  });
  const loaded = useSkeletonLoading(loading);
  if (loading) {
    return <AnimePageSkeleton></AnimePageSkeleton>;
  } else if (data) {
    const animeData = data.Media!;
    const recommendedAnime = data.Media?.recommendations?.edges;

    const recommendedAnimeData: MediafieldsFragment[] | null | undefined =
      recommendedAnime?.map(
        (anime) => anime?.node?.mediaRecommendation
      ) as MediafieldsFragment[];

    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 4,
          opacity: loaded ? 1:0,
          transition: "opacity 0.3s ease-in-out"
        }}
      >
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          sx={{
            overflow: "hidden",
            marginInline: -4,
          }}
        >
          <AnimeInfoCard data={animeData}></AnimeInfoCard>
          <AnimeMetaData data={animeData}></AnimeMetaData>
        </Stack>
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          spacing={4}
        >
          <Stack direction={"column"} spacing={2} flex={{ lg: 3 }}>
            <Typography variant="h3" color="text.secondary">
              Recommended for you
            </Typography>
            <AnimeCardGrid
              AnimeList={recommendedAnimeData}
              loading={loading}
            ></AnimeCardGrid>
          </Stack>
          <MostPopularAnimeSideList></MostPopularAnimeSideList>
        </Stack>
      </Box>
    );
  } else {
    return <div> {error?.message}</div>;
  }
};

export default AnimePage;
