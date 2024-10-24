import { gql } from "@apollo/client";

import { MediaFields } from "../fragments/mediafields";
export const animePage = gql`
  ${MediaFields}
  query getAnimeById($mediaId: Int) {
    Media(id: $mediaId) {
      id
      title {
        english
        romaji
      }
      description
      coverImage {
        color
        extraLarge
        large
      }
      type
      episodes
      genres
      status
      duration
      updatedAt
      trending
      format
      averageScore
      startDate {
        day
        month
        year
      }
      endDate {
        day
        month
        year
      }
      relations {
        edges {
          relationType
          node {
            ...mediafields
          }
        }
      }
      studios{
        edges {
          node {
            name
          }
        }
      }
      recommendations {
        edges {
          node {
            id
            mediaRecommendation {
              ...mediafields
            }
          }
        }
      }
    }
  }
`;
