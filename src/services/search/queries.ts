import { gql } from "@apollo/client";
import { MediaFields } from "../fragments/mediafields";
import { pageInfo } from "../fragments/pageInfo";

export const SearchAnime = gql`
  ${MediaFields}
  ${pageInfo}
  query searchAnime(
    $id: Int
    $page: Int
    $perPage: Int
    $search: String
    $sort: [MediaSort] = [POPULARITY_DESC, SCORE_DESC]
    $isAdult: Boolean = false
    $type: MediaType = ANIME
  ) {
    Page(page: $page, perPage: $perPage) {
      pageInfo {
        ...pageInfo
      }
      media(
        id: $id
        search: $search
        sort: $sort
        isAdult: $isAdult
        type: $type
      ) {
        ...mediafields
      }
    }
  }
`;
