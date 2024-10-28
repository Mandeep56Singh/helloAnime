import { useQuery } from "@apollo/client";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import AnimeCardGrid from "../components/layout/AnimeCardGrid";
import {
  MediafieldsFragment,
  SearchAnimeQuery,
  SearchAnimeQueryVariables,
} from "../graphql/types/graphql";
import { SearchAnime } from "../services/search/queries";
const ViewAllSearchResultPage = () => {
  const { searchQuery } = useParams();
  const { loading, error, data } = useQuery<
    SearchAnimeQuery,
    SearchAnimeQueryVariables
  >(SearchAnime, {
    skip: !searchQuery || searchQuery.trim().length <= 2,
    variables: { search: searchQuery, type: "ANIME" },
  });
  const media = data?.Media as MediafieldsFragment;
  const remainingMediaItem = data?.Media?.relations
    ?.nodes as unknown as MediafieldsFragment;
  const firstItem = {
    id: media.id,
    title: media.title,
    coverImage: media.coverImage?.large,
    format: media.format,
    status: media.status,
    episodes: media.episodes,
    duration: media.duration,
  };

  const result: MediafieldsFragment[] = [
    firstItem,
    ...(remainingMediaItem || []),
  ];
  return (
    <Stack spacing={1}>
      <Typography color="text.secondary" variant="h5">
        Search Results for:<i> {searchQuery}</i>
      </Typography>
      <AnimeCardGrid AnimeList={result}></AnimeCardGrid>

    </Stack>
  );
};

export default ViewAllSearchResultPage;
