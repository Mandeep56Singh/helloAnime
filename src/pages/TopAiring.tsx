import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnimePageContent from "../components/layout/AnimePageContent";
import {
  MediafieldsFragment,
  PageInfo,
  TopAiringQuery,
  TopAiringQueryVariables,
} from "../graphql/types/graphql";
import { topAiring } from "../services/topAiring/queries";

const TopAiring = () => {
  const PER_PAGE_LIMIT = 40;
  const { page } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(page) : 1
  );

  const { loading, error, data, refetch } = useQuery<
    TopAiringQuery,
    TopAiringQueryVariables
  >(topAiring, {
    variables: {
      page: currentPage,
      perPage: PER_PAGE_LIMIT,
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    refetch({
      page: currentPage,
      perPage: PER_PAGE_LIMIT,
    });
  }, [currentPage, refetch]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const list = data?.Page?.media as MediafieldsFragment[];
  const pageInfo = data?.Page?.pageInfo as PageInfo;

  return (
    <AnimePageContent
      title="Top Airing"
      pageInfo={pageInfo}
      animeList={list || []}
      baseRoute="/top-airing"
      setCurrentPage={setCurrentPage}
    />
  );
};

export default TopAiring;
