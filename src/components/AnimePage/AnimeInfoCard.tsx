import AddIcon from "@mui/icons-material/Add";
import MovieIcon from "@mui/icons-material/Movie";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  Box,
  Button,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";
import React from "react";
import { GetAnimeByIdQuery } from "../../graphql/types/graphql";
import { getTimeDuration } from "../../utils/utils";
import { StyledCard } from "../styled components/StyledCard";
import { StyledCardMedia } from "../styled components/StyledCardMedia";

type Media = NonNullable<GetAnimeByIdQuery["Media"]>;
type AnimeInfoCardProps = {
  data: Media;
};

const AnimeInfoCard: React.FC<AnimeInfoCardProps> = ({ data }) => {
  const timeDuration = getTimeDuration(data.duration);
  const description = data.description?.replace(/<br\s*\/?>/gi, "\n");

  return (
    <Box
      sx={{
        position: "relative",
        flex: { lg: 3 },
        overflow: "hidden",
        paddingInline: 4,
        paddingBlock: 8,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          backgroundImage: `linear-gradient(rgba(45, 43, 69, 0.7), rgba(45, 43, 68, 0.7)), url(${data.coverImage?.large})`, // Use #2D2B44 in gradient
          backgroundColor: "red",
          backgroundSize: "cover",
          backgroundPosition: "center ",
          filter: "blur(25px)",
          zIndex: 0,
          opacity: 0.7,
          transform: "scale(1.2)",
        }}
      ></Box>
      <StyledCard
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          gap: 5,
          // justifyContent:"center",
          alignItems: "center",
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            alignItems: "start",
          },
        })}
      >
        <StyledCardMedia
          image={`${data.coverImage?.extraLarge}`}
          sx={{
            flexShrink: 0,
            zIndex: 1,
          }}
        />
        <CardContent
          component={"div"}
          sx={{
            padding: 0,
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: {
              md: "start",
              xs: "center",
            },
          }}
        >
          <Typography variant="h2" textAlign={{ xs: "center", md: "start" }}>
            {data.title?.english || data.title?.romaji}
          </Typography>
          <Stack
            direction={"row"}
            spacing={1}
            sx={{
              overflow: "hidden",
            }}
          >
            <Typography variant="subtitle1" color="text.disabled">
              {data.format}
            </Typography>
            <Typography variant="subtitle1" color="text.disabled">
              {data.status}
            </Typography>
            {data.format?.toLowerCase() != "anime" ||
            data.format?.toLowerCase() != "manga" ? (
              <Typography variant="subtitle1" color="text.disabled" noWrap>
                {timeDuration}
              </Typography>
            ) : null}
          </Stack>

          <Stack
            direction={"row"}
            spacing={1}
            padding={0.8}
            sx={{
              backgroundColor: green[300],
              marginBlock: 2,
              borderRadius: 2,
              width: "140px",
            }}
          >
            <MovieIcon
              sx={{
                width: "24px",
                color: "black",
              }}
            ></MovieIcon>
            <Typography color="text.dark.primary" variant="button">
              EPISODES:{" "}
            </Typography>
            <Typography variant="button" color="text.dark.primary">
              {data.episodes}
            </Typography>
          </Stack>
          <CardActions
            sx={{
              marginBlock: 2,
            }}
          >
            <Button
              sx={{
                gap: 1,
                backgroundColor: "secondary.main",
                borderRadius: 8,
                padding: "8px 14px",
              }}
            >
              <PlayArrowIcon
                sx={(theme) => ({
                  color: theme.palette.secondary.contrastText,
                })}
              ></PlayArrowIcon>
              <Typography
                variant="button"
                sx={(theme) => ({
                  color: theme.palette.secondary.contrastText,
                })}
              >
                Watch Now
              </Typography>
            </Button>
            <Button
              sx={{
                gap: 1,
                backgroundColor: "secondary.light",
                borderRadius: 8,
                padding: "8px 14px",
              }}
            >
              <AddIcon
                sx={(theme) => ({
                  color: theme.palette.secondary.contrastText,
                })}
              ></AddIcon>
              <Typography
                variant="button"
                sx={(theme) => ({
                  color: theme.palette.secondary.contrastText,
                })}
              >
                Add to List
              </Typography>
            </Button>
          </CardActions>
          <Typography
            variant="body2"
            sx={{
              textWrap: "wrap",
              padding: 1,
            }}
          >
            {description}
          </Typography>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default AnimeInfoCard;
