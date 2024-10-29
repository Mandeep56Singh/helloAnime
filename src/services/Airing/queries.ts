import { gql } from "@apollo/client";
import { MediaFields } from "../fragments/mediafields";
import { pageInfo } from "../fragments/pageInfo";

export const mostPopular = gql`
  ${MediaFields}
  ${pageInfo}
  query mostPopular($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      __typename
      pageInfo {
        ...pageInfo
      }
      media(
        sort: POPULARITY_DESC
        type: ANIME
        status: RELEASING
        isAdult: false
      ) {
        ...mediafields
      }
    }
  }
`;
