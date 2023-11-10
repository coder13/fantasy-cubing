import { QueryResolvers } from 'index';
import { AppContext } from '../../../server';
import prisma from '../../../lib/db';

export const person: QueryResolvers<AppContext>['person'] = (_, { wcaId }) => {
  return prisma.person.findFirst({
    where: {
      id: wcaId,
    },
  });
};
