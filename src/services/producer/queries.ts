import { gql } from "@apollo/client";
import { MediaFields } from "../fragments/mediafields";
import { pageInfo } from "../fragments/pageInfo";

export const producer = gql`
  ${MediaFields}
  ${pageInfo}
  query producer(
    $page: Int = 1
    $perPage: Int
    $search: String
    $sort: [StudioSort] = [SEARCH_MATCH]
  ) {
    Page(page: $page, perPage: $perPage) {
      __typename
      pageInfo {
        ...pageInfo
      }
      studios(search: $search, sort: $sort) {
        id
        name
        isAnimationStudio
        media(sort: POPULARITY_DESC) {
          nodes {
            ...mediafields
          }
        }
      }
    }
  }
`;
