import { useQuery } from "@apollo/client";
import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  MediafieldsFragment,
  SearchAnimeQuery,
  SearchAnimeQueryVariables,
} from "../../graphql/types/graphql";
import { SearchAnime } from "../../services/search/queries";
import SearchAnimeItem from "./SearchAnimeItem";
type SearchResultProps = {
  searchQuery: string;
};

const SearchResult: React.FC<SearchResultProps> = ({ searchQuery }) => {
  console.log(searchQuery, "search value for searchResult");
  const { loading, error, data } = useQuery<
    SearchAnimeQuery,
    SearchAnimeQueryVariables
  >(SearchAnime, {
    skip: !searchQuery || searchQuery.trim().length <= 2,
    variables: { search: searchQuery, type: "ANIME" },
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
    const media = data?.Media as MediafieldsFragment;
    const remainingMediaItem = data?.Media?.relations
      ?.nodes as unknown as MediafieldsFragment;
    const firstItem = {
      id: media.id,
      title: media.title,
      coverImage: media.coverImage?.extraLarge,
      format: media.format,
      status: media.status,
      episodes: media.episodes,
      duration: media.duration,
    };

    const result: MediafieldsFragment[] = [
      firstItem,
      ...(remainingMediaItem || []),
    ];

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
          {result.slice(0, 5).map((value) => (
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
            to={`search-result/${searchQuery}`}
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
