
import { Box } from "@mui/material";
import SpotLightSlder from "../components/SpotLight/SpotLightSlider";

const HomePage = () => {
  // const { loading, error, data } = useQuery(GetAnimePage, {
  //   variables: { PerPage: 30, Page: 1 },
  // });
  // if (error) return <p>Error : {error.message}</p>;

  // if (loading) return <p>Loading...</p>;
  // const animeList = data?.Page?.media;
 return (
  <Box>

    <SpotLightSlder></SpotLightSlder>
  </Box>

 )
};

export default HomePage;
