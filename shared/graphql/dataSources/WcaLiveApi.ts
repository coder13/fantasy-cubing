import { RESTDataSource } from "@apollo/datasource-rest";
import { KeyValueCache } from "apollo-server-core";

const competitionQuery = `
  query GetCompetitions($from: Date!) {
    competitions(from: $from) {
      id
      wca_id
    }
  }
`

export class WcaLiveApi extends RESTDataSource {
  constructor(options: { cache?: KeyValueCache, baseURL?: string } = {}) {
    super(options);

    this.baseURL = options.baseURL || process.env.WCA_LIVE_ORIGIN
  };

  query<T>(query: string, variables: any) {
    return this.post<{ data: T }>('/api', {
      body: {
        query,
        variables
      }
    })
  }

  competitions(from: string) {
    return this.query<{
      competitions: {
        id: string;
        wca_id: string;
      }[]
    }>(competitionQuery, { from })
  }
}
