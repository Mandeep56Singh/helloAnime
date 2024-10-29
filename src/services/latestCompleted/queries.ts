import { gql } from "@apollo/client";
import { MediaFields } from "../fragments/mediafields";
import { pageInfo } from "../fragments/pageInfo";

export const latestCompleted = gql`
  ${MediaFields}
  ${pageInfo}
  query latestCompleted($page: Int, $perPage: Int) {
    Page(page: $page, perPage: $perPage) {
      __typename
      pageInfo {
        ...pageInfo
      }
      media(
        sort: END_DATE_DESC
        type: ANIME
        status: FINISHED
        isAdult: false
      ) {
        ...mediafields
      }
    }
  }
`;
