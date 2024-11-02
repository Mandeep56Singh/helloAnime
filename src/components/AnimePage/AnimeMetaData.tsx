import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { GetAnimeByIdQuery } from "../../graphql/types/graphql";
import { getAiredDate, getTimeDuration } from "../../utils/utils";
type Media = NonNullable<GetAnimeByIdQuery["Media"]>;
type AnimeMetaDataProps = {
  data: Media;
};
const AnimeMetaData: React.FC<AnimeMetaDataProps> = ({ data }) => {
  const aired = getAiredDate(data.startDate, data.endDate);
  const timeDuration = getTimeDuration(data.duration);
 
  const studios = data.studios?.edges;
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        flex: { lg: 1 },
        padding: 4,
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
          backgroundImage: `linear-gradient(rgba(45, 43, 79, 9.7), rgba(45, 43, 78, .7)), url(${data.coverImage?.large})`,
          backgroundSize: "cover",
          backgroundPosition: "center ",
          filter: "blur(25px)",
          zIndex: 0,
          opacity: 0.7,
          transform: "scale(1.2)",
        }}
      ></Box>
      <Stack
        direction={"column"}
        spacing={0.5}
        sx={{
          zIndex: 1,
        }}
      >
        <Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              zIndex: 1,
            }}
          >
            <Typography variant="subtitle1" color="secondary.light">
              Aired:{" "}
            </Typography>
            <Typography variant="caption" color="secondary.light">
              {aired}
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              zIndex: 1,
            }}
          >
            <Typography variant="subtitle1" color="secondary.light">
              Duration:
            </Typography>
            <Typography variant="caption" color="secondary.light">
              {timeDuration}
            </Typography>
          </Stack>
        </Stack>
        <Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              zIndex: 1,
            }}
          >
            <Typography variant="subtitle1" color="secondary.light">
              Status:{" "}
            </Typography>
            <Typography variant="caption" color="secondary.light">
              {data.status}
            </Typography>
          </Stack>
        </Stack>

        <Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              zIndex: 1,
            }}
          >
            {studios?.length ? (
              <Stack
                direction={"row"}
                spacing={0.6}
                alignItems={"center"}
                flexWrap={"wrap"}
              >
                <Typography variant="subtitle1" color="secondary.light">
                  Studios:{" "}
                </Typography>
                {studios.map((studio, i) => (
                  <Typography
                    component={Link}
                    to={`/producer/${studio?.node?.name}`}
                    variant="caption"
                    color="secondary.light"
                    sx={{
                      textDecoration: "none",
                    }}
                  >
                    {studio?.node?.name} {i !== studios.length - 1 && <i>,</i>}
                  </Typography>
                ))}
              </Stack>
            ) : null}
          </Stack>
        </Stack>
        <Stack>
          <Stack
            direction={"row"}
            gap={0.6}
            alignItems={"center"}
            sx={{
              zIndex: 1,
            }}
            flexWrap={"wrap"}
          >
            <Typography variant="subtitle1" color="secondary.light">
              Genres:{" "}
            </Typography>
            {data.genres?.map((genre) => (
              <Box
                component={Link}
                to={`/genre/${genre}`}
                sx={{
                  padding: "0 8px",
                  border: "1px solid",
                  borderRadius: 4,
                  textDecoration: "none",
                  color: "primary.contrastText",
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    ":hover": {
                      color: "text.secondary",
                    },
                  }}
                >
                  {genre}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Stack
            direction={"row"}
            spacing={1}
            alignItems={"center"}
            sx={{
              zIndex: 1,
            }}
          >
            <Typography variant="subtitle1" color="secondary.light">
              Score:{" "}
            </Typography>
            <Typography variant="caption" color="secondary.light">
              {data.averageScore! / 10}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default AnimeMetaData;
