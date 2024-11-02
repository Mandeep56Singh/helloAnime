import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnimePageContent from "../components/layout/AnimePageContent";
import {
  GenreQuery,
  GenreQueryVariables,
  MediafieldsFragment,
  PageInfo,
} from "../graphql/types/graphql";
import { genre } from "../services/genre/queries";

const GenrePage = () => {
  const PER_PAGE_LIMIT = 40;
  const { page, type } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(page) : 1
  );

  const { loading, error, data, refetch } = useQuery<
    GenreQuery,
    GenreQueryVariables
  >(genre, {
    variables: {
      page: currentPage,
      perPage: PER_PAGE_LIMIT,
      genres: type,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    refetch({
      page: currentPage,
      perPage: PER_PAGE_LIMIT,
    });
  }, [currentPage, refetch]);

  if (error) return <div>{error.message}</div>;

  const list = data?.Page?.media as MediafieldsFragment[];
  const pageInfo = data?.Page?.pageInfo as PageInfo;

  return (
    <AnimePageContent
      title={`${type} Anime`}
      pageInfo={pageInfo}
      animeList={list || []}
      baseRoute={`/genre/${type}`}
      setCurrentPage={setCurrentPage}
      loading={loading}
      limit={PER_PAGE_LIMIT}
    />
  );
};

export default GenrePage;
