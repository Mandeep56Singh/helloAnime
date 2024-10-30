import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimePageContent from "../components/layout/AnimePageContent";
import {
  MediafieldsFragment,
  PageInfo,
  TopHundredQuery,
  TopHundredQueryVariables,
} from "../graphql/types/graphql";
import { topHundred } from "../services/topHundred/queries";

const TopHundredPage = () => {
  const PER_PAGE_LIMIT = 40;
  const { page } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(page) : 1
  );

  const { loading, error, data, refetch } = useQuery<
    TopHundredQuery,
    TopHundredQueryVariables
  >(topHundred, {
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
      title="Top Hundred Anime"
      pageInfo={pageInfo}
      animeList={list || []}
      baseRoute="/top-hundred"
      setCurrentPage={setCurrentPage}
    />
  );
};

export default TopHundredPage;
