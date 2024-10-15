import { graphql } from "../../graphql/types";
import {gql} from "@apollo/client"
export const MediaFields = gql(`
  fragment mediafields on Media {
    id
    title {
      english
      romaji
    }
    coverImage {
      medium
    }
    duration
    status
    episodes
    format
  }
`);
