import { useQuery } from "@apollo/client";
import { SearchAnime } from "../services/search/queries";

export const useInstantSearch = (searchString: string) => {
  let searchValue = searchString.trim();
  if (searchValue.length < 3) searchValue = "";

  const { loading, error, data } = useQuery(SearchAnime, {
    variables: { search: searchValue },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return data;
};
