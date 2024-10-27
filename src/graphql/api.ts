import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://graphql.anilist.co",
  cache: new InMemoryCache({
    typePolicies: {
      Media: {
        fields: {
          coverImage: {
            merge(existing = {}, incoming) {
              return { ...existing, ...incoming };
            },
          },
        },
      },
      Query: {
        fields: {
          Page: {
            keyArgs: false,

            merge(existing, incoming) {
              if (Array.isArray(existing)) {
                existing = [];
                return [...existing, ...incoming];
              }
              existing = {};
              return { ...existing, ...incoming };
            },
          },
        },
      },
    },
  }),
});

export default client;
