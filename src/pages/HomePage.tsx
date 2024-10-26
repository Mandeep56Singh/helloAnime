import { Box, Stack, Typography } from "@mui/material";
import Genre from "../components/Genre/Genre";
import NewAnime12 from "../components/NewAnime/NewAnime12";
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
            <Typography variant="h3" color="text.secondary">
              New Episodes
            </Typography>
            <NewAnime12></NewAnime12>
            <Typography variant="h3" color="text.secondary">
              Top Upcoming
            </Typography>
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
