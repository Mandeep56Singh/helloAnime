import { gql } from "@apollo/client";
export const MediaFields = gql`
  fragment mediafields on Media {
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
    duration
    status
    episodes
    format
  }
`;
