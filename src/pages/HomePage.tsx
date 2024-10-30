import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Genre from "../components/Genre/Genre";
import PopularThisSeason from "../components/PopularOnSeason/PopularThisSeason";
import SpotLightSlder from "../components/SpotLight/SpotLightSlider";
import AnimeTop5 from "../components/Top5/AnimeTop5";
import TrendingAnimeSlider from "../components/Trending/TrendingAnimeSlider";
import UpcomingAnime12 from "../components/Upcoming/UpcomingAnime12";

const HomePage = () => {
  return (
    <Box>
      <SpotLightSlder></SpotLightSlder>
      <Stack
        direction={"column"}
        spacing={4}
        sx={{
          marginTop: 4,
        }}
      >
        <TrendingAnimeSlider></TrendingAnimeSlider>
        <AnimeTop5></AnimeTop5>
        <Stack
          direction={{
            xs: "column",
            lg: "row",
          }}
          spacing={4}
        >
          <Stack direction={"column"} spacing={2} flex={{ lg: 3 }}>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h3" color="text.secondary">
                Popular This season
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textDecoration: "none",
                  color: "text.disabled",
                  ":hover": {
                    color: "text.primary",
                  },
                }}
                component={Link}
                to={"/popular-this-season"}
              >
                View all
              </Typography>
            </Stack>
              <PopularThisSeason></PopularThisSeason>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="h3" color="text.secondary">
                Upcoming next season
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  textDecoration: "none",
                  color: "text.disabled",
                  ":hover": {
                    color: "text.primary",
                  },
                }}
                component={Link}
                to={"/upcoming"}
              >
                View all
              </Typography>
            </Stack>

            <UpcomingAnime12></UpcomingAnime12>
          </Stack>
          <Stack direction={"column"} spacing={2} flex={{ lg: 1 }}>
            <Typography variant="h3" color="text.secondary">
              Genres
            </Typography>
            <Genre></Genre>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HomePage;
