import { gql } from "@apollo/client";

export const mostPopular10 = gql`
  query mostPopular10 {
    Page(page: 1, perPage: 10) {
      media(type: ANIME, sort: POPULARITY_DESC) {
        id
        title {
          romaji
          english
        }
        format
        episodes
        coverImage {
          medium
        }
      }
    }
  }
`;

