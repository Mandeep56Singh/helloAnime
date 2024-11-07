import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://graphql.anilist.co",
  documents: "src/services/**/*.ts",
  generates: {
    "./src/graphql/types/graphql.ts": {
      // preset: "client",
      plugins: [
        "typescript", // Generates TypeScript types
        "typescript-operations",
      ],
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
