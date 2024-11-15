import { gql } from "@apollo/client";

export const spotlightAnime = gql`
  query spotlightAnime {
    Page(page: 1, perPage: 10) {
      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {
        id
        __typename
        title {
          __typename
          romaji
          english
        }
        bannerImage
      }
    }
  }
`;
