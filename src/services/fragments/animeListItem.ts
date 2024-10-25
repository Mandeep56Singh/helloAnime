import { gql } from "@apollo/client";

export const animeListItem = gql`
  fragment animeListItem on Media {
    id
    __typename
    title {
      __typename
      english
      romaji
    }
    coverImage {
      __typename
      large
      medium
    }
    episodes
    format
  }
`;
