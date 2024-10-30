import { gql } from "@apollo/client";
import { MediaFields } from "../fragments/mediafields";
import { pageInfo } from "../fragments/pageInfo";

export const upcoming = gql`
  ${MediaFields}
  ${pageInfo}
  query upcoming(
    $page: Int
    $perPage: Int
    $type: MediaType = ANIME
    $sort: [MediaSort] = POPULARITY_DESC
    $season: MediaSeason
    $seasonYear: Int
    $isAdult:Boolean =  false
  ) {
    Page(page: $page, perPage: $perPage) {
      __typename
      pageInfo {
        ...pageInfo
      }
      media(
        type: $type
        isAdult: $isAdult
        sort: $sort
        season: $season
        seasonYear: $seasonYear
      ) {
        ...mediafields
      }
    }
  }
`;
