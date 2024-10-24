import { gql } from "@apollo/client";

export const TrendingAnime = gql`
  query trendingAnime {
    Page(page: 1, perPage: 10) {
      media(sort: TRENDING_DESC, type: ANIME) {
        id
        title {
          english
          romaji
        }
        coverImage {
          large
        }
      }
    }
  }
`;
