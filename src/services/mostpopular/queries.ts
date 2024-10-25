import { gql } from "@apollo/client";

export const mostPopular10 = gql`
  query mostPopular10 {
    Page(page: 1, perPage: 10) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        __typename
        title {
          __typename
          romaji
          english
        }
        format
        episodes
        coverImage {
          __typename
          medium
        }
      }
    }
  }
`;

