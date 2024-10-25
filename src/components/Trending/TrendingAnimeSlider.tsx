import { useRef } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useQuery } from "@apollo/client";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TrendingAnimeQuery } from "../../graphql/types/graphql";
import { TrendingAnime } from "../../services/Trending/queries";
import { StyledChevronButton } from "../styled components/StyledChevronButton";
const TrendingAnimeSlider = () => {
  const { loading, error, data } = useQuery<TrendingAnimeQuery>(TrendingAnime);
  const swiperRef = useRef<any>(null);
  const theme = useTheme();
  if (loading) return <div>loading..</div>;
  else if (error) return <div>{error.message}</div>;
  const trendingAnimeList = data?.Page?.media;

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
  return (
    <Stack position={"relative"} direction={"column"} spacing={3}>
      <Typography variant="h3" color="text.secondary">
        Trending
      </Typography>
      <Stack direction={"row"}>
        <Swiper
          ref={swiperRef}
          slidesPerView={2}
          spaceBetween={2}
          breakpoints={{
            [theme.breakpoints.values.sm]: {
              slidesPerView: 3,
            },
            [theme.breakpoints.values.lg]: {
              slidesPerView: 4,
            },
            [theme.breakpoints.values.xl]: {
              slidesPerView: 6,
            },
          }}
          modules={[Navigation]}
          style={{
            width: "calc(100% - 70px)",
          }}
        >
          {trendingAnimeList?.map((anime, i) => (
            <SwiperSlide key={anime?.id}>
              <Stack
                direction={"row"}
                spacing={0}
                position={"relative"}
                sx={{
                  width: "100%",
                  height: "auto",
                  display: "inline-block",
                  overflow: "hidden",
                }}
              >
                <Stack
                  direction={"column"}
                  justifyContent={"end"}
                  position={"absolute"}
                  sx={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    bottom: "0",
                    overflow: "hidden",
                    width: "40px",
                    textAlign: "center",
                  }}
                >
                  <Typography
                    variant="h5"
                    color="text.secondary"
                    component="span"
                    sx={{
                      position: "absolute",
                      bottom: "0",
                      fontSize: "20px",
                      lineHeight: "1em",
                      textAlign: "center",
                      color: "#ffbade",
                      zIndex: 9,
                      left: "0",
                      right: "0",
                    }}
                  >
                    {i !== trendingAnimeList.length - 1 ? `0${i + 1}` : i + 1}
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    color="text.primary"
                    sx={{
                      width: "150px",
                      textAlign: "left",
                      height: "40px",
                      transform: "rotate(-90deg)",
                      position: "absolute",
                      bottom: "90px",
                      lineHeight: "40px",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      left: "-55px",
                    }}
                  >
                    {anime?.title?.english || anime?.title?.romaji}
                  </Typography>
                </Stack>
                <Box
                  component={Link}
                  to={`/anime/${anime!.id}`}
                  sx={{
                    display: "inline-block",
                    background: "rgba(255, 255, 255, 0.1)",
                    position: "relative",
                    width: "auto",
                    left: "40px",
                    right: "0",
                    top: "0",
                    bottom: "0",
                    paddingBottom: "0",
                    height: "auto",
                    marginBottom: "0",
                  }}
                >
                  <Box
                    component="img"
                    src={anime?.coverImage?.large || ""}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      aspectRatio: "0.8",
                    }}
                  ></Box>
                </Box>
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
        <Stack direction={"column"} spacing={1}>
          <StyledChevronButton
            sx={{ flex: 1, paddingInline: "0.25rem" }}
            onClick={handleNext}
          >
            <ChevronRightIcon fontSize="large" />
          </StyledChevronButton>
          <StyledChevronButton
            sx={{ flex: 1, paddingInline: "0.25rem" }}
            onClick={handlePrev}
          >
            <ChevronLeftIcon fontSize="large" />
          </StyledChevronButton>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TrendingAnimeSlider;
