import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnimePageContent from "../components/layout/AnimePageContent";
import {
  MediafieldsFragment,
  MostPopularQuery,
  MostPopularQueryVariables,
  PageInfo,
} from "../graphql/types/graphql";
import { mostPopular } from "../services/mostpopular/queries";

const MostPopular = () => {
  const PER_PAGE_LIMIT = 40;
  const { page } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(page) : 1
  );

  const { loading, error, data, refetch } = useQuery<
    MostPopularQuery,
    MostPopularQueryVariables
  >(mostPopular, {
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

  if (error) return <div>{error.message}</div>;

  const list = data?.Page?.media as MediafieldsFragment[];
  const pageInfo = data?.Page?.pageInfo as PageInfo;

  return (
    <AnimePageContent
      title="Most Popular"
      pageInfo={pageInfo}
      animeList={list || []}
      baseRoute="/most-popular"
      setCurrentPage={setCurrentPage}
      loading={loading}
      limit={PER_PAGE_LIMIT}
    />
  );
};

export default MostPopular;
