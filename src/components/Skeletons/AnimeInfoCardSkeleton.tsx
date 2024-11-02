import { Box, CardActions, CardContent, Skeleton, Stack } from "@mui/material";
import React from "react";
import { StyledCard } from "../styled components/StyledCard";
import TypographySkeleton from "./Typographyskeleton";

const AnimeInfoCardSkeleton: React.FC = () => {
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
      <StyledCard
        sx={(theme) => ({
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          gap: 5,
          alignItems: "center",
          [theme.breakpoints.up("md")]: {
            flexDirection: "row",
            alignItems: "start",
          },
        })}
      >
        <Skeleton
          variant="rectangular"
          sx={(theme) => ({
            width: "160px",
            height: "auto",
            [theme.breakpoints.up("sm")]: {
              width: "190px",
            },
            objectFit: "contain",
            aspectRatio: "0.7",
          })}
        ></Skeleton>
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
          <TypographySkeleton
            typographyVariant="h2"
            sx={{
              textAlign: {
                xs: "center",
                md: "start",
                width: 190,
              },
            }}
          ></TypographySkeleton>
          <Stack direction={"row"} spacing={1}>
            <TypographySkeleton
              typographyVariant="subtitle1"
              sx={{
                width: 20,
              }}
            ></TypographySkeleton>
            <TypographySkeleton
              typographyVariant="subtitle1"
              sx={{
                width: 70,
              }}
            ></TypographySkeleton>
            <TypographySkeleton
              typographyVariant="subtitle1"
              sx={{
                width: 50,
              }}
            ></TypographySkeleton>
          </Stack>

          <Skeleton
            variant="rounded"
            sx={{
              marginBlock: 2,
              borderRadius: 2,
              width: "140px",
              padding: 0.8,
            }}
          ></Skeleton>
          <CardActions
            sx={{
              marginBlock: 2,
            }}
          >
            <Skeleton
              variant="rounded"
              sx={{
                width: 120,
                borderRadius: 8,
                padding: "8px 14px",
              }}
            ></Skeleton>
            <Skeleton
              variant="rounded"
              sx={{
                gap: 1,
                width: 120,
                borderRadius: 8,
                padding: "8px 14px",
              }}
            ></Skeleton>
          </CardActions>
          <Skeleton
            variant="rectangular"
            sx={(theme) => ({
              width: "100vw",
              [theme.breakpoints.up("md")]: {
                width: "60vw",
              },
              [theme.breakpoints.up("lg")]: {
                width: "50vw",
              },

              height: 160,
            })}
          ></Skeleton>
        </CardContent>
      </StyledCard>
    </Box>
  );
};

export default AnimeInfoCardSkeleton;
