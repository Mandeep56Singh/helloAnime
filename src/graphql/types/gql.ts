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
    "\n  query GetAnimePage($Page: Int = 1, $PerPage: Int = 10) {\n    Page(page: $Page, perPage: $PerPage) {\n      media {\n        id\n        title {\n          english\n        }\n        coverImage {\n          medium\n        }\n        episodes\n        status\n        genres\n        format\n      }\n    }\n  }\n": types.GetAnimePageDocument,
    "\n  fragment mediafields on Media {\n    id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n  }\n": types.MediafieldsFragmentDoc,
    "\n  query SearchAnime($search: String, $type: MediaType!) {\n    Media(search: $search, type: $type) {\n     id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n      relations {\n        nodes {\n        id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n        }\n      }\n    }\n  }\n": types.SearchAnimeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAnimePage($Page: Int = 1, $PerPage: Int = 10) {\n    Page(page: $Page, perPage: $PerPage) {\n      media {\n        id\n        title {\n          english\n        }\n        coverImage {\n          medium\n        }\n        episodes\n        status\n        genres\n        format\n      }\n    }\n  }\n"): (typeof documents)["\n  query GetAnimePage($Page: Int = 1, $PerPage: Int = 10) {\n    Page(page: $Page, perPage: $PerPage) {\n      media {\n        id\n        title {\n          english\n        }\n        coverImage {\n          medium\n        }\n        episodes\n        status\n        genres\n        format\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment mediafields on Media {\n    id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n  }\n"): (typeof documents)["\n  fragment mediafields on Media {\n    id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query SearchAnime($search: String, $type: MediaType!) {\n    Media(search: $search, type: $type) {\n     id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n      relations {\n        nodes {\n        id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n        }\n      }\n    }\n  }\n"): (typeof documents)["\n  query SearchAnime($search: String, $type: MediaType!) {\n    Media(search: $search, type: $type) {\n     id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n      relations {\n        nodes {\n        id\n    title {\n      english\n      romaji\n    }\n    coverImage {\n      medium\n    }\n    duration\n    status\n    episodes\n    format\n        }\n      }\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;