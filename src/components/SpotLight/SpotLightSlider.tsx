import { useQuery } from "@apollo/client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SpotlightAnimeQuery } from "../../graphql/types/graphql";
import { spotlightAnime } from "../../services/spotlight/queries";
import SpotLightAnime from "./SpotLightAnime";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SpotLightSlder = () => {
  const { loading, error, data } =
    useQuery<SpotlightAnimeQuery>(spotlightAnime);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  if (loading) {
    return <div>loading...</div>;
  } else if (error) {
    return <div>{error.message}</div>;
  }

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const spotlightAnimeData = data?.Page?.media;

  return (
    <Box position={"relative"} sx={{ marginInline: -2, marginTop: -4 }}>
      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Fixed autoplay behavior
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {spotlightAnimeData?.map((anime, index) => (
          <SwiperSlide key={anime?.id}>
            <SpotLightAnime
              img={anime?.bannerImage}
              title={anime?.title?.english || anime?.title?.romaji}
              spotNumber={index + 1}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <Button
        onClick={handlePrev}
        sx={{
          position: "absolute",
          top: "50%",
          left: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "0.5rem",
          minWidth: "auto",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </Button>

      <Button
        onClick={handleNext}
        sx={{
          position: "absolute",
          top: "50%",
          right: "20px",
          transform: "translateY(-50%)",
          zIndex: 10,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "0.5rem",
          minWidth: "auto",
          "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          },
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </Button>
    </Box>
  );
};

export default SpotLightSlder;
