import { useQuery } from "@apollo/client";
import CircleIcon from "@mui/icons-material/Circle";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import {
  MediafieldsFragment,
  SearchAnimeQuery,
  SearchAnimeQueryVariables,
} from "../../graphql/types/graphql";
import { SearchAnime } from "../../services/search/queries";
type SearchResultProps = {
  searchQuery: string;
};

type animeItemProps = {
  data: MediafieldsFragment;
};
const SearchAnimeItem: React.FC<animeItemProps> = ({ data }) => {
  const minutes = data.duration || 0;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const timeDuration = `${hours}hr ${remainingMinutes}min`;
  return (
    <Link
      href={`${data.id}`}
      sx={{
        backgroundColor: "primary.main",
        padding: "14px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
        justifyContent: "start",
        textDecoration: "none",
        cursor: "pointer",
        ":hover": {
          backgroundColor: "primary.light",
          "& .anime-title": {
            color: "secondary.main", // Change this to any color you want on hover
          },
        },
      }}
    >
      <Box
        component={"img"}
        src={data.coverImage?.medium || ""}
        alt="anime Image"
        sx={{
          width: "45px",
          height: "60px",
          objectFit: "cover",
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0px",
          overflow: "hidden",
          alignItems: "start",
        }}
      >
        <Typography
          variant="subtitle1"
          className="anime-title"
          noWrap
          color="text.primary"
        >
          {data.title?.english || data.title?.romaji}
        </Typography>
        <Stack direction={"row"} gap={"26px"}>
          <Typography variant="caption" color="text.disabled">
            {data.status}
          </Typography>
          <Typography variant="caption" color="text.disabled">
            {data.format}
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={"14px"}>
          <Typography variant="caption" color="text.disabled">
            Episodes: {data.episodes}
          </Typography>
          {data.format?.toLowerCase() === "movie" && (
            <Typography variant="caption" color="text.disabled">
              {timeDuration}
            </Typography>
          )}
        </Stack>
      </Box>
    </Link>
  );
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
    const remainingMediaItem = data?.Media?.relations?.nodes as unknown as MediafieldsFragment
    const firstItem = {
          id: media.id,
          title: media.title,
          coverImage: media.coverImage,
          format: media.format,
          status: media.status,
          episodes: media.episodes,
          duration: media.duration,
        };

    const result:MediafieldsFragment[] = [firstItem, ...remainingMediaItem || []];

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
            <SearchAnimeItem
              data={value}
              key={value?.id}
              onClick={() => alert("under progress")}
            ></SearchAnimeItem>
          ))}
        </Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "primary.main",
          }}
        >
          <Button
            sx={{
              backgroundColor: "secondary.main",
              width: "90%",
              color: "",
              borderRadius: "0",
              marginBlock: "20px",
            }}
            onClick={() => alert("clicked")}
          >
            View All results
          </Button>
        </Box>
      </>
    );
  }
};

export default SearchResult;
