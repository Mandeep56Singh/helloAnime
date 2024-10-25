import { gql } from "@apollo/client";
import { animeListItem } from "../fragments/animeListItem";

export const AnimeOf5 = gql`
  query AnimeListOf5 {
    # Fetch top airing anime
    topAiringAnime5: Page(page: 1, perPage: 5) {
      media(
        sort: POPULARITY_DESC
        type: ANIME
        status: RELEASING
        isAdult: false
      ) {
        ...animeListItem
      }
    }

    # Fetch most favorited anime
    mostFavoritedAnime5: Page(page: 1, perPage: 5) {
      media(sort: FAVOURITES_DESC, type: ANIME, isAdult: false) {
        ...animeListItem
      }
    }

    # Fetch latest completed anime
    latestCompletedAnime5: Page(page: 1, perPage: 5) {
      media(
        sort: END_DATE_DESC
        type: ANIME
        status: FINISHED
        isAdult: false
      ) {
        ...animeListItem
      }
    }

    # Fetch Most popular anime
    mostPopularAnime5: Page(page: 1, perPage: 5) {
      media(type: ANIME, sort: POPULARITY_DESC, isAdult: false) {
        ...animeListItem
      }
    }
  }
  ${animeListItem}
`;
