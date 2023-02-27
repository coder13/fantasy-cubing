import { DataSourceRequest, RESTDataSource } from "@apollo/datasource-rest";
import { KeyValueCache } from "apollo-server-core";
import { Competition } from "@wca/helpers";
import { ApiCompetition, ApiResult } from "types";

export class WcaApi extends RESTDataSource {
  constructor(options: { cache?: KeyValueCache, baseURL?: string } = {}) {
    super(options);
    console.log(process.env.WCA_ORIGIN);
    this.baseURL = `${options.baseURL || process.env.WCA_ORIGIN}/api/v0/`;
  }

  async fetchMany<T>(
    path: string,
    incomingRequest: DataSourceRequest = {
      params: {
        page: "1",
      },
    }
  ): Promise<T[]> {
    const result = await this.fetch<T[]>(path, incomingRequest);
    const parsedResult = await result.parsedBody;
    const perPage = result.response.headers.get("per-page");
    const total = result.response.headers.get("total");

    if (total) {
      console.log(`Found total: ${total} ${perPage}`);
    }

    if (total && perPage && parsedResult.length === parseInt(perPage)) {
      console.log(`Found per page: ${perPage}`);
      const params = incomingRequest.params as {
        page: string;
      };

      return [
        ...parsedResult,
        ...(await this.fetchMany<T>(path, {
          ...incomingRequest,
          params: {
            ...incomingRequest.params,
            page: ((Number.parseInt(params?.page, 10) || 1) + 1).toString(),
          },
        })),
      ];
    }
    return parsedResult;
  }

  async getCompetitions(start: string, end: string) {
    const comps = await this.fetchMany<ApiCompetition>("competitions", {
      params: {
        start,
        end,
      },
      cacheOptions: {
        ttl: 60 * 60, // 1 hour
      },
    });

    return comps;
  }

  getCompetition(competitionId: string) {
    return this.get<ApiCompetition>(`competitions/${competitionId}`);
  }

  getResults(competitionId: string) {
    return this.get<ApiResult[]>(`competitions/${competitionId}/results`);
  }

  getWcifPublic(competitionId: string) {
    return this.get<Competition>(`competitions/${competitionId}/wcif/public`, {
      cacheOptions: {
        ttl: 60 * 60, // 1 hour
      },
    });
  }
}
