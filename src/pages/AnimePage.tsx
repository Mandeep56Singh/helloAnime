import { useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import AnimeInfoCard from "../components/AnimePage/AnimeInfoCard";
import AnimeMetaData from "../components/AnimePage/AnimeMetaData";
import AnimeCardGrid from "../components/layout/AnimeCardGrid";
import MostPopularAnime10 from "../components/MostPopular/MostPopularAnime10";
import {
  GetAnimeByIdQuery,
  GetAnimeByIdQueryVariables,
  MediafieldsFragment,
} from "../graphql/types/graphql";
import { animePage } from "../services/animePage/queries";
const AnimePage = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<
    GetAnimeByIdQuery,
    GetAnimeByIdQueryVariables
  >(animePage, {
    variables: { mediaId: Number(id) },
  });

  if (loading) {
    return <div>Loading</div>;
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
          padding: "14px",
          display: "flex",
          flexDirection: "column",
          gap: 4,
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
            <AnimeCardGrid AnimeList={recommendedAnimeData}></AnimeCardGrid>
          </Stack>
            <MostPopularAnime10 ></MostPopularAnime10>
        </Stack>
      </Box>
    );
  } else {
    return <div> {error?.message}</div>;
  }
};

export default AnimePage;
