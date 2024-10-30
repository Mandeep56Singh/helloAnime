import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnimePageContent from "../components/layout/AnimePageContent";
import {
  MediafieldsFragment,
  MediaSeason,
  PageInfo,
  UpcomingQuery,
  UpcomingQueryVariables,
} from "../graphql/types/graphql";
import { upcoming } from "../services/upcoming/queries";

const UpcomingAnimePage = () => {
  const PER_PAGE_LIMIT = 40;
  const { page } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(page) : 1
  );

  const { loading, error, data, refetch } = useQuery<
    UpcomingQuery,
    UpcomingQueryVariables
  >(upcoming, {
    variables: {
      page: currentPage,
      perPage: PER_PAGE_LIMIT,
      seasonYear: 2025,
      season: "WINTER" as MediaSeason,
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
      title="Upcoming Anime"
      pageInfo={pageInfo}
      animeList={list || []}
      baseRoute="/upcoming"
      setCurrentPage={setCurrentPage}
    />
  );
};

export default UpcomingAnimePage;
