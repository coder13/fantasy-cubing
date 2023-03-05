import { PersonResolvers } from 'index';
import { AppContext } from '../../../server';
import prisma from '../../../lib/db';

export const results: PersonResolvers<AppContext>['results'] = async (
  { id },
  { weekYear, eventId, competitionId }
) => {
  return (
    await prisma.result.findMany({
      where: {
        personId: id,
        ...(weekYear && {
          week: weekYear.week,
          year: weekYear.year,
        }),
        ...(eventId && { eventId }),
        ...(competitionId && { competitionId }),
      },
      include: {
        competition: true,
      },
    })
  ).map((result) => ({
    ...result,
    person: {
      id: result.personId,
    },
  }));
};
