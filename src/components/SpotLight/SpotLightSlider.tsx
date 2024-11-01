import { useQuery } from "@apollo/client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box } from "@mui/material";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SpotlightAnimeQuery } from "../../graphql/types/graphql";
import { spotlightAnime } from "../../services/spotlight/queries";
import SpotLightSkeleton from "../Skeletons/SpotLightSkeleton";
import { StyledChevronButton } from "../styled components/StyledChevronButton";
import SpotLightAnime from "./SpotLightAnime";

const SpotLightSlder = () => {
  const { loading, error, data } =
    useQuery<SpotlightAnimeQuery>(spotlightAnime);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);

  if (loading) {
    return (
      <Box position={"relative"} sx={{ marginInline: -2 }}>
        <SpotLightSkeleton></SpotLightSkeleton>
      </Box>
    );
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
    <Box position={"relative"} sx={{ marginInline: -2 }}>
      {/* Swiper Component */}
      <Swiper
        ref={swiperRef}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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

      <StyledChevronButton
        onClick={handleNext}
        sx={{
          position: "absolute",
          bottom: "20%",
          right: "20px",
          transform: "translateY(-50%)",
        }}
      >
        <ChevronRightIcon fontSize="large" />
      </StyledChevronButton>
      <StyledChevronButton
        onClick={handlePrev}
        sx={{
          position: "absolute",
          bottom: 0,
          right: "20px",
          transform: "translateY(-50%)",
        }}
      >
        <ChevronLeftIcon fontSize="large" />
      </StyledChevronButton>
    </Box>
  );
};

export default SpotLightSlder;
