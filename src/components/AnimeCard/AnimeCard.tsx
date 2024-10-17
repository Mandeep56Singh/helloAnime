import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import { Box, Stack, styled } from "@mui/system";
import React from "react";
import { MediafieldsFragment } from "../../graphql/types/graphql";

type AnimeCardProps = {
  data: MediafieldsFragment;
};

const ResponsiveCard = styled(Card)(({ theme }) => ({
  width: "calc(25% - 1rem)",

  // Apply media queries
  [theme.breakpoints.down("xl")]: {
    width: "calc(25% - 1rem)",
  },
  [theme.breakpoints.down("lg")]: {
    width: "calc(25% - 1rem)",
  },
  [theme.breakpoints.down("md")]: {
    width: "calc(33.33% - 1rem)",
  },
  [theme.breakpoints.down("sm")]: {
    width: "calc(50% - 1rem)",
  },
}));

const AnimeCard: React.FC<AnimeCardProps> = ({ data }) => {
  const minutes = data.duration || 0;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  const timeDuration = `${hours}hr ${remainingMinutes}min`;
  return (
    <ResponsiveCard>
      <CardActionArea>
        <Box position={"relative"}>
          <CardMedia
            component={"img"}
            image={`${data.coverImage?.medium}`}
            alt="Anime-Card"
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 20,
              left: 10,
              backgroundColor: `${green[600]}`,
              padding: "spacing.textPadding",
              borderRadius: "shape.borderRadius",
            }}
          >
            <Typography variant="h6" color="text.dark.primary">
              {data.episodes}
            </Typography>
          </Box>
        </Box>
        <CardContent>
          <Stack direction={"column"} spacing={3}>
            <Typography variant="h5">
              {data.title?.english || data.title?.romaji}
            </Typography>
            <Stack direction={"row"} spacing={2}>
              <Typography variant="caption" color="text.disabled">
                {data.format}
              </Typography>
              <Typography variant="caption" color="text.disabled">
                {data.status}
              </Typography>
              {data.format?.toLowerCase() != "anime" ||
              data.format?.toLowerCase() != "manga" ? (
                <Typography variant="caption" color="text.disabled">
                  {timeDuration}
                </Typography>
              ) : null}
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </ResponsiveCard>
  );
};

export default AnimeCard;
