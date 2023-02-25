import { Competition } from "@wca/helpers";
import { QueryResolvers } from "../../../generated/graphql";
import { AppContext } from "../../../server";

export const getTopCubers: QueryResolvers<AppContext>["getTopCubers"] = async (
  _,
  { startDate, endDate, rank },
  { wcaApi }
) => {
  const competitions = await wcaApi.getCompetitions(startDate, endDate);
  const wcifs = (
    await Promise.allSettled(
      competitions.map((comp) => wcaApi.getWcifPublic(comp.id))
    )
  ).filter(
    (wcif) => wcif.status === "fulfilled"
  ) as PromiseFulfilledResult<Competition>[];

  const personEventReg: {
    name: string;
    wcaId?: string;
    countryIso2: string;
    eventId: string;
    single?: {
      value: number;
      worldRanking: number;
      continentalRanking: number;
      nationalRanking: number;
    };
    average?: {
      value: number;
      worldRanking: number;
      continentalRanking: number;
      nationalRanking: number;
    };
    competition: {
      id: string;
      name: string;
      startDate: string;
    };
  }[] = [];

  wcifs.forEach((wcif) =>
    wcif.value.persons.forEach((person) => {
      const personData = {
        name: person.name,
        wcaId: person.wcaId || undefined,
        countryIso2: person.countryIso2,
        competition: {
          id: wcif.value.id,
          name: wcif.value.name,
          startDate: wcif.value.schedule.startDate,
        },
      };

      person?.registration?.eventIds.forEach((eventId) => {
        const bests = person.personalBests?.filter(
          (pb) => pb.eventId === eventId
        );
        const average = bests?.find((pb) => pb.type === "average");
        const single = bests?.find((pb) => pb.type === "single");

        if ((average && average?.worldRanking < rank) || (single && single?.worldRanking < rank)) {
          personEventReg.push({
            ...personData,
            eventId,
            ...single,
            ...average,
          });
        }
      });
    })
  );

  return personEventReg;
};
