import {gql} from '@apollo/client'

export const pageInfo = gql`
  fragment pageInfo on PageInfo {
    __typename
    total
    currentPage
    lastPage
    hasNextPage
  }
`;