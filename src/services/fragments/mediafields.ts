import { gql } from "@apollo/client";
export const MediaFields = gql`
  fragment mediafields on Media {
    id
    title {
      english
      romaji
    }
    coverImage {
      large
      medium
    }
    duration
    status
    episodes
    format
  }
`;
