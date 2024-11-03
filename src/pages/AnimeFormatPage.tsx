import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AnimePageContent from "../components/layout/AnimePageContent";
import {
  AnimeFormatQuery,
  AnimeFormatQueryVariables,
  MediafieldsFragment,
  MediaFormat,
  PageInfo,
} from "../graphql/types/graphql";
import { animeFormat } from "../services/animeFormat/queries";

const FormatPage = () => {
  const PER_PAGE_LIMIT = 40;
  const { page, formatType } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(page) : 1
  );

  const { loading, error, data, refetch } = useQuery<
    AnimeFormatQuery,
    AnimeFormatQueryVariables
  >(animeFormat, {
    variables: {
      page: currentPage,
      perPage: PER_PAGE_LIMIT,
      format: formatType as MediaFormat,
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
  const title = formatType?.toUpperCase().split("_").join(" ");
  return (
    <AnimePageContent
      title={`${title}`}
      pageInfo={pageInfo}
      animeList={list || []}
      baseRoute={`/format/${formatType}`}
      setCurrentPage={setCurrentPage}
      loading={loading}
      limit={PER_PAGE_LIMIT}
    />
  );
};

export default FormatPage;
