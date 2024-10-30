import { gql } from "@apollo/client";
import { MediaFields } from "../fragments/mediafields";
import { pageInfo } from "../fragments/pageInfo";

export const topHundred = gql`
  ${MediaFields}
  ${pageInfo}
  query topHundred(
    $page: Int
    $perPage: Int
    $type: MediaType = ANIME
    $sort: [MediaSort] = [SCORE_DESC]
  ) {
    Page(page: $page, perPage: $perPage) {
      __typename
      pageInfo {
        ...pageInfo
      }
      media(type: $type, sort: $sort, isAdult: false) {
        ...mediafields
      }
    }
  }
`;
