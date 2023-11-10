import { RESTDataSource } from '@apollo/datasource-rest';
import { KeyValueCache } from 'apollo-server-core';

const competitionsQuery = `
  query GetCompetitions($from: Date!) {
    competitions(from: $from) {
      id
      wca_id
    }
  }
`;

const resultsQuery = `
query Competition($id: ID!) {
  competition(id: $id) {
    id
    events: competitionEvents {
      event {
        id
      }
      rounds {
        name
        number
        cutoff {
          numberOfAttempts
          attemptResult
        }
        open
        results {
          ...roundResult
        }
      }
    }
  }
}

fragment roundResult on Result {
  pos: ranking
  advancing
  attempts {
    result
    __typename
  }
  best
  average
  attempts {
    result
    __typename
  }
  person {
    id
    wcaId
    name
    country {
      iso2
      name
      __typename
    }
    __typename
  }
  singleRecordTag
  averageRecordTag
  __typename
}
`;

export namespace WcaLive {
  export type RoundResult = {
    pos: number;
    attempts: {
      result: number;
      __typename: string;
    }[];
    best: number | null;
    average: number | null;
    person: {
      name: string;
      wcaId: string;
      country: {
        iso2: string;
        name: string;
        __typename: string;
      };
      __typename: string;
    };
    singleRecordTag: string | null;
    averageRecordTag: string | null;
    __typename: string;
  };

  export type Round = {
    id: string;
    name: string;
    number: number;
    cutoff: {
      numberOfAttempts: number;
      attemptResult: number;
    } | null;
    results: (RoundResult | null)[];
    __typename: string;
  };

  export type CompetitionEvent = {
    id: string;
    event: {
      id: string;
    };
    rounds: Round[];
    __typename: string;
  };

  export type Competition = {
    id: string;
    events: CompetitionEvent[];
    __typename: string;
  };
}

export class WcaLiveApi extends RESTDataSource {
  constructor(options: { cache?: KeyValueCache; baseURL?: string } = {}) {
    super(options);

    this.baseURL = options.baseURL || process.env.WCA_LIVE_ORIGIN;
  }

  query<T>(query: string, variables: any) {
    return this.post<{ data: T; errors?: any[] }>('/api', {
      body: {
        query,
        variables,
      },
    });
  }

  competitions(from: string) {
    return this.query<{
      competitions: {
        id: string;
        wca_id: string;
      }[];
    }>(competitionsQuery, { from });
  }

  results(id: string) {
    return this.query<{ competition: WcaLive.Competition }>(resultsQuery, {
      id,
    });
  }
}
