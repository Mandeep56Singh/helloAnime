import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MediafieldsFragment } from "../../graphql/types/graphql";

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
      to={`anime/${data.id}`}
      style={{
        textDecoration: "none",
      }}
    >
      <Box
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
              color: "secondary.main",
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
      </Box>
    </Link>
  );
};
export default SearchAnimeItem;
