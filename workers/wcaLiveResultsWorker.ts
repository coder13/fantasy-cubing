import BeeQueue from "bee-queue";
import { prisma, redisClient } from "./shared";
import { Round, RoundResult, WcaLiveApi } from "shared";
import { fetchAndUpsertComp } from "./competitions";

type RoundTypeId = '1' | '2' | '3' | 'c' | 'd' | 'e' | 'f';
function roundTypeIdFromRound(round: Round): RoundTypeId | undefined {
  switch (round.name) {
    case "Final":
      return round.cutoff ? 'c' : 'f'
    case 'First Round':
      return round.cutoff ? 'd' : '1';
    case 'Second Round':
      return round.cutoff ? 'e' : '2';
    case 'Third Round':
      return '3';
    default:
      throw new Error('Unknown round name: ' + round.name);
  }
}

type params = {
  competitionId: string;
}

export const createQueue = (options: BeeQueue.QueueSettings = {}) => {
  return new BeeQueue<params>('wcaLiveResults', {
    redis: redisClient,
    ...options,
  });
}

async function fetchFromWcaLive(competitionId: string) {
  const wcaLive = await prisma.wcaLiveCompetition.findFirst({
    where: {
      wcaId: competitionId,
    },
  });

  if (!wcaLive) {
    // XXX: perhaps create a job to fetch the wca live ids?
    return;
  }

  const results = await new WcaLiveApi({
    baseURL: process.env.WCA_LIVE_ORIGIN,
  }).results(wcaLive.wcaLiveId.toString());

  console.log(37, results);

  if (results.errors) {
    console.error(results.errors)
    return;
  }

  if (!results?.data?.competition) {
    throw new Error('No results found for ' + competitionId)
  }

  const competition = await prisma.competition.findFirst({
    where: {
      id: competitionId,
    },
  }) || await fetchAndUpsertComp(competitionId);

  const trans = await prisma.$transaction(
    results.data.competition.events.flatMap((event) => event.rounds.flatMap((round) => {
      const roundTypeId = roundTypeIdFromRound(round);
      if (!results || !roundTypeId) {
        return;
      }

      const filteredResults = round.results?.filter((result) => !!result && result.person.wcaId).filter(Boolean)

      return filteredResults.map((result) => prisma.result.upsert(({
        where: {
          competitionId_eventId_roundTypeId_personId: {
            competitionId,
            eventId: event.event.id,
            roundTypeId,
            personId: result.person.wcaId,
          },
        },
        update: {
          pos: result.pos,
          best: result.best || 0,
          average: result.average || 0,
          regionalSingleRecord: result.singleRecordTag === 'PR' ? '' : result.singleRecordTag,
          regionalAverageRecord: result.averageRecordTag === 'PR' ? '' : result.averageRecordTag,
        },
        create: {
          eventId: event.event.id,
          roundTypeId,
          competition: {
            connect: {
              id: competitionId,
            },
          },
          person: {
            connectOrCreate: {
              where: {
                id: result.person.wcaId,
              },
              create: {
                id: result.person.wcaId,
                name: result.person.name,
                countryId: result.person.country.iso2,
              },
            },
          },
          pos: result.pos,
          best: result.best || 0,
          average: result.average || 0,
          regionalSingleRecord: result.singleRecordTag === 'PR' ? '' : result.singleRecordTag,
          regionalAverageRecord: result.averageRecordTag === 'PR' ? '' : result.averageRecordTag,
          date: competition.startDate,
          week: 0,
          year: 0,
        }
      })))
    })).filter(Boolean));

  console.log('Upserted', trans.length, 'results from wca live')
}

fetchFromWcaLive('SleeplessinSeattle2023')
