import { WcaApi, WcaLiveApi } from 'shared';
import { cache, prisma } from './shared';
import { fetchAndUpsertComp } from './competitions';

export async function updateWcaLiveIds() {
  const today = new Date().toISOString().split('T')[0]
  const comps = await new WcaLiveApi({
    baseURL: process.env.WCA_LIVE_ORIGIN,
  }).competitions(today);

  console.log(comps.data.competitions);
  await prisma.wcaLiveCompetition.createMany({
    skipDuplicates: true,
    data: comps.data.competitions.map((comp) => ({
      wcaId: comp.wca_id,
      wcaLiveId: Number.parseInt(comp.id, 10),
    })),
  });
}

export async function fetchFromApi(competitionId: string) {
  const results = await new WcaApi(
    { cache, baseURL: process.env.WCA_ORIGIN }
  ).getResults(competitionId);

  const competition = await prisma.competition.findFirst({
    where: {
      id: competitionId,
    },
  }) || await fetchAndUpsertComp(competitionId);

  console.log(`Found ${results.length} results for ${competitionId} (${competition.name})`)

  await prisma.$transaction(
    results.map((result) => prisma.result.upsert(
      {
        where: {
          competitionId_eventId_roundTypeId_personId: {
            competitionId,
            eventId: result.event_id,
            roundTypeId: result.round_type_id,
            personId: result.wca_id,
          },
        },
        update: {
          pos: result.pos,
          best: result.best,
          average: result.average,
          regionalSingleRecord: result.regional_single_record,
          regionalAverageRecord: result.regional_average_record,
        },
        create: {
          eventId: result.event_id,
          roundTypeId: result.round_type_id,
          competition: {
            connect: {
              id: competitionId,
            },
          },
          person: {
            connectOrCreate: {
              where: {
                id: result.wca_id,
              },
              create: {
                id: result.wca_id,
                name: result.name,
                countryId: result.country_iso2,
              }
            },
          },
          pos: result.pos,
          best: result.best,
          average: result.average,
          regionalSingleRecord: result.regional_single_record,
          regionalAverageRecord: result.regional_average_record,
          date: competition.startDate,
          week: 0,
          year: 0,
        },
      }
    ))
  );
}
