import {graphql} from '../../graphql/types/gql'
export const GetAnimePage = graphql(`
  query GetAnimePage($Page: Int = 1, $PerPage: Int = 10) {
    Page(page: $Page, perPage: $PerPage) {
      media {
        id
        title {
          english
        }
        coverImage {
          medium
        }
        episodes
        status
        genres
        format
      }
    }
  }
`);
