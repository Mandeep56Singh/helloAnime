import { graphql } from "../../graphql/types/gql";
import { MediaFields } from "./mediafields";
import {gql} from "@apollo/client"
export const SearchAnime = graphql(`
  query SearchAnime($search: String, $type: MediaType!) {
    Media(search: $search, type: $type) {
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
      relations {
        nodes {
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
      }
    }
  }
`);
