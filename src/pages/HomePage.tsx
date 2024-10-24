import { Box, Stack } from "@mui/material";
import SpotLightSlder from "../components/SpotLight/SpotLightSlider";
import TrendingAnimeSlider from "../components/Trending/TrendingAnimeSlider";

const HomePage = () => {
  return (
    <Box>
      <SpotLightSlder></SpotLightSlder>
      <Stack direction={"column"} spacing={3} sx={{
        marginTop:4
      }}>

      <TrendingAnimeSlider></TrendingAnimeSlider>
      </Stack>
    </Box>
  );
};

export default HomePage;
