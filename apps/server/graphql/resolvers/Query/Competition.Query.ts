import { QueryResolvers } from '../../../generated/graphql';
import { AppContext } from '../../../server';

export const competition: QueryResolvers<AppContext>['competition'] = (
  _,
  { id },
  { db }
) => {
  return db.competition.findFirst({
    where: {
      id,
    },
  });
};
