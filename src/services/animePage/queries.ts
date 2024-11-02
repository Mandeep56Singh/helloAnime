import { gql } from "@apollo/client";

import { MediaFields } from "../fragments/mediafields";
export const animePage = gql`
  ${MediaFields}
  query getAnimeById($mediaId: Int!) {
    Media(id: $mediaId) {
      id
      __typename
      title {
        __typename
        english
        romaji
      }
      description
      coverImage {
        __typename
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
        __typename
        day
        month
        year
      }
      endDate {
        __typename
        day
        month
        year
      }
      relations {
        __typename
        edges {
          __typename
          relationType
          node {
            __typename
            ...mediafields
          }
        }
      }
      studios {
        __typename
        edges {
          __typename
          node {
            __typename
            name
          }
        }
      }
      recommendations {
        __typename
        edges {
          __typename
          node {
            __typename
            id
            mediaRecommendation {
              __typename
              ...mediafields
            }
          }
        }
      }
    }
  }
`;
