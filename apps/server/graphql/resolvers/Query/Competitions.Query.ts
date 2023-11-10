import { QueryResolvers } from '../../../generated/graphql';
import { AppContext } from '../../../server';

export const competitions: QueryResolvers<AppContext>['competitions'] = (
  _,
  { week, startDate, endDate },
  { db }
) => {
  return db.competition.findMany({
    where: {
      ...(week && { week }),
      ...(startDate && { startDate: { gte: startDate } }),
      ...(endDate && { endDate: { lte: endDate } }),
    },
  });
};
