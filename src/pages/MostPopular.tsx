import { useQuery } from "@apollo/client";
import { useCallback } from "react";

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
  const { loading, error, data, fetchMore } = useQuery<
    MostPopularQuery,
    MostPopularQueryVariables
  >(mostPopular, {
    variables: {
      page: 1,
      perPage: PER_PAGE_LIMIT,
    },
    notifyOnNetworkStatusChange: true,
  });

  const handlePageChange = useCallback(
    (page: number) => {
      fetchMore({
        variables: { page },
      });
    },
    [fetchMore]
  );

  if (loading) return <div>loading...</div>;
  else if (error) return <div>{error.message}</div>;
  const list = data?.Page?.media as MediafieldsFragment[];
  const pageInfo = data?.Page?.pageInfo as PageInfo;
  return (
    <AnimePageContent
      title="Most Popular"
      pageInfo={pageInfo}
      animeList={list || []}
      onPageChange={handlePageChange}
    ></AnimePageContent>
  );
};

export default MostPopular;
