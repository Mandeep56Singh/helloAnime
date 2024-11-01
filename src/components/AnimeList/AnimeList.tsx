import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { AnimeListItemFragment } from "../../graphql/types/graphql";
import { useSkeletonLoading } from "../../hooks/useSkeletonLoading";
import AnimeListSkeleton from "../Skeletons/AnimeListSkeleton";
import StyledEpisodeLabel from "../styled components/StyledEpisodeLabel";
type Props = {
  data: AnimeListItemFragment[];
  loading: boolean;
  error?: boolean;
};

const AnimeList: React.FC<Props> = ({ loading, data }) => {
  const loaded = useSkeletonLoading(loading);

  return (
    <List
      sx={{
        backgroundColor: "primary.light",
      }}
    >
      {loading
        ? Array.from(new Array(5)).map((_, index) => (
            <>
              <AnimeListSkeleton key={index}></AnimeListSkeleton>
            </>
          ))
        : data.map((anime, index) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                marginBottom: 1,
                opacity: loaded ? 1 : 0,
                transition: "opacity 0.5s ease, transform 0.5s ease",
              }}
              key={anime.id}
            >
              <ListItem component={Stack} direction={"row"} spacing={2}>
                <ListItemAvatar>
                  <Avatar
                    variant="square"
                    component={Link}
                    to={`/anime/${anime.id}`}
                    style={{
                      height: "76px",
                      width: "60px",
                      borderRadius: 8,
                    }}
                    src={`${anime?.coverImage?.medium}`}
                  ></Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography
                      variant="subtitle1"
                      color="text.primary"
                      component={Link}
                      to={`/anime/${anime.id}`}
                      sx={{
                        textDecoration: "none",
                        ":hover": {
                          color: "action.hover",
                        },
                      }}
                    >
                      {anime?.title?.english || anime?.title?.romaji}
                    </Typography>
                  }
                  secondary={
                    <Stack direction={"row"} spacing={2} alignItems={"center"}>
                      <StyledEpisodeLabel
                        episodes={anime?.episodes || 0}
                      ></StyledEpisodeLabel>
                      <Typography variant="body1" color="text.disabled">
                        {loading ? <Skeleton></Skeleton> : anime?.format}
                      </Typography>
                    </Stack>
                  }
                />
              </ListItem>
              {index !== data.length - 1 && (
                <Divider
                  variant="middle"
                  component={"li"}
                  sx={{
                    backgroundColor: "background.paper",
                  }}
                ></Divider>
              )}
            </Box>
          ))}
    </List>
  );
};

export default AnimeList;
