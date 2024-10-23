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
    "\n  \n  query getAnimeById($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      title {\n        english\n        romaji\n      }\n      description\n      coverImage {\n        color\n        extraLarge\n        large\n      }\n      type\n      episodes\n      genres\n      status\n      duration\n      updatedAt\n      trending\n      format\n      averageScore\n      startDate {\n        day\n        month\n        year\n      }\n      endDate {\n        day\n        month\n        year\n      }\n      relations {\n        edges {\n          relationType\n          node {\n            ...mediafields\n          }\n        }\n      }\n      studios(isMain: true) {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      recommendations {\n        edges {\n          node {\n            id\n            mediaRecommendation {\n              ...mediafields\n            }\n          }\n        }\n      }\n    }\n  }\n": types.GetAnimeByIdDocument,
    "\n  fragment mediafields on Media {\n    id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      large\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n  }\n": types.MediafieldsFragmentDoc,
    "\n  \n  query SearchAnime($search: String, $type: MediaType!) {\n    Media(search: $search, type: $type) {\n      ...mediafields\n      relations {\n        nodes {\n          ...mediafields\n        }\n      }\n    }\n  }\n": types.SearchAnimeDocument,
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
export function gql(source: "\n  \n  query getAnimeById($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      title {\n        english\n        romaji\n      }\n      description\n      coverImage {\n        color\n        extraLarge\n        large\n      }\n      type\n      episodes\n      genres\n      status\n      duration\n      updatedAt\n      trending\n      format\n      averageScore\n      startDate {\n        day\n        month\n        year\n      }\n      endDate {\n        day\n        month\n        year\n      }\n      relations {\n        edges {\n          relationType\n          node {\n            ...mediafields\n          }\n        }\n      }\n      studios(isMain: true) {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      recommendations {\n        edges {\n          node {\n            id\n            mediaRecommendation {\n              ...mediafields\n            }\n          }\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query getAnimeById($mediaId: Int) {\n    Media(id: $mediaId) {\n      id\n      title {\n        english\n        romaji\n      }\n      description\n      coverImage {\n        color\n        extraLarge\n        large\n      }\n      type\n      episodes\n      genres\n      status\n      duration\n      updatedAt\n      trending\n      format\n      averageScore\n      startDate {\n        day\n        month\n        year\n      }\n      endDate {\n        day\n        month\n        year\n      }\n      relations {\n        edges {\n          relationType\n          node {\n            ...mediafields\n          }\n        }\n      }\n      studios(isMain: true) {\n        edges {\n          node {\n            name\n          }\n        }\n      }\n      recommendations {\n        edges {\n          node {\n            id\n            mediaRecommendation {\n              ...mediafields\n            }\n          }\n        }\n      }\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment mediafields on Media {\n    id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      large\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n  }\n"): (typeof documents)["\n  fragment mediafields on Media {\n    id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      large\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  \n  query SearchAnime($search: String, $type: MediaType!) {\n    Media(search: $search, type: $type) {\n      ...mediafields\n      relations {\n        nodes {\n          ...mediafields\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  \n  query SearchAnime($search: String, $type: MediaType!) {\n    Media(search: $search, type: $type) {\n      ...mediafields\n      relations {\n        nodes {\n          ...mediafields\n        }\n      }\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;