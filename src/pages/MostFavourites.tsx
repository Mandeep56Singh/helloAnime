import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnimePageContent from "../components/layout/AnimePageContent";
import {
  MediafieldsFragment,
  MostFavouritesQuery,
  MostFavouritesQueryVariables,
  PageInfo,
} from "../graphql/types/graphql";
import { mostFavourites } from "../services/mostFavorites/queries";

const MostFavourites = () => {
  const PER_PAGE_LIMIT = 40;
  const { page } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(page) : 1
  );

  const { loading, error, data, refetch } = useQuery<
    MostFavouritesQuery,
    MostFavouritesQueryVariables
  >(mostFavourites, {
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
      title="Most Favourites"
      pageInfo={pageInfo}
      animeList={list || []}
      baseRoute="/most-favourites"
      setCurrentPage={setCurrentPage}
      loading={loading}
      limit={PER_PAGE_LIMIT}
    />
  );
};

export default MostFavourites;
