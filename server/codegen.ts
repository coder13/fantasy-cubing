import type { CodegenConfig } from '@graphql-codegen/cli';

const backendConf = {
  plugins: ['typescript', 'typescript-resolvers'],
  config: {},
};

const config: CodegenConfig = {
  overwrite: true,
  schema: './graphql/schema/',
  generates: {
    '../generated/graphql.ts': backendConf,
  },
};

export default config;
