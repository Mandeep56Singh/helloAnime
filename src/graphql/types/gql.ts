/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query trendingAnime {\n    Page(page: 1, perPage: 10) {\n      media(sort: TRENDING_DESC, type: ANIME) {\n        id\n        __typename\n        title {\n          __typename\n          english\n          romaji\n        }\n        coverImage {\n          __typename\n          large\n        }\n      }\n    }\n  }\n": types.TrendingAnimeDocument,
    "\n  query AnimeListOf5 {\n    # Fetch top airing anime\n    topAiringAnime5: Page(page: 1, perPage: 5) {\n      media(\n        sort: POPULARITY_DESC\n        type: ANIME\n        status: RELEASING\n        isAdult: false\n      ) {\n        ...animeListItem\n      }\n    }\n\n    # Fetch most favorited anime\n    mostFavoritedAnime5: Page(page: 1, perPage: 5) {\n      media(sort: FAVOURITES_DESC, type: ANIME, isAdult: false) {\n        ...animeListItem\n      }\n    }\n\n    # Fetch latest completed anime\n    latestCompletedAnime5: Page(page: 1, perPage: 5) {\n      media(\n        sort: END_DATE_DESC\n        type: ANIME\n        status: FINISHED\n        isAdult: false\n      ) {\n        ...animeListItem\n      }\n    }\n\n    # Fetch Most popular anime\n    mostPopularAnime5: Page(page: 1, perPage: 5) {\n      media(type: ANIME, sort: POPULARITY_DESC, isAdult: false) {\n        ...animeListItem\n      }\n    }\n  }\n  \n": types.AnimeListOf5Document,
    "\n  \n  query getAnimeById($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      __typename\n      title {\n        __typename\n        english\n        romaji\n      }\n      description\n      coverImage {\n        __typename\n        extraLarge\n        large\n      }\n      type\n      episodes\n      genres\n      status\n      duration\n      updatedAt\n      trending\n      format\n      averageScore\n      startDate {\n        __typename\n        day\n        month\n        year\n      }\n      endDate {\n        __typename\n        day\n        month\n        year\n      }\n      relations {\n        __typename\n        edges {\n          __typename\n          relationType\n          node {\n            __typename\n            ...mediafields\n          }\n        }\n      }\n      studios {\n        __typename\n        edges {\n          __typename\n          node {\n            __typename\n            name\n          }\n        }\n      }\n      recommendations {\n        __typename\n        edges {\n          __typename\n          node {\n            __typename\n            id\n            mediaRecommendation {\n              __typename\n              ...mediafields\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAnimeByIdDocument,
    "\n  fragment animeListItem on Media {\n    id\n    __typename\n    title {\n      __typename\n      english\n      romaji\n    }\n    coverImage {\n      __typename\n      large\n      medium\n    }\n    episodes\n    format\n  }\n": types.AnimeListItemFragmentDoc,
    "\n  fragment mediafields on Media {\n    id\n    __typename\n    title {\n      __typename\n      english\n      romaji\n    }\n    coverImage {\n      __typename\n      large\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n  }\n": types.MediafieldsFragmentDoc,
    "\n  query genreCollection {\n    GenreCollection\n  }\n": types.GenreCollectionDocument,
    "\n  query mostPopular10 {\n    Page(page: 1, perPage: 10) {\n      media(type: ANIME, sort: POPULARITY_DESC) {\n        id\n        __typename\n        title {\n          __typename\n          romaji\n          english\n        }\n        format\n        episodes\n        coverImage {\n          __typename\n          medium\n        }\n      }\n    }\n  }\n": types.MostPopular10Document,
    "\n  \n  query NewAnime12 {\n    Page(page: 1, perPage: 12) {\n      __typename\n      media(\n        type: ANIME\n        status: RELEASING\n        sort: START_DATE_DESC\n        isAdult: false\n      ) {\n        __typename\n        ...mediafields\n      }\n    }\n  }\n": types.NewAnime12Document,
    "\n  \n  query SearchAnime($search: String, $type: MediaType!) {\n    Media(search: $search, type: $type) {\n      ...mediafields\n      relations {\n        nodes {\n          ...mediafields\n        }\n      }\n    }\n  }\n": types.SearchAnimeDocument,
    "\n  query spotlightAnime {\n    Page(page: 1, perPage: 10) {\n      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {\n        id\n        __typename\n        title {\n          __typename\n          romaji\n          english\n        }\n        bannerImage\n      }\n    }\n  }\n": types.SpotlightAnimeDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query trendingAnime {\n    Page(page: 1, perPage: 10) {\n      media(sort: TRENDING_DESC, type: ANIME) {\n        id\n        __typename\n        title {\n          __typename\n          english\n          romaji\n        }\n        coverImage {\n          __typename\n          large\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query trendingAnime {\n    Page(page: 1, perPage: 10) {\n      media(sort: TRENDING_DESC, type: ANIME) {\n        id\n        __typename\n        title {\n          __typename\n          english\n          romaji\n        }\n        coverImage {\n          __typename\n          large\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query AnimeListOf5 {\n    # Fetch top airing anime\n    topAiringAnime5: Page(page: 1, perPage: 5) {\n      media(\n        sort: POPULARITY_DESC\n        type: ANIME\n        status: RELEASING\n        isAdult: false\n      ) {\n        ...animeListItem\n      }\n    }\n\n    # Fetch most favorited anime\n    mostFavoritedAnime5: Page(page: 1, perPage: 5) {\n      media(sort: FAVOURITES_DESC, type: ANIME, isAdult: false) {\n        ...animeListItem\n      }\n    }\n\n    # Fetch latest completed anime\n    latestCompletedAnime5: Page(page: 1, perPage: 5) {\n      media(\n        sort: END_DATE_DESC\n        type: ANIME\n        status: FINISHED\n        isAdult: false\n      ) {\n        ...animeListItem\n      }\n    }\n\n    # Fetch Most popular anime\n    mostPopularAnime5: Page(page: 1, perPage: 5) {\n      media(type: ANIME, sort: POPULARITY_DESC, isAdult: false) {\n        ...animeListItem\n      }\n    }\n  }\n  \n"): (typeof documents)["\n  query AnimeListOf5 {\n    # Fetch top airing anime\n    topAiringAnime5: Page(page: 1, perPage: 5) {\n      media(\n        sort: POPULARITY_DESC\n        type: ANIME\n        status: RELEASING\n        isAdult: false\n      ) {\n        ...animeListItem\n      }\n    }\n\n    # Fetch most favorited anime\n    mostFavoritedAnime5: Page(page: 1, perPage: 5) {\n      media(sort: FAVOURITES_DESC, type: ANIME, isAdult: false) {\n        ...animeListItem\n      }\n    }\n\n    # Fetch latest completed anime\n    latestCompletedAnime5: Page(page: 1, perPage: 5) {\n      media(\n        sort: END_DATE_DESC\n        type: ANIME\n        status: FINISHED\n        isAdult: false\n      ) {\n        ...animeListItem\n      }\n    }\n\n    # Fetch Most popular anime\n    mostPopularAnime5: Page(page: 1, perPage: 5) {\n      media(type: ANIME, sort: POPULARITY_DESC, isAdult: false) {\n        ...animeListItem\n      }\n    }\n  }\n  \n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query getAnimeById($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      __typename\n      title {\n        __typename\n        english\n        romaji\n      }\n      description\n      coverImage {\n        __typename\n        extraLarge\n        large\n      }\n      type\n      episodes\n      genres\n      status\n      duration\n      updatedAt\n      trending\n      format\n      averageScore\n      startDate {\n        __typename\n        day\n        month\n        year\n      }\n      endDate {\n        __typename\n        day\n        month\n        year\n      }\n      relations {\n        __typename\n        edges {\n          __typename\n          relationType\n          node {\n            __typename\n            ...mediafields\n          }\n        }\n      }\n      studios {\n        __typename\n        edges {\n          __typename\n          node {\n            __typename\n            name\n          }\n        }\n      }\n      recommendations {\n        __typename\n        edges {\n          __typename\n          node {\n            __typename\n            id\n            mediaRecommendation {\n              __typename\n              ...mediafields\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query getAnimeById($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      __typename\n      title {\n        __typename\n        english\n        romaji\n      }\n      description\n      coverImage {\n        __typename\n        extraLarge\n        large\n      }\n      type\n      episodes\n      genres\n      status\n      duration\n      updatedAt\n      trending\n      format\n      averageScore\n      startDate {\n        __typename\n        day\n        month\n        year\n      }\n      endDate {\n        __typename\n        day\n        month\n        year\n      }\n      relations {\n        __typename\n        edges {\n          __typename\n          relationType\n          node {\n            __typename\n            ...mediafields\n          }\n        }\n      }\n      studios {\n        __typename\n        edges {\n          __typename\n          node {\n            __typename\n            name\n          }\n        }\n      }\n      recommendations {\n        __typename\n        edges {\n          __typename\n          node {\n            __typename\n            id\n            mediaRecommendation {\n              __typename\n              ...mediafields\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment animeListItem on Media {\n    id\n    __typename\n    title {\n      __typename\n      english\n      romaji\n    }\n    coverImage {\n      __typename\n      large\n      medium\n    }\n    episodes\n    format\n  }\n"): (typeof documents)["\n  fragment animeListItem on Media {\n    id\n    __typename\n    title {\n      __typename\n      english\n      romaji\n    }\n    coverImage {\n      __typename\n      large\n      medium\n    }\n    episodes\n    format\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment mediafields on Media {\n    id\n    __typename\n    title {\n      __typename\n      english\n      romaji\n    }\n    coverImage {\n      __typename\n      large\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n  }\n"): (typeof documents)["\n  fragment mediafields on Media {\n    id\n    __typename\n    title {\n      __typename\n      english\n      romaji\n    }\n    coverImage {\n      __typename\n      large\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query genreCollection {\n    GenreCollection\n  }\n"): (typeof documents)["\n  query genreCollection {\n    GenreCollection\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query mostPopular10 {\n    Page(page: 1, perPage: 10) {\n      media(type: ANIME, sort: POPULARITY_DESC) {\n        id\n        __typename\n        title {\n          __typename\n          romaji\n          english\n        }\n        format\n        episodes\n        coverImage {\n          __typename\n          medium\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query mostPopular10 {\n    Page(page: 1, perPage: 10) {\n      media(type: ANIME, sort: POPULARITY_DESC) {\n        id\n        __typename\n        title {\n          __typename\n          romaji\n          english\n        }\n        format\n        episodes\n        coverImage {\n          __typename\n          medium\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query NewAnime12 {\n    Page(page: 1, perPage: 12) {\n      __typename\n      media(\n        type: ANIME\n        status: RELEASING\n        sort: START_DATE_DESC\n        isAdult: false\n      ) {\n        __typename\n        ...mediafields\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query NewAnime12 {\n    Page(page: 1, perPage: 12) {\n      __typename\n      media(\n        type: ANIME\n        status: RELEASING\n        sort: START_DATE_DESC\n        isAdult: false\n      ) {\n        __typename\n        ...mediafields\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query SearchAnime($search: String, $type: MediaType!) {\n    Media(search: $search, type: $type) {\n      ...mediafields\n      relations {\n        nodes {\n          ...mediafields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query SearchAnime($search: String, $type: MediaType!) {\n    Media(search: $search, type: $type) {\n      ...mediafields\n      relations {\n        nodes {\n          ...mediafields\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query spotlightAnime {\n    Page(page: 1, perPage: 10) {\n      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {\n        id\n        __typename\n        title {\n          __typename\n          romaji\n          english\n        }\n        bannerImage\n      }\n    }\n  }\n"): (typeof documents)["\n  query spotlightAnime {\n    Page(page: 1, perPage: 10) {\n      media(sort: POPULARITY_DESC, type: ANIME, isAdult: false) {\n        id\n        __typename\n        title {\n          __typename\n          romaji\n          english\n        }\n        bannerImage\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;