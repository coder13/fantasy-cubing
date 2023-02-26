import { WcaApi } from "shared";
import { cache, prisma } from "./shared";
import { Competition } from "db";

export async function fetchAndUpsertComp(competitionId: string) {
  const competitionRes = await new WcaApi({
    cache
  }).getCompetition(competitionId);

  const comp: Competition = {
    id: competitionRes.id,
    name: competitionRes.name,
    countryId: competitionRes.country_iso2,
    startDate: competitionRes.start_date,
    endDate: competitionRes.end_date,
  }

  return await prisma.competition.upsert({
    where: {
      id: competitionId
    },
    update: comp,
    create: comp
  });
}
