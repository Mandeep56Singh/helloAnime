import { gql } from "@apollo/client";

export const TrendingAnime = gql`
  query trendingAnime {
    Page(page: 1, perPage: 10) {
      media(sort: TRENDING_DESC, type: ANIME) {
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
        }
      }
    }
  }
`;
