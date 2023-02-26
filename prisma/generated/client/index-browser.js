
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.10.1
 * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
 */
Prisma.prismaVersion = {
  client: "4.10.1",
  engine: "aead147aa326ccb985dcfed5b065b4fdabd44b19"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.ChampionshipsScalarFieldEnum = makeEnum({
  id: 'id',
  competition_id: 'competition_id',
  championship_type: 'championship_type'
});

exports.Prisma.CompetitionScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  cityName: 'cityName',
  countryId: 'countryId',
  information: 'information',
  year: 'year',
  month: 'month',
  day: 'day',
  endMonth: 'endMonth',
  endDay: 'endDay',
  cancelled: 'cancelled',
  eventSpecs: 'eventSpecs',
  wcaDelegate: 'wcaDelegate',
  organiser: 'organiser',
  venue: 'venue',
  venueAddress: 'venueAddress',
  venueDetails: 'venueDetails',
  external_website: 'external_website',
  cellName: 'cellName',
  latitude: 'latitude',
  longitude: 'longitude'
});

exports.Prisma.ContinentsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  recordName: 'recordName',
  latitude: 'latitude',
  longitude: 'longitude',
  zoom: 'zoom'
});

exports.Prisma.CountriesScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  continentId: 'continentId',
  iso2: 'iso2'
});

exports.Prisma.Eligible_country_iso2s_for_championshipScalarFieldEnum = makeEnum({
  id: 'id',
  championship_type: 'championship_type',
  eligible_country_iso2: 'eligible_country_iso2'
});

exports.Prisma.EventsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  rank: 'rank',
  format: 'format',
  cellName: 'cellName'
});

exports.Prisma.FormatsScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  sort_by: 'sort_by',
  sort_by_second: 'sort_by_second',
  expected_solve_count: 'expected_solve_count',
  trim_fastest_n: 'trim_fastest_n',
  trim_slowest_n: 'trim_slowest_n'
});

exports.Prisma.PersonScalarFieldEnum = makeEnum({
  id: 'id',
  subid: 'subid',
  name: 'name',
  countryId: 'countryId',
  gender: 'gender'
});

exports.Prisma.PicksScalarFieldEnum = makeEnum({
  id: 'id',
  slot: 'slot',
  teamId: 'teamId',
  week: 'week',
  year: 'year',
  wcaId: 'wcaId',
  eventId: 'eventId',
  points: 'points'
});

exports.Prisma.RanksAverageScalarFieldEnum = makeEnum({
  personId: 'personId',
  eventId: 'eventId',
  best: 'best',
  worldRank: 'worldRank',
  continentRank: 'continentRank',
  countryRank: 'countryRank',
  personSubId: 'personSubId'
});

exports.Prisma.RanksSingleScalarFieldEnum = makeEnum({
  personId: 'personId',
  eventId: 'eventId',
  best: 'best',
  worldRank: 'worldRank',
  continentRank: 'continentRank',
  countryRank: 'countryRank',
  personSubId: 'personSubId'
});

exports.Prisma.ResultsScalarFieldEnum = makeEnum({
  competitionId: 'competitionId',
  eventId: 'eventId',
  roundTypeId: 'roundTypeId',
  pos: 'pos',
  best: 'best',
  average: 'average',
  personName: 'personName',
  personId: 'personId',
  personCountryId: 'personCountryId',
  formatId: 'formatId',
  value1: 'value1',
  value2: 'value2',
  value3: 'value3',
  value4: 'value4',
  value5: 'value5',
  regionalSingleRecord: 'regionalSingleRecord',
  regionalAverageRecord: 'regionalAverageRecord',
  personsSubid: 'personsSubid'
});

exports.Prisma.RoundTypesScalarFieldEnum = makeEnum({
  id: 'id',
  rank: 'rank',
  name: 'name',
  cellName: 'cellName',
  final: 'final'
});

exports.Prisma.SessionScalarFieldEnum = makeEnum({
  id: 'id',
  sid: 'sid',
  data: 'data',
  expiresAt: 'expiresAt'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TeamScalarFieldEnum = makeEnum({
  id: 'id',
  userId: 'userId',
  name: 'name'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  email: 'email',
  avatar: 'avatar'
});


exports.Prisma.ModelName = makeEnum({
  Competition: 'Competition',
  Continents: 'Continents',
  Countries: 'Countries',
  Events: 'Events',
  Formats: 'Formats',
  Person: 'Person',
  RanksAverage: 'RanksAverage',
  RanksSingle: 'RanksSingle',
  Results: 'Results',
  RoundTypes: 'RoundTypes',
  championships: 'championships',
  eligible_country_iso2s_for_championship: 'eligible_country_iso2s_for_championship',
  Session: 'Session',
  User: 'User',
  Team: 'Team',
  Picks: 'Picks'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
