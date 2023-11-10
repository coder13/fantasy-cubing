import { QueryResolvers } from 'index';
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
