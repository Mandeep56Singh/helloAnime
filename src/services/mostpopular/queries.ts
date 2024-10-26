import { gql } from "@apollo/client";

export const mostPopular = gql`
  query mostPopular($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
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
