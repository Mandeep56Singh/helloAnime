import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { Media } from "../../graphql/types/graphql";
import StyledEpisodeLabel from "../styled components/StyledEpisodeLabel";

type Props = {
  data: Media[];
};

const AnimeList: React.FC<Props> = ({ data }) => {
  return (
    <List
      sx={{
        backgroundColor: "primary.light",
      }}
    >
      {data.map((anime, index) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 1,
            marginBottom: 1,
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
                    {anime?.format}
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
