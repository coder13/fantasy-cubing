import { QueryResolvers } from 'index';
import prisma from '../../../lib/db';

export const results: QueryResolvers['results'] = async (
  _,
  { weekYear, eventId, isRecord }
) => {
  return (
    await prisma.result.findMany({
      where: {
        competition: {
          cancelled: false,
        },
        week: weekYear?.week,
        year: weekYear?.year,
        ...(eventId && { eventId }),
        ...(isRecord && {
          OR: [
            {
              regionalAverageRecord: {
                not: {
                  equals: '',
                },
              },
            },
            {
              regionalSingleRecord: {
                not: {
                  equals: '',
                },
              },
            },
          ],
        }),
      },
      include: {
        competition: true,
        person: true,
      },
    })
  ).map((result) => ({
    ...result,
  }));
};
