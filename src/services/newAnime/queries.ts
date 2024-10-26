import { gql } from "@apollo/client";
import { MediaFields } from "../fragments/mediafields";
export const newAnime12 = gql`
  ${MediaFields}
  query NewAnime12 {
    Page(page: 1, perPage: 12) {
      __typename
      media(
        type: ANIME
        status: RELEASING
        sort: START_DATE_DESC
        isAdult: false
      ) {
        __typename
        ...mediafields
      }
    }
  }
`;
