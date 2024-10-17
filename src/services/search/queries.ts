import { gql } from "@apollo/client";
import { MediaFields } from "./mediafields";
export const SearchAnime = gql`
  ${MediaFields}
  query SearchAnime($search: String, $type: MediaType!) {
    Media(search: $search, type: $type) {
      ...mediafields
      relations {
        nodes {
          ...mediafields
        }
      }
    }
  }
`;