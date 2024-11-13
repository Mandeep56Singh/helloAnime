import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/graphql/schema.graphql",
  documents: "src/services/**/*.ts",
  generates: {
    "./src/graphql/types/graphql.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};

export default config;
