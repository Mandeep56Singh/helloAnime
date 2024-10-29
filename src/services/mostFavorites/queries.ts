import { gql } from "@apollo/client";
import { MediaFields } from "../fragments/mediafields";
import { pageInfo } from "../fragments/pageInfo";

export const mostFavourites = gql`
  ${MediaFields}
  ${pageInfo}
  query mostFavourites($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      __typename
      pageInfo {
        ...pageInfo
      }
      media(sort: FAVOURITES_DESC, type: ANIME, isAdult: false) {
        ...mediafields
      }
    }
  }
`;
