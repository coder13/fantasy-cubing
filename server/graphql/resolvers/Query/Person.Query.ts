import { QueryResolvers } from "../../../generated/graphql";
import { AppContext } from "../../../server";

export const person: QueryResolvers<AppContext>["person"] = async (
  _,
  { wcaId },
  { db }
) => {
  db.persons.findUnique({ where: { wcaId } });
}
