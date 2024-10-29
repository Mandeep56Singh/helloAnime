import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnimePageContent from "../components/layout/AnimePageContent";
import {
  MediafieldsFragment,
  PageInfo,
  ProducerQuery,
  ProducerQueryVariables,
} from "../graphql/types/graphql";
import { producer } from "../services/producer/queries";

const StudioPage = () => {
  const PER_PAGE_LIMIT = 40;
  const { page, studio } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(page) : 1
  );

  const { loading, error, data, refetch } = useQuery<
    ProducerQuery,
    ProducerQueryVariables
  >(producer, {
    variables: {
      page: currentPage,
      perPage: PER_PAGE_LIMIT,
      search: studio,
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

  const list = data?.Page?.studios![0]?.media?.nodes as MediafieldsFragment[];
  console.log(list, "List");
  const pageInfo = data?.Page?.pageInfo as PageInfo;

  return (
    <AnimePageContent
      title={`${studio} Anime`}
      pageInfo={pageInfo}
      animeList={list || []}
      baseRoute={`/producer/${studio}`}
      setCurrentPage={setCurrentPage}
    />
  );
};

export default StudioPage;
