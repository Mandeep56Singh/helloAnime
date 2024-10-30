import { gql } from "@apollo/client";
import { MediaFields } from "../fragments/mediafields";
import { pageInfo } from "../fragments/pageInfo";

export const animeFormat = gql`
  ${MediaFields}
  ${pageInfo}
  query animeFormat(
    $page: Int
    $perPage: Int
    $isAdult: Boolean = false
    $format: [MediaFormat]
  ) {
    Page(page: $page, perPage: $perPage) {
      __typename
      pageInfo {
        ...pageInfo
      }
      media(
        type: ANIME
        sort: POPULARITY_DESC
        isAdult: $isAdult
        format_in: $format
      ) {
        ...mediafields
      }
    }
  }
`;
