import MovieIcon from "@mui/icons-material/Movie";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { green } from "@mui/material/colors";
import { Box, Stack } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import { MediafieldsFragment } from "../../graphql/types/graphql";
import { useSkeletonLoading } from "../../hooks/useSkeletonLoading";
import { getTimeDuration } from "../../utils/utils";

type AnimeCardProps = {
  data: MediafieldsFragment;
  loading: boolean;
};
const AnimeCard: React.FC<AnimeCardProps> = ({ data, loading }) => {
  const timeDuration = getTimeDuration(data.duration);
  const loaded = useSkeletonLoading(loading);
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: "0",
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
      }}
    >
      <>
        <Box position={"relative"}>
          <Link to={`/anime/${data.id}`}>
            <CardMedia
              component={"img"}
              image={`${data.coverImage?.large}`}
              alt="Anime-Card"
              sx={{
                cursor: "pointer",
                aspectRatio: "0.7",
              }}
            />
          </Link>
          <Stack
            direction={"row"}
            spacing={"4px"}
            alignItems={"center"}
            justifyContent={"start"}
            sx={{
              position: "absolute",
              bottom: 20,
              left: 10,
              backgroundColor: `${green[200]}`,
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            <MovieIcon
              sx={{
                width: "12px",
                color: "black",
              }}
            ></MovieIcon>
            <Typography
              variant="button"
              color="text.dark.primary"
              sx={{
                fontSize: "12px",
              }}
            >
              {data.episodes}
            </Typography>
          </Stack>
        </Box>
        <CardContent
          component={"div"}
          sx={{
            backgroundColor: "primary.dark",
            padding: "8px 0px",
            overflow: "hidden",
          }}
        >
          <Stack
            sx={{
              overflow: "hidden",
            }}
          >
            <Typography
              component={Link}
              to={`/anime/${data.id}`}
              variant="subtitle1"
              noWrap
              sx={{
                textDecoration: "none",
                color: "text.primary",
                "&:hover": {
                  color: "text.secondary",
                },
              }}
            >
              {data.title?.english || data.title?.romaji}
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{
              overflow: "hidden",
            }}
          >
            <Typography variant="caption" color="text.disabled">
              {data.format || "format(?)"}
            </Typography>
            <Typography variant="caption" color="text.disabled">
              {data.status || "status(?)"}
            </Typography>
            {data.format?.toLowerCase() != "anime" ||
            data.format?.toLowerCase() != "manga" ? (
              <Typography variant="caption" color="text.disabled" noWrap>
                {timeDuration}
              </Typography>
            ) : null}
          </Stack>
        </CardContent>
      </>
    </Card>
  );
};

export default AnimeCard;
