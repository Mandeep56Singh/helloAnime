import { Box, Stack } from "@mui/material";
import SpotLightSlder from "../components/SpotLight/SpotLightSlider";
import TrendingAnimeSlider from "../components/Trending/TrendingAnimeSlider";
import AnimeTop5 from "../components/Top5/AnimeTop5";

const HomePage = () => {
  return (
    <Box>
      <SpotLightSlder></SpotLightSlder>
      <Stack direction={"column"} spacing={4} sx={{
        marginTop:4
      }}>

      <TrendingAnimeSlider></TrendingAnimeSlider>
      <AnimeTop5></AnimeTop5>
      </Stack>
    </Box>
  );
};

export default HomePage;
