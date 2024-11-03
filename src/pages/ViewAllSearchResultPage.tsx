import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimePageContent from "../components/layout/AnimePageContent";
import {
  InputMaybe,
  MediafieldsFragment,
  MediaSort,
  MediaType,
  PageInfo,
  SearchAnimeQuery,
  SearchAnimeQueryVariables,
} from "../graphql/types/graphql";
import { SearchAnime } from "../services/search/queries";

const ViewAllSearchResultPage = () => {
  const { searchQuery, page } = useParams();

  const [currentPage, setCurrentPage] = useState<number>(
    page ? Number(page) : 1
  );
  const PER_PAGE_LIMIT = 40;

  const sort = "SEARCH_MATCH" as
    | InputMaybe<InputMaybe<MediaSort> | InputMaybe<MediaSort>[]>
    | undefined;

  const { loading, error, data, refetch } = useQuery<
    SearchAnimeQuery,
    SearchAnimeQueryVariables
  >(SearchAnime, {
    skip: !searchQuery || searchQuery.trim().length <= 2,
    variables: {
      search: searchQuery,
      page: currentPage,
      perPage: PER_PAGE_LIMIT,
      sort: sort,
      type: "ANIME" as InputMaybe<MediaType> | undefined,
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

  const result = data?.Page?.media as MediafieldsFragment[];
  const pageInfo = data?.Page?.pageInfo as PageInfo;
  console.log(result, "search result");

  return (
    <AnimePageContent
      title={`Search Results for: ${searchQuery}`}
      animeList={result || []}
      pageInfo={pageInfo}
      baseRoute={`/search/${searchQuery}`}
      setCurrentPage={setCurrentPage}
      loading={loading}
      limit={PER_PAGE_LIMIT}
    ></AnimePageContent>
  );
};

export default ViewAllSearchResultPage;
