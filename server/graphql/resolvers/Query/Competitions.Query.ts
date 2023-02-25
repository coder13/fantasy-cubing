import { QueryResolvers } from '../../../generated/graphql'
import { AppContext } from '../../../server';

export const getCompetitions: QueryResolvers<AppContext>['getCompetitions'] = (
  _,
  { startDate, endDate },
  { wcaApi },
) => {
  return wcaApi.getCompetitions(startDate, endDate);
};
