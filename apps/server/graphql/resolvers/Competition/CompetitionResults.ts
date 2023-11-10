import { CompetitionResolvers } from 'index';
import prisma from '../../../lib/db';

export const results: CompetitionResolvers['results'] = async (
  parent,
  { eventId, personId }
) => {
  return (
    await prisma.result.findMany({
      where: {
        competitionId: parent.id,
        ...(eventId && { eventId }),
        ...(personId && { personId }),
      },
      include: {
        person: true,
      },
    })
  ).map((result) => ({
    ...result,
    competition: {
      id: result.competitionId,
    },
  }));
};
