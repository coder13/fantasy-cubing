import { WcaApi } from 'shared';
import { cache, prisma } from './shared';
import { Competition } from 'db';

export async function fetchAndUpsertComp(competitionId: string) {
  const competitionRes = await new WcaApi({
    cache,
  }).getCompetition(competitionId);

  const comp: Competition = {
    id: competitionRes.id,
    name: competitionRes.name,
    countryId: competitionRes.country_iso2,
    startDate: competitionRes.start_date,
    endDate: competitionRes.end_date,
    cancelled: !!competitionRes.cancelled_at,
    officialResultsUpdatedAt: null,
    unofficialResultsUpdatedAt: null,
  };

  return await prisma.competition.upsert({
    where: {
      id: competitionId,
    },
    update: comp,
    create: comp,
  });
}

export async function fetchAndUpsertManyComps(
  startDate: string,
  endDate: string
) {
  const comps = await new WcaApi().getCompetitions(startDate, endDate);

  return await prisma.$transaction(
    comps.map((comp) =>
      prisma.competition.upsert({
        where: {
          id: comp.id,
        },
        update: {
          id: comp.id,
          name: comp.name,
          countryId: comp.country_iso2,
          startDate: comp.start_date,
          endDate: comp.end_date,
          cancelled: !!comp.cancelled_at,
        },
        create: {
          id: comp.id,
          name: comp.name,
          countryId: comp.country_iso2,
          startDate: comp.start_date,
          endDate: comp.end_date,
          cancelled: !!comp.cancelled_at,
        },
      })
    )
  );
}
