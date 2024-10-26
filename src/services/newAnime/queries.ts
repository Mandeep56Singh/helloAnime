import { gql } from "@apollo/client";
import { animeListItem } from "../fragments/animeListItem";
export const newAnime12 = gql`
  ${animeListItem}
  query NewAnime12($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      __typename
      media(
        type: ANIME
        status: RELEASING
        sort: START_DATE_DESC
        isAdult: false
      ) {
        __typename
        ...animeListItem
        duration
      }
    }
  }
`;
