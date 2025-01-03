import { useQuery } from "@apollo/client";
import {
  Box,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  InputMaybe,
  MediafieldsFragment,
  MediaSort,
  MediaType,
  SearchAnimeQuery,
  SearchAnimeQueryVariables,
} from "../../graphql/types/graphql";
import { SearchAnime } from "../../services/search/queries";
import SearchAnimeItem from "./SearchAnimeItem";
type SearchResultProps = {
  searchQuery: string;
};

const SearchResult: React.FC<SearchResultProps> = ({ searchQuery }) => {
  const PER_PAGE_LIMIT = 5;
  const sort = "SEARCH_MATCH" as
    | InputMaybe<InputMaybe<MediaSort> | InputMaybe<MediaSort>[]>
    | undefined;
  const { loading, error, data } = useQuery<
    SearchAnimeQuery,
    SearchAnimeQueryVariables
  >(SearchAnime, {
    skip: !searchQuery || searchQuery.trim().length <= 2,
    variables: {
      search: searchQuery,
      page: 1,
      perPage: PER_PAGE_LIMIT,
      sort: sort,
      type: "ANIME" as InputMaybe<MediaType> | undefined,
    },
  });

  if (loading) {
    return (
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress
          sx={{
            color: "white",
          }}
        />
      </Box>
    );
  } else if (error) {
    return (
      <Box
        sx={{
          backgroundColor: "primary.main",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="subtitle1" color="text.disabled">
          {error.message}
        </Typography>
      </Box>
    );
  } else if (data) {
    const result = data.Page?.media as MediafieldsFragment[];

    return (
      <>
        <Stack
          direction={"column"}
          spacing={0}
          divider={
            <Divider
              orientation="horizontal"
              sx={{
                color: "text.disabled",
                borderStyle: "dashed",
              }}
            ></Divider>
          }
        >
          {result.map((value) => (
            <SearchAnimeItem data={value} key={value?.id}></SearchAnimeItem>
          ))}
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "primary.main",
          }}
        >
          <Box
            component={Link}
            to={`search/${searchQuery}`}
            sx={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "secondary.main",
              width: "90%",
              borderRadius: "0",
              marginBlock: "20px",
              padding: "10px",
              "&:hover": {
                backgroundColor: "secondary.dark",
              },
            }}
          >
            <Typography variant={"subtitle1"} color="text.dark.primary">
              View All results
            </Typography>
          </Box>
        </Box>
      </>
    );
  }
};

export default SearchResult;
