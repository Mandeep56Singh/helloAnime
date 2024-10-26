import { gql } from "@apollo/client";
import { animeListItem } from "../fragments/animeListItem";
export const upcoming = gql`
  ${animeListItem}
  query upcoming($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      __typename
      media(
        type: ANIME
        status: NOT_YET_RELEASED
        sort: POPULARITY_DESC
        isAdult: false
      ) {
        __typename
        ...animeListItem
        duration
      }
    }
  }
`;
