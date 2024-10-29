import { gql } from "@apollo/client";
import { MediaFields } from "../fragments/mediafields";
import { pageInfo } from "../fragments/pageInfo";

export const genre = gql`
  ${MediaFields}
  ${pageInfo}
  query genre(
    $page: Int = 1
    $perPage: Int
    $type: MediaType = ANIME
    $genres: [String] = ["Action"]
    $isAdult: Boolean = false
  ) {
    Page(page: $page, perPage: $perPage) {
      __typename
      pageInfo {
        ...pageInfo
      }
      media(
        sort: FAVOURITES_DESC
        genre_in: $genres
        type: $type
        isAdult: $isAdult
      ) {
        ...mediafields
      }
    }
  }
`;
