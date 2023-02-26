
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Competition
 * 
 */
export type Competition = {
  id: string
  name: string
  cityName: string
  countryId: string
  information: string | null
  year: number
  month: number
  day: number
  endMonth: number
  endDay: number
  cancelled: number
  eventSpecs: string | null
  wcaDelegate: string | null
  organiser: string | null
  venue: string
  venueAddress: string | null
  venueDetails: string | null
  external_website: string | null
  cellName: string
  latitude: number | null
  longitude: number | null
}

/**
 * Model Continents
 * 
 */
export type Continents = {
  id: string
  name: string
  recordName: string
  latitude: number
  longitude: number
  zoom: number
}

/**
 * Model Countries
 * 
 */
export type Countries = {
  id: string
  name: string
  continentId: string
  iso2: string | null
}

/**
 * Model Events
 * 
 */
export type Events = {
  id: string
  name: string
  rank: number
  format: string
  cellName: string
}

/**
 * Model Formats
 * 
 */
export type Formats = {
  id: string
  name: string
  sort_by: string
  sort_by_second: string
  expected_solve_count: number
  trim_fastest_n: number
  trim_slowest_n: number
}

/**
 * Model Person
 * 
 */
export type Person = {
  id: string
  subid: number
  name: string | null
  countryId: string
  gender: string | null
}

/**
 * Model RanksAverage
 * 
 */
export type RanksAverage = {
  personId: string
  eventId: string
  best: number
  worldRank: number
  continentRank: number
  countryRank: number
  personSubId: number
}

/**
 * Model RanksSingle
 * 
 */
export type RanksSingle = {
  personId: string
  eventId: string
  best: number
  worldRank: number
  continentRank: number
  countryRank: number
  personSubId: number
}

/**
 * Model Results
 * 
 */
export type Results = {
  competitionId: string
  eventId: string
  roundTypeId: string
  pos: number
  best: number
  average: number
  personName: string | null
  personId: string
  personCountryId: string | null
  formatId: string
  value1: number
  value2: number
  value3: number
  value4: number
  value5: number
  regionalSingleRecord: string | null
  regionalAverageRecord: string | null
  personsSubid: number
}

/**
 * Model RoundTypes
 * 
 */
export type RoundTypes = {
  id: string
  rank: number
  name: string
  cellName: string
  final: boolean
}

/**
 * Model championships
 * 
 */
export type championships = {
  id: number
  competition_id: string
  championship_type: string
}

/**
 * Model eligible_country_iso2s_for_championship
 * 
 */
export type eligible_country_iso2s_for_championship = {
  id: bigint
  championship_type: string
  eligible_country_iso2: string
}

/**
 * Model Session
 * 
 */
export type Session = {
  id: string
  sid: string
  data: string
  expiresAt: Date
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  name: string
  email: string
  avatar: string | null
}

/**
 * Model Team
 * 
 */
export type Team = {
  id: number
  userId: number
  name: string
}

/**
 * Model Picks
 * 
 */
export type Picks = {
  id: number
  slot: number
  teamId: number
  week: number
  year: number
  wcaId: string
  eventId: string
  points: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Competitions
 * const competitions = await prisma.competition.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Competitions
   * const competitions = await prisma.competition.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.competition`: Exposes CRUD operations for the **Competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.CompetitionDelegate<GlobalReject>;

  /**
   * `prisma.continents`: Exposes CRUD operations for the **Continents** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Continents
    * const continents = await prisma.continents.findMany()
    * ```
    */
  get continents(): Prisma.ContinentsDelegate<GlobalReject>;

  /**
   * `prisma.countries`: Exposes CRUD operations for the **Countries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.countries.findMany()
    * ```
    */
  get countries(): Prisma.CountriesDelegate<GlobalReject>;

  /**
   * `prisma.events`: Exposes CRUD operations for the **Events** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.events.findMany()
    * ```
    */
  get events(): Prisma.EventsDelegate<GlobalReject>;

  /**
   * `prisma.formats`: Exposes CRUD operations for the **Formats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Formats
    * const formats = await prisma.formats.findMany()
    * ```
    */
  get formats(): Prisma.FormatsDelegate<GlobalReject>;

  /**
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<GlobalReject>;

  /**
   * `prisma.ranksAverage`: Exposes CRUD operations for the **RanksAverage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RanksAverages
    * const ranksAverages = await prisma.ranksAverage.findMany()
    * ```
    */
  get ranksAverage(): Prisma.RanksAverageDelegate<GlobalReject>;

  /**
   * `prisma.ranksSingle`: Exposes CRUD operations for the **RanksSingle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RanksSingles
    * const ranksSingles = await prisma.ranksSingle.findMany()
    * ```
    */
  get ranksSingle(): Prisma.RanksSingleDelegate<GlobalReject>;

  /**
   * `prisma.results`: Exposes CRUD operations for the **Results** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.results.findMany()
    * ```
    */
  get results(): Prisma.ResultsDelegate<GlobalReject>;

  /**
   * `prisma.roundTypes`: Exposes CRUD operations for the **RoundTypes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RoundTypes
    * const roundTypes = await prisma.roundTypes.findMany()
    * ```
    */
  get roundTypes(): Prisma.RoundTypesDelegate<GlobalReject>;

  /**
   * `prisma.championships`: Exposes CRUD operations for the **championships** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Championships
    * const championships = await prisma.championships.findMany()
    * ```
    */
  get championships(): Prisma.championshipsDelegate<GlobalReject>;

  /**
   * `prisma.eligible_country_iso2s_for_championship`: Exposes CRUD operations for the **eligible_country_iso2s_for_championship** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eligible_country_iso2s_for_championships
    * const eligible_country_iso2s_for_championships = await prisma.eligible_country_iso2s_for_championship.findMany()
    * ```
    */
  get eligible_country_iso2s_for_championship(): Prisma.eligible_country_iso2s_for_championshipDelegate<GlobalReject>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<GlobalReject>;

  /**
   * `prisma.picks`: Exposes CRUD operations for the **Picks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Picks
    * const picks = await prisma.picks.findMany()
    * ```
    */
  get picks(): Prisma.PicksDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.10.1
   * Query Engine version: aead147aa326ccb985dcfed5b065b4fdabd44b19
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CompetitionCountOutputType
   */


  export type CompetitionCountOutputType = {
    Results: number
  }

  export type CompetitionCountOutputTypeSelect = {
    Results?: boolean
  }

  export type CompetitionCountOutputTypeGetPayload<S extends boolean | null | undefined | CompetitionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? CompetitionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (CompetitionCountOutputTypeArgs)
    ? CompetitionCountOutputType 
    : S extends { select: any } & (CompetitionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof CompetitionCountOutputType ? CompetitionCountOutputType[P] : never
  } 
      : CompetitionCountOutputType




  // Custom InputTypes

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CompetitionCountOutputType
     */
    select?: CompetitionCountOutputTypeSelect | null
  }



  /**
   * Count Type PersonCountOutputType
   */


  export type PersonCountOutputType = {
    Results: number
    RanksAverage: number
    RanksSingle: number
  }

  export type PersonCountOutputTypeSelect = {
    Results?: boolean
    RanksAverage?: boolean
    RanksSingle?: boolean
  }

  export type PersonCountOutputTypeGetPayload<S extends boolean | null | undefined | PersonCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PersonCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PersonCountOutputTypeArgs)
    ? PersonCountOutputType 
    : S extends { select: any } & (PersonCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PersonCountOutputType ? PersonCountOutputType[P] : never
  } 
      : PersonCountOutputType




  // Custom InputTypes

  /**
   * PersonCountOutputType without action
   */
  export type PersonCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PersonCountOutputType
     */
    select?: PersonCountOutputTypeSelect | null
  }



  /**
   * Count Type TeamCountOutputType
   */


  export type TeamCountOutputType = {
    Picks: number
  }

  export type TeamCountOutputTypeSelect = {
    Picks?: boolean
  }

  export type TeamCountOutputTypeGetPayload<S extends boolean | null | undefined | TeamCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TeamCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TeamCountOutputTypeArgs)
    ? TeamCountOutputType 
    : S extends { select: any } & (TeamCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TeamCountOutputType ? TeamCountOutputType[P] : never
  } 
      : TeamCountOutputType




  // Custom InputTypes

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Competition
   */


  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionAvgAggregateOutputType = {
    year: number | null
    month: number | null
    day: number | null
    endMonth: number | null
    endDay: number | null
    cancelled: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CompetitionSumAggregateOutputType = {
    year: number | null
    month: number | null
    day: number | null
    endMonth: number | null
    endDay: number | null
    cancelled: number | null
    latitude: number | null
    longitude: number | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: string | null
    name: string | null
    cityName: string | null
    countryId: string | null
    information: string | null
    year: number | null
    month: number | null
    day: number | null
    endMonth: number | null
    endDay: number | null
    cancelled: number | null
    eventSpecs: string | null
    wcaDelegate: string | null
    organiser: string | null
    venue: string | null
    venueAddress: string | null
    venueDetails: string | null
    external_website: string | null
    cellName: string | null
    latitude: number | null
    longitude: number | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cityName: string | null
    countryId: string | null
    information: string | null
    year: number | null
    month: number | null
    day: number | null
    endMonth: number | null
    endDay: number | null
    cancelled: number | null
    eventSpecs: string | null
    wcaDelegate: string | null
    organiser: string | null
    venue: string | null
    venueAddress: string | null
    venueDetails: string | null
    external_website: string | null
    cellName: string | null
    latitude: number | null
    longitude: number | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    name: number
    cityName: number
    countryId: number
    information: number
    year: number
    month: number
    day: number
    endMonth: number
    endDay: number
    cancelled: number
    eventSpecs: number
    wcaDelegate: number
    organiser: number
    venue: number
    venueAddress: number
    venueDetails: number
    external_website: number
    cellName: number
    latitude: number
    longitude: number
    _all: number
  }


  export type CompetitionAvgAggregateInputType = {
    year?: true
    month?: true
    day?: true
    endMonth?: true
    endDay?: true
    cancelled?: true
    latitude?: true
    longitude?: true
  }

  export type CompetitionSumAggregateInputType = {
    year?: true
    month?: true
    day?: true
    endMonth?: true
    endDay?: true
    cancelled?: true
    latitude?: true
    longitude?: true
  }

  export type CompetitionMinAggregateInputType = {
    id?: true
    name?: true
    cityName?: true
    countryId?: true
    information?: true
    year?: true
    month?: true
    day?: true
    endMonth?: true
    endDay?: true
    cancelled?: true
    eventSpecs?: true
    wcaDelegate?: true
    organiser?: true
    venue?: true
    venueAddress?: true
    venueDetails?: true
    external_website?: true
    cellName?: true
    latitude?: true
    longitude?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    name?: true
    cityName?: true
    countryId?: true
    information?: true
    year?: true
    month?: true
    day?: true
    endMonth?: true
    endDay?: true
    cancelled?: true
    eventSpecs?: true
    wcaDelegate?: true
    organiser?: true
    venue?: true
    venueAddress?: true
    venueDetails?: true
    external_website?: true
    cellName?: true
    latitude?: true
    longitude?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    name?: true
    cityName?: true
    countryId?: true
    information?: true
    year?: true
    month?: true
    day?: true
    endMonth?: true
    endDay?: true
    cancelled?: true
    eventSpecs?: true
    wcaDelegate?: true
    organiser?: true
    venue?: true
    venueAddress?: true
    venueDetails?: true
    external_website?: true
    cellName?: true
    latitude?: true
    longitude?: true
    _all?: true
  }

  export type CompetitionAggregateArgs = {
    /**
     * Filter which Competition to aggregate.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: Enumerable<CompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type CompetitionGroupByArgs = {
    where?: CompetitionWhereInput
    orderBy?: Enumerable<CompetitionOrderByWithAggregationInput>
    by: CompetitionScalarFieldEnum[]
    having?: CompetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _avg?: CompetitionAvgAggregateInputType
    _sum?: CompetitionSumAggregateInputType
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }


  export type CompetitionGroupByOutputType = {
    id: string
    name: string
    cityName: string
    countryId: string
    information: string | null
    year: number
    month: number
    day: number
    endMonth: number
    endDay: number
    cancelled: number
    eventSpecs: string | null
    wcaDelegate: string | null
    organiser: string | null
    venue: string
    venueAddress: string | null
    venueDetails: string | null
    external_website: string | null
    cellName: string
    latitude: number | null
    longitude: number | null
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends CompetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionSelect = {
    id?: boolean
    name?: boolean
    cityName?: boolean
    countryId?: boolean
    information?: boolean
    year?: boolean
    month?: boolean
    day?: boolean
    endMonth?: boolean
    endDay?: boolean
    cancelled?: boolean
    eventSpecs?: boolean
    wcaDelegate?: boolean
    organiser?: boolean
    venue?: boolean
    venueAddress?: boolean
    venueDetails?: boolean
    external_website?: boolean
    cellName?: boolean
    latitude?: boolean
    longitude?: boolean
    Results?: boolean | Competition$ResultsArgs
    _count?: boolean | CompetitionCountOutputTypeArgs
  }


  export type CompetitionInclude = {
    Results?: boolean | Competition$ResultsArgs
    _count?: boolean | CompetitionCountOutputTypeArgs
  }

  export type CompetitionGetPayload<S extends boolean | null | undefined | CompetitionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Competition :
    S extends undefined ? never :
    S extends { include: any } & (CompetitionArgs | CompetitionFindManyArgs)
    ? Competition  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Results' ? Array < ResultsGetPayload<S['include'][P]>>  :
        P extends '_count' ? CompetitionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CompetitionArgs | CompetitionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Results' ? Array < ResultsGetPayload<S['select'][P]>>  :
        P extends '_count' ? CompetitionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Competition ? Competition[P] : never
  } 
      : Competition


  type CompetitionCountArgs = 
    Omit<CompetitionFindManyArgs, 'select' | 'include'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface CompetitionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Competition that matches the filter.
     * @param {CompetitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CompetitionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CompetitionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Competition'> extends True ? Prisma__CompetitionClient<CompetitionGetPayload<T>> : Prisma__CompetitionClient<CompetitionGetPayload<T> | null, null>

    /**
     * Find one Competition that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CompetitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CompetitionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CompetitionFindUniqueOrThrowArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CompetitionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CompetitionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Competition'> extends True ? Prisma__CompetitionClient<CompetitionGetPayload<T>> : Prisma__CompetitionClient<CompetitionGetPayload<T> | null, null>

    /**
     * Find the first Competition that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CompetitionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CompetitionFindFirstOrThrowArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CompetitionFindManyArgs>(
      args?: SelectSubset<T, CompetitionFindManyArgs>
    ): Prisma.PrismaPromise<Array<CompetitionGetPayload<T>>>

    /**
     * Create a Competition.
     * @param {CompetitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
    **/
    create<T extends CompetitionCreateArgs>(
      args: SelectSubset<T, CompetitionCreateArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Create many Competitions.
     *     @param {CompetitionCreateManyArgs} args - Arguments to create many Competitions.
     *     @example
     *     // Create many Competitions
     *     const competition = await prisma.competition.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CompetitionCreateManyArgs>(
      args?: SelectSubset<T, CompetitionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Competition.
     * @param {CompetitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
    **/
    delete<T extends CompetitionDeleteArgs>(
      args: SelectSubset<T, CompetitionDeleteArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Update one Competition.
     * @param {CompetitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CompetitionUpdateArgs>(
      args: SelectSubset<T, CompetitionUpdateArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Delete zero or more Competitions.
     * @param {CompetitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CompetitionDeleteManyArgs>(
      args?: SelectSubset<T, CompetitionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CompetitionUpdateManyArgs>(
      args: SelectSubset<T, CompetitionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Competition.
     * @param {CompetitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
    **/
    upsert<T extends CompetitionUpsertArgs>(
      args: SelectSubset<T, CompetitionUpsertArgs>
    ): Prisma__CompetitionClient<CompetitionGetPayload<T>>

    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends CompetitionCountArgs>(
      args?: Subset<T, CompetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CompetitionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Results<T extends Competition$ResultsArgs= {}>(args?: Subset<T, Competition$ResultsArgs>): Prisma.PrismaPromise<Array<ResultsGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Competition base type for findUnique actions
   */
  export type CompetitionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findUnique
   */
  export interface CompetitionFindUniqueArgs extends CompetitionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Competition findUniqueOrThrow
   */
  export type CompetitionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }


  /**
   * Competition base type for findFirst actions
   */
  export type CompetitionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: Enumerable<CompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: Enumerable<CompetitionScalarFieldEnum>
  }

  /**
   * Competition findFirst
   */
  export interface CompetitionFindFirstArgs extends CompetitionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Competition findFirstOrThrow
   */
  export type CompetitionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: Enumerable<CompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: Enumerable<CompetitionScalarFieldEnum>
  }


  /**
   * Competition findMany
   */
  export type CompetitionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: Enumerable<CompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    distinct?: Enumerable<CompetitionScalarFieldEnum>
  }


  /**
   * Competition create
   */
  export type CompetitionCreateArgs = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude | null
    /**
     * The data needed to create a Competition.
     */
    data: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
  }


  /**
   * Competition createMany
   */
  export type CompetitionCreateManyArgs = {
    /**
     * The data used to create many Competitions.
     */
    data: Enumerable<CompetitionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Competition update
   */
  export type CompetitionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude | null
    /**
     * The data needed to update a Competition.
     */
    data: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
    /**
     * Choose, which Competition to update.
     */
    where: CompetitionWhereUniqueInput
  }


  /**
   * Competition updateMany
   */
  export type CompetitionUpdateManyArgs = {
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
  }


  /**
   * Competition upsert
   */
  export type CompetitionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude | null
    /**
     * The filter to search for the Competition to update in case it exists.
     */
    where: CompetitionWhereUniqueInput
    /**
     * In case the Competition found by the `where` argument doesn't exist, create a new Competition with this data.
     */
    create: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
    /**
     * In case the Competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
  }


  /**
   * Competition delete
   */
  export type CompetitionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude | null
    /**
     * Filter which Competition to delete.
     */
    where: CompetitionWhereUniqueInput
  }


  /**
   * Competition deleteMany
   */
  export type CompetitionDeleteManyArgs = {
    /**
     * Filter which Competitions to delete
     */
    where?: CompetitionWhereInput
  }


  /**
   * Competition.Results
   */
  export type Competition$ResultsArgs = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    where?: ResultsWhereInput
    orderBy?: Enumerable<ResultsOrderByWithRelationInput>
    cursor?: ResultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResultsScalarFieldEnum>
  }


  /**
   * Competition without action
   */
  export type CompetitionArgs = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CompetitionInclude | null
  }



  /**
   * Model Continents
   */


  export type AggregateContinents = {
    _count: ContinentsCountAggregateOutputType | null
    _avg: ContinentsAvgAggregateOutputType | null
    _sum: ContinentsSumAggregateOutputType | null
    _min: ContinentsMinAggregateOutputType | null
    _max: ContinentsMaxAggregateOutputType | null
  }

  export type ContinentsAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    zoom: number | null
  }

  export type ContinentsSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
    zoom: number | null
  }

  export type ContinentsMinAggregateOutputType = {
    id: string | null
    name: string | null
    recordName: string | null
    latitude: number | null
    longitude: number | null
    zoom: number | null
  }

  export type ContinentsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    recordName: string | null
    latitude: number | null
    longitude: number | null
    zoom: number | null
  }

  export type ContinentsCountAggregateOutputType = {
    id: number
    name: number
    recordName: number
    latitude: number
    longitude: number
    zoom: number
    _all: number
  }


  export type ContinentsAvgAggregateInputType = {
    latitude?: true
    longitude?: true
    zoom?: true
  }

  export type ContinentsSumAggregateInputType = {
    latitude?: true
    longitude?: true
    zoom?: true
  }

  export type ContinentsMinAggregateInputType = {
    id?: true
    name?: true
    recordName?: true
    latitude?: true
    longitude?: true
    zoom?: true
  }

  export type ContinentsMaxAggregateInputType = {
    id?: true
    name?: true
    recordName?: true
    latitude?: true
    longitude?: true
    zoom?: true
  }

  export type ContinentsCountAggregateInputType = {
    id?: true
    name?: true
    recordName?: true
    latitude?: true
    longitude?: true
    zoom?: true
    _all?: true
  }

  export type ContinentsAggregateArgs = {
    /**
     * Filter which Continents to aggregate.
     */
    where?: ContinentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: Enumerable<ContinentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContinentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Continents
    **/
    _count?: true | ContinentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContinentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContinentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContinentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContinentsMaxAggregateInputType
  }

  export type GetContinentsAggregateType<T extends ContinentsAggregateArgs> = {
        [P in keyof T & keyof AggregateContinents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContinents[P]>
      : GetScalarType<T[P], AggregateContinents[P]>
  }




  export type ContinentsGroupByArgs = {
    where?: ContinentsWhereInput
    orderBy?: Enumerable<ContinentsOrderByWithAggregationInput>
    by: ContinentsScalarFieldEnum[]
    having?: ContinentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContinentsCountAggregateInputType | true
    _avg?: ContinentsAvgAggregateInputType
    _sum?: ContinentsSumAggregateInputType
    _min?: ContinentsMinAggregateInputType
    _max?: ContinentsMaxAggregateInputType
  }


  export type ContinentsGroupByOutputType = {
    id: string
    name: string
    recordName: string
    latitude: number
    longitude: number
    zoom: number
    _count: ContinentsCountAggregateOutputType | null
    _avg: ContinentsAvgAggregateOutputType | null
    _sum: ContinentsSumAggregateOutputType | null
    _min: ContinentsMinAggregateOutputType | null
    _max: ContinentsMaxAggregateOutputType | null
  }

  type GetContinentsGroupByPayload<T extends ContinentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ContinentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContinentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContinentsGroupByOutputType[P]>
            : GetScalarType<T[P], ContinentsGroupByOutputType[P]>
        }
      >
    >


  export type ContinentsSelect = {
    id?: boolean
    name?: boolean
    recordName?: boolean
    latitude?: boolean
    longitude?: boolean
    zoom?: boolean
  }


  export type ContinentsGetPayload<S extends boolean | null | undefined | ContinentsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Continents :
    S extends undefined ? never :
    S extends { include: any } & (ContinentsArgs | ContinentsFindManyArgs)
    ? Continents 
    : S extends { select: any } & (ContinentsArgs | ContinentsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Continents ? Continents[P] : never
  } 
      : Continents


  type ContinentsCountArgs = 
    Omit<ContinentsFindManyArgs, 'select' | 'include'> & {
      select?: ContinentsCountAggregateInputType | true
    }

  export interface ContinentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Continents that matches the filter.
     * @param {ContinentsFindUniqueArgs} args - Arguments to find a Continents
     * @example
     * // Get one Continents
     * const continents = await prisma.continents.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContinentsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContinentsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Continents'> extends True ? Prisma__ContinentsClient<ContinentsGetPayload<T>> : Prisma__ContinentsClient<ContinentsGetPayload<T> | null, null>

    /**
     * Find one Continents that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContinentsFindUniqueOrThrowArgs} args - Arguments to find a Continents
     * @example
     * // Get one Continents
     * const continents = await prisma.continents.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContinentsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ContinentsFindUniqueOrThrowArgs>
    ): Prisma__ContinentsClient<ContinentsGetPayload<T>>

    /**
     * Find the first Continents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentsFindFirstArgs} args - Arguments to find a Continents
     * @example
     * // Get one Continents
     * const continents = await prisma.continents.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContinentsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContinentsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Continents'> extends True ? Prisma__ContinentsClient<ContinentsGetPayload<T>> : Prisma__ContinentsClient<ContinentsGetPayload<T> | null, null>

    /**
     * Find the first Continents that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentsFindFirstOrThrowArgs} args - Arguments to find a Continents
     * @example
     * // Get one Continents
     * const continents = await prisma.continents.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContinentsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ContinentsFindFirstOrThrowArgs>
    ): Prisma__ContinentsClient<ContinentsGetPayload<T>>

    /**
     * Find zero or more Continents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Continents
     * const continents = await prisma.continents.findMany()
     * 
     * // Get first 10 Continents
     * const continents = await prisma.continents.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const continentsWithIdOnly = await prisma.continents.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContinentsFindManyArgs>(
      args?: SelectSubset<T, ContinentsFindManyArgs>
    ): Prisma.PrismaPromise<Array<ContinentsGetPayload<T>>>

    /**
     * Create a Continents.
     * @param {ContinentsCreateArgs} args - Arguments to create a Continents.
     * @example
     * // Create one Continents
     * const Continents = await prisma.continents.create({
     *   data: {
     *     // ... data to create a Continents
     *   }
     * })
     * 
    **/
    create<T extends ContinentsCreateArgs>(
      args: SelectSubset<T, ContinentsCreateArgs>
    ): Prisma__ContinentsClient<ContinentsGetPayload<T>>

    /**
     * Create many Continents.
     *     @param {ContinentsCreateManyArgs} args - Arguments to create many Continents.
     *     @example
     *     // Create many Continents
     *     const continents = await prisma.continents.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContinentsCreateManyArgs>(
      args?: SelectSubset<T, ContinentsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Continents.
     * @param {ContinentsDeleteArgs} args - Arguments to delete one Continents.
     * @example
     * // Delete one Continents
     * const Continents = await prisma.continents.delete({
     *   where: {
     *     // ... filter to delete one Continents
     *   }
     * })
     * 
    **/
    delete<T extends ContinentsDeleteArgs>(
      args: SelectSubset<T, ContinentsDeleteArgs>
    ): Prisma__ContinentsClient<ContinentsGetPayload<T>>

    /**
     * Update one Continents.
     * @param {ContinentsUpdateArgs} args - Arguments to update one Continents.
     * @example
     * // Update one Continents
     * const continents = await prisma.continents.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContinentsUpdateArgs>(
      args: SelectSubset<T, ContinentsUpdateArgs>
    ): Prisma__ContinentsClient<ContinentsGetPayload<T>>

    /**
     * Delete zero or more Continents.
     * @param {ContinentsDeleteManyArgs} args - Arguments to filter Continents to delete.
     * @example
     * // Delete a few Continents
     * const { count } = await prisma.continents.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContinentsDeleteManyArgs>(
      args?: SelectSubset<T, ContinentsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Continents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Continents
     * const continents = await prisma.continents.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContinentsUpdateManyArgs>(
      args: SelectSubset<T, ContinentsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Continents.
     * @param {ContinentsUpsertArgs} args - Arguments to update or create a Continents.
     * @example
     * // Update or create a Continents
     * const continents = await prisma.continents.upsert({
     *   create: {
     *     // ... data to create a Continents
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Continents we want to update
     *   }
     * })
    **/
    upsert<T extends ContinentsUpsertArgs>(
      args: SelectSubset<T, ContinentsUpsertArgs>
    ): Prisma__ContinentsClient<ContinentsGetPayload<T>>

    /**
     * Count the number of Continents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentsCountArgs} args - Arguments to filter Continents to count.
     * @example
     * // Count the number of Continents
     * const count = await prisma.continents.count({
     *   where: {
     *     // ... the filter for the Continents we want to count
     *   }
     * })
    **/
    count<T extends ContinentsCountArgs>(
      args?: Subset<T, ContinentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContinentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Continents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContinentsAggregateArgs>(args: Subset<T, ContinentsAggregateArgs>): Prisma.PrismaPromise<GetContinentsAggregateType<T>>

    /**
     * Group by Continents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContinentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContinentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContinentsGroupByArgs['orderBy'] }
        : { orderBy?: ContinentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContinentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContinentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Continents.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContinentsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Continents base type for findUnique actions
   */
  export type ContinentsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Continents
     */
    select?: ContinentsSelect | null
    /**
     * Filter, which Continents to fetch.
     */
    where: ContinentsWhereUniqueInput
  }

  /**
   * Continents findUnique
   */
  export interface ContinentsFindUniqueArgs extends ContinentsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Continents findUniqueOrThrow
   */
  export type ContinentsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Continents
     */
    select?: ContinentsSelect | null
    /**
     * Filter, which Continents to fetch.
     */
    where: ContinentsWhereUniqueInput
  }


  /**
   * Continents base type for findFirst actions
   */
  export type ContinentsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Continents
     */
    select?: ContinentsSelect | null
    /**
     * Filter, which Continents to fetch.
     */
    where?: ContinentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: Enumerable<ContinentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Continents.
     */
    cursor?: ContinentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Continents.
     */
    distinct?: Enumerable<ContinentsScalarFieldEnum>
  }

  /**
   * Continents findFirst
   */
  export interface ContinentsFindFirstArgs extends ContinentsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Continents findFirstOrThrow
   */
  export type ContinentsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Continents
     */
    select?: ContinentsSelect | null
    /**
     * Filter, which Continents to fetch.
     */
    where?: ContinentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: Enumerable<ContinentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Continents.
     */
    cursor?: ContinentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Continents.
     */
    distinct?: Enumerable<ContinentsScalarFieldEnum>
  }


  /**
   * Continents findMany
   */
  export type ContinentsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Continents
     */
    select?: ContinentsSelect | null
    /**
     * Filter, which Continents to fetch.
     */
    where?: ContinentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Continents to fetch.
     */
    orderBy?: Enumerable<ContinentsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Continents.
     */
    cursor?: ContinentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Continents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Continents.
     */
    skip?: number
    distinct?: Enumerable<ContinentsScalarFieldEnum>
  }


  /**
   * Continents create
   */
  export type ContinentsCreateArgs = {
    /**
     * Select specific fields to fetch from the Continents
     */
    select?: ContinentsSelect | null
    /**
     * The data needed to create a Continents.
     */
    data: XOR<ContinentsCreateInput, ContinentsUncheckedCreateInput>
  }


  /**
   * Continents createMany
   */
  export type ContinentsCreateManyArgs = {
    /**
     * The data used to create many Continents.
     */
    data: Enumerable<ContinentsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Continents update
   */
  export type ContinentsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Continents
     */
    select?: ContinentsSelect | null
    /**
     * The data needed to update a Continents.
     */
    data: XOR<ContinentsUpdateInput, ContinentsUncheckedUpdateInput>
    /**
     * Choose, which Continents to update.
     */
    where: ContinentsWhereUniqueInput
  }


  /**
   * Continents updateMany
   */
  export type ContinentsUpdateManyArgs = {
    /**
     * The data used to update Continents.
     */
    data: XOR<ContinentsUpdateManyMutationInput, ContinentsUncheckedUpdateManyInput>
    /**
     * Filter which Continents to update
     */
    where?: ContinentsWhereInput
  }


  /**
   * Continents upsert
   */
  export type ContinentsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Continents
     */
    select?: ContinentsSelect | null
    /**
     * The filter to search for the Continents to update in case it exists.
     */
    where: ContinentsWhereUniqueInput
    /**
     * In case the Continents found by the `where` argument doesn't exist, create a new Continents with this data.
     */
    create: XOR<ContinentsCreateInput, ContinentsUncheckedCreateInput>
    /**
     * In case the Continents was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContinentsUpdateInput, ContinentsUncheckedUpdateInput>
  }


  /**
   * Continents delete
   */
  export type ContinentsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Continents
     */
    select?: ContinentsSelect | null
    /**
     * Filter which Continents to delete.
     */
    where: ContinentsWhereUniqueInput
  }


  /**
   * Continents deleteMany
   */
  export type ContinentsDeleteManyArgs = {
    /**
     * Filter which Continents to delete
     */
    where?: ContinentsWhereInput
  }


  /**
   * Continents without action
   */
  export type ContinentsArgs = {
    /**
     * Select specific fields to fetch from the Continents
     */
    select?: ContinentsSelect | null
  }



  /**
   * Model Countries
   */


  export type AggregateCountries = {
    _count: CountriesCountAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  export type CountriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    continentId: string | null
    iso2: string | null
  }

  export type CountriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    continentId: string | null
    iso2: string | null
  }

  export type CountriesCountAggregateOutputType = {
    id: number
    name: number
    continentId: number
    iso2: number
    _all: number
  }


  export type CountriesMinAggregateInputType = {
    id?: true
    name?: true
    continentId?: true
    iso2?: true
  }

  export type CountriesMaxAggregateInputType = {
    id?: true
    name?: true
    continentId?: true
    iso2?: true
  }

  export type CountriesCountAggregateInputType = {
    id?: true
    name?: true
    continentId?: true
    iso2?: true
    _all?: true
  }

  export type CountriesAggregateArgs = {
    /**
     * Filter which Countries to aggregate.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountriesMaxAggregateInputType
  }

  export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCountries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountries[P]>
      : GetScalarType<T[P], AggregateCountries[P]>
  }




  export type CountriesGroupByArgs = {
    where?: CountriesWhereInput
    orderBy?: Enumerable<CountriesOrderByWithAggregationInput>
    by: CountriesScalarFieldEnum[]
    having?: CountriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountriesCountAggregateInputType | true
    _min?: CountriesMinAggregateInputType
    _max?: CountriesMaxAggregateInputType
  }


  export type CountriesGroupByOutputType = {
    id: string
    name: string
    continentId: string
    iso2: string | null
    _count: CountriesCountAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  type GetCountriesGroupByPayload<T extends CountriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CountriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountriesGroupByOutputType[P]>
            : GetScalarType<T[P], CountriesGroupByOutputType[P]>
        }
      >
    >


  export type CountriesSelect = {
    id?: boolean
    name?: boolean
    continentId?: boolean
    iso2?: boolean
  }


  export type CountriesGetPayload<S extends boolean | null | undefined | CountriesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Countries :
    S extends undefined ? never :
    S extends { include: any } & (CountriesArgs | CountriesFindManyArgs)
    ? Countries 
    : S extends { select: any } & (CountriesArgs | CountriesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Countries ? Countries[P] : never
  } 
      : Countries


  type CountriesCountArgs = 
    Omit<CountriesFindManyArgs, 'select' | 'include'> & {
      select?: CountriesCountAggregateInputType | true
    }

  export interface CountriesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Countries that matches the filter.
     * @param {CountriesFindUniqueArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CountriesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CountriesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Countries'> extends True ? Prisma__CountriesClient<CountriesGetPayload<T>> : Prisma__CountriesClient<CountriesGetPayload<T> | null, null>

    /**
     * Find one Countries that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CountriesFindUniqueOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CountriesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CountriesFindUniqueOrThrowArgs>
    ): Prisma__CountriesClient<CountriesGetPayload<T>>

    /**
     * Find the first Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindFirstArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CountriesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CountriesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Countries'> extends True ? Prisma__CountriesClient<CountriesGetPayload<T>> : Prisma__CountriesClient<CountriesGetPayload<T> | null, null>

    /**
     * Find the first Countries that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindFirstOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CountriesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CountriesFindFirstOrThrowArgs>
    ): Prisma__CountriesClient<CountriesGetPayload<T>>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.countries.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.countries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countriesWithIdOnly = await prisma.countries.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CountriesFindManyArgs>(
      args?: SelectSubset<T, CountriesFindManyArgs>
    ): Prisma.PrismaPromise<Array<CountriesGetPayload<T>>>

    /**
     * Create a Countries.
     * @param {CountriesCreateArgs} args - Arguments to create a Countries.
     * @example
     * // Create one Countries
     * const Countries = await prisma.countries.create({
     *   data: {
     *     // ... data to create a Countries
     *   }
     * })
     * 
    **/
    create<T extends CountriesCreateArgs>(
      args: SelectSubset<T, CountriesCreateArgs>
    ): Prisma__CountriesClient<CountriesGetPayload<T>>

    /**
     * Create many Countries.
     *     @param {CountriesCreateManyArgs} args - Arguments to create many Countries.
     *     @example
     *     // Create many Countries
     *     const countries = await prisma.countries.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CountriesCreateManyArgs>(
      args?: SelectSubset<T, CountriesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Countries.
     * @param {CountriesDeleteArgs} args - Arguments to delete one Countries.
     * @example
     * // Delete one Countries
     * const Countries = await prisma.countries.delete({
     *   where: {
     *     // ... filter to delete one Countries
     *   }
     * })
     * 
    **/
    delete<T extends CountriesDeleteArgs>(
      args: SelectSubset<T, CountriesDeleteArgs>
    ): Prisma__CountriesClient<CountriesGetPayload<T>>

    /**
     * Update one Countries.
     * @param {CountriesUpdateArgs} args - Arguments to update one Countries.
     * @example
     * // Update one Countries
     * const countries = await prisma.countries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CountriesUpdateArgs>(
      args: SelectSubset<T, CountriesUpdateArgs>
    ): Prisma__CountriesClient<CountriesGetPayload<T>>

    /**
     * Delete zero or more Countries.
     * @param {CountriesDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.countries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CountriesDeleteManyArgs>(
      args?: SelectSubset<T, CountriesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CountriesUpdateManyArgs>(
      args: SelectSubset<T, CountriesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Countries.
     * @param {CountriesUpsertArgs} args - Arguments to update or create a Countries.
     * @example
     * // Update or create a Countries
     * const countries = await prisma.countries.upsert({
     *   create: {
     *     // ... data to create a Countries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countries we want to update
     *   }
     * })
    **/
    upsert<T extends CountriesUpsertArgs>(
      args: SelectSubset<T, CountriesUpsertArgs>
    ): Prisma__CountriesClient<CountriesGetPayload<T>>

    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.countries.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountriesCountArgs>(
      args?: Subset<T, CountriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountriesAggregateArgs>(args: Subset<T, CountriesAggregateArgs>): Prisma.PrismaPromise<GetCountriesAggregateType<T>>

    /**
     * Group by Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountriesGroupByArgs['orderBy'] }
        : { orderBy?: CountriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Countries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CountriesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Countries base type for findUnique actions
   */
  export type CountriesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect | null
    /**
     * Filter, which Countries to fetch.
     */
    where: CountriesWhereUniqueInput
  }

  /**
   * Countries findUnique
   */
  export interface CountriesFindUniqueArgs extends CountriesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Countries findUniqueOrThrow
   */
  export type CountriesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect | null
    /**
     * Filter, which Countries to fetch.
     */
    where: CountriesWhereUniqueInput
  }


  /**
   * Countries base type for findFirst actions
   */
  export type CountriesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: Enumerable<CountriesScalarFieldEnum>
  }

  /**
   * Countries findFirst
   */
  export interface CountriesFindFirstArgs extends CountriesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Countries findFirstOrThrow
   */
  export type CountriesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: Enumerable<CountriesScalarFieldEnum>
  }


  /**
   * Countries findMany
   */
  export type CountriesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: Enumerable<CountriesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: Enumerable<CountriesScalarFieldEnum>
  }


  /**
   * Countries create
   */
  export type CountriesCreateArgs = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect | null
    /**
     * The data needed to create a Countries.
     */
    data: XOR<CountriesCreateInput, CountriesUncheckedCreateInput>
  }


  /**
   * Countries createMany
   */
  export type CountriesCreateManyArgs = {
    /**
     * The data used to create many Countries.
     */
    data: Enumerable<CountriesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Countries update
   */
  export type CountriesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect | null
    /**
     * The data needed to update a Countries.
     */
    data: XOR<CountriesUpdateInput, CountriesUncheckedUpdateInput>
    /**
     * Choose, which Countries to update.
     */
    where: CountriesWhereUniqueInput
  }


  /**
   * Countries updateMany
   */
  export type CountriesUpdateManyArgs = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountriesUpdateManyMutationInput, CountriesUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountriesWhereInput
  }


  /**
   * Countries upsert
   */
  export type CountriesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect | null
    /**
     * The filter to search for the Countries to update in case it exists.
     */
    where: CountriesWhereUniqueInput
    /**
     * In case the Countries found by the `where` argument doesn't exist, create a new Countries with this data.
     */
    create: XOR<CountriesCreateInput, CountriesUncheckedCreateInput>
    /**
     * In case the Countries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountriesUpdateInput, CountriesUncheckedUpdateInput>
  }


  /**
   * Countries delete
   */
  export type CountriesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect | null
    /**
     * Filter which Countries to delete.
     */
    where: CountriesWhereUniqueInput
  }


  /**
   * Countries deleteMany
   */
  export type CountriesDeleteManyArgs = {
    /**
     * Filter which Countries to delete
     */
    where?: CountriesWhereInput
  }


  /**
   * Countries without action
   */
  export type CountriesArgs = {
    /**
     * Select specific fields to fetch from the Countries
     */
    select?: CountriesSelect | null
  }



  /**
   * Model Events
   */


  export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  export type EventsAvgAggregateOutputType = {
    rank: number | null
  }

  export type EventsSumAggregateOutputType = {
    rank: number | null
  }

  export type EventsMinAggregateOutputType = {
    id: string | null
    name: string | null
    rank: number | null
    format: string | null
    cellName: string | null
  }

  export type EventsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    rank: number | null
    format: string | null
    cellName: string | null
  }

  export type EventsCountAggregateOutputType = {
    id: number
    name: number
    rank: number
    format: number
    cellName: number
    _all: number
  }


  export type EventsAvgAggregateInputType = {
    rank?: true
  }

  export type EventsSumAggregateInputType = {
    rank?: true
  }

  export type EventsMinAggregateInputType = {
    id?: true
    name?: true
    rank?: true
    format?: true
    cellName?: true
  }

  export type EventsMaxAggregateInputType = {
    id?: true
    name?: true
    rank?: true
    format?: true
    cellName?: true
  }

  export type EventsCountAggregateInputType = {
    id?: true
    name?: true
    rank?: true
    format?: true
    cellName?: true
    _all?: true
  }

  export type EventsAggregateArgs = {
    /**
     * Filter which Events to aggregate.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventsMaxAggregateInputType
  }

  export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
        [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvents[P]>
      : GetScalarType<T[P], AggregateEvents[P]>
  }




  export type EventsGroupByArgs = {
    where?: EventsWhereInput
    orderBy?: Enumerable<EventsOrderByWithAggregationInput>
    by: EventsScalarFieldEnum[]
    having?: EventsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventsCountAggregateInputType | true
    _avg?: EventsAvgAggregateInputType
    _sum?: EventsSumAggregateInputType
    _min?: EventsMinAggregateInputType
    _max?: EventsMaxAggregateInputType
  }


  export type EventsGroupByOutputType = {
    id: string
    name: string
    rank: number
    format: string
    cellName: string
    _count: EventsCountAggregateOutputType | null
    _avg: EventsAvgAggregateOutputType | null
    _sum: EventsSumAggregateOutputType | null
    _min: EventsMinAggregateOutputType | null
    _max: EventsMaxAggregateOutputType | null
  }

  type GetEventsGroupByPayload<T extends EventsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<EventsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventsGroupByOutputType[P]>
            : GetScalarType<T[P], EventsGroupByOutputType[P]>
        }
      >
    >


  export type EventsSelect = {
    id?: boolean
    name?: boolean
    rank?: boolean
    format?: boolean
    cellName?: boolean
  }


  export type EventsGetPayload<S extends boolean | null | undefined | EventsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Events :
    S extends undefined ? never :
    S extends { include: any } & (EventsArgs | EventsFindManyArgs)
    ? Events 
    : S extends { select: any } & (EventsArgs | EventsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Events ? Events[P] : never
  } 
      : Events


  type EventsCountArgs = 
    Omit<EventsFindManyArgs, 'select' | 'include'> & {
      select?: EventsCountAggregateInputType | true
    }

  export interface EventsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Events that matches the filter.
     * @param {EventsFindUniqueArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, EventsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Events'> extends True ? Prisma__EventsClient<EventsGetPayload<T>> : Prisma__EventsClient<EventsGetPayload<T> | null, null>

    /**
     * Find one Events that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventsFindUniqueOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, EventsFindUniqueOrThrowArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Find the first Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, EventsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Events'> extends True ? Prisma__EventsClient<EventsGetPayload<T>> : Prisma__EventsClient<EventsGetPayload<T> | null, null>

    /**
     * Find the first Events that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindFirstOrThrowArgs} args - Arguments to find a Events
     * @example
     * // Get one Events
     * const events = await prisma.events.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, EventsFindFirstOrThrowArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.events.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.events.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventsWithIdOnly = await prisma.events.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventsFindManyArgs>(
      args?: SelectSubset<T, EventsFindManyArgs>
    ): Prisma.PrismaPromise<Array<EventsGetPayload<T>>>

    /**
     * Create a Events.
     * @param {EventsCreateArgs} args - Arguments to create a Events.
     * @example
     * // Create one Events
     * const Events = await prisma.events.create({
     *   data: {
     *     // ... data to create a Events
     *   }
     * })
     * 
    **/
    create<T extends EventsCreateArgs>(
      args: SelectSubset<T, EventsCreateArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Create many Events.
     *     @param {EventsCreateManyArgs} args - Arguments to create many Events.
     *     @example
     *     // Create many Events
     *     const events = await prisma.events.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventsCreateManyArgs>(
      args?: SelectSubset<T, EventsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Events.
     * @param {EventsDeleteArgs} args - Arguments to delete one Events.
     * @example
     * // Delete one Events
     * const Events = await prisma.events.delete({
     *   where: {
     *     // ... filter to delete one Events
     *   }
     * })
     * 
    **/
    delete<T extends EventsDeleteArgs>(
      args: SelectSubset<T, EventsDeleteArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Update one Events.
     * @param {EventsUpdateArgs} args - Arguments to update one Events.
     * @example
     * // Update one Events
     * const events = await prisma.events.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventsUpdateArgs>(
      args: SelectSubset<T, EventsUpdateArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Delete zero or more Events.
     * @param {EventsDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.events.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventsDeleteManyArgs>(
      args?: SelectSubset<T, EventsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const events = await prisma.events.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventsUpdateManyArgs>(
      args: SelectSubset<T, EventsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Events.
     * @param {EventsUpsertArgs} args - Arguments to update or create a Events.
     * @example
     * // Update or create a Events
     * const events = await prisma.events.upsert({
     *   create: {
     *     // ... data to create a Events
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Events we want to update
     *   }
     * })
    **/
    upsert<T extends EventsUpsertArgs>(
      args: SelectSubset<T, EventsUpsertArgs>
    ): Prisma__EventsClient<EventsGetPayload<T>>

    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.events.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventsCountArgs>(
      args?: Subset<T, EventsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventsAggregateArgs>(args: Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>

    /**
     * Group by Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventsGroupByArgs['orderBy'] }
        : { orderBy?: EventsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Events.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__EventsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Events base type for findUnique actions
   */
  export type EventsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }

  /**
   * Events findUnique
   */
  export interface EventsFindUniqueArgs extends EventsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Events findUniqueOrThrow
   */
  export type EventsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect | null
    /**
     * Filter, which Events to fetch.
     */
    where: EventsWhereUniqueInput
  }


  /**
   * Events base type for findFirst actions
   */
  export type EventsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: Enumerable<EventsScalarFieldEnum>
  }

  /**
   * Events findFirst
   */
  export interface EventsFindFirstArgs extends EventsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Events findFirstOrThrow
   */
  export type EventsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: Enumerable<EventsScalarFieldEnum>
  }


  /**
   * Events findMany
   */
  export type EventsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: Enumerable<EventsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: Enumerable<EventsScalarFieldEnum>
  }


  /**
   * Events create
   */
  export type EventsCreateArgs = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect | null
    /**
     * The data needed to create a Events.
     */
    data: XOR<EventsCreateInput, EventsUncheckedCreateInput>
  }


  /**
   * Events createMany
   */
  export type EventsCreateManyArgs = {
    /**
     * The data used to create many Events.
     */
    data: Enumerable<EventsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Events update
   */
  export type EventsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect | null
    /**
     * The data needed to update a Events.
     */
    data: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
    /**
     * Choose, which Events to update.
     */
    where: EventsWhereUniqueInput
  }


  /**
   * Events updateMany
   */
  export type EventsUpdateManyArgs = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventsUpdateManyMutationInput, EventsUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventsWhereInput
  }


  /**
   * Events upsert
   */
  export type EventsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect | null
    /**
     * The filter to search for the Events to update in case it exists.
     */
    where: EventsWhereUniqueInput
    /**
     * In case the Events found by the `where` argument doesn't exist, create a new Events with this data.
     */
    create: XOR<EventsCreateInput, EventsUncheckedCreateInput>
    /**
     * In case the Events was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventsUpdateInput, EventsUncheckedUpdateInput>
  }


  /**
   * Events delete
   */
  export type EventsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect | null
    /**
     * Filter which Events to delete.
     */
    where: EventsWhereUniqueInput
  }


  /**
   * Events deleteMany
   */
  export type EventsDeleteManyArgs = {
    /**
     * Filter which Events to delete
     */
    where?: EventsWhereInput
  }


  /**
   * Events without action
   */
  export type EventsArgs = {
    /**
     * Select specific fields to fetch from the Events
     */
    select?: EventsSelect | null
  }



  /**
   * Model Formats
   */


  export type AggregateFormats = {
    _count: FormatsCountAggregateOutputType | null
    _avg: FormatsAvgAggregateOutputType | null
    _sum: FormatsSumAggregateOutputType | null
    _min: FormatsMinAggregateOutputType | null
    _max: FormatsMaxAggregateOutputType | null
  }

  export type FormatsAvgAggregateOutputType = {
    expected_solve_count: number | null
    trim_fastest_n: number | null
    trim_slowest_n: number | null
  }

  export type FormatsSumAggregateOutputType = {
    expected_solve_count: number | null
    trim_fastest_n: number | null
    trim_slowest_n: number | null
  }

  export type FormatsMinAggregateOutputType = {
    id: string | null
    name: string | null
    sort_by: string | null
    sort_by_second: string | null
    expected_solve_count: number | null
    trim_fastest_n: number | null
    trim_slowest_n: number | null
  }

  export type FormatsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sort_by: string | null
    sort_by_second: string | null
    expected_solve_count: number | null
    trim_fastest_n: number | null
    trim_slowest_n: number | null
  }

  export type FormatsCountAggregateOutputType = {
    id: number
    name: number
    sort_by: number
    sort_by_second: number
    expected_solve_count: number
    trim_fastest_n: number
    trim_slowest_n: number
    _all: number
  }


  export type FormatsAvgAggregateInputType = {
    expected_solve_count?: true
    trim_fastest_n?: true
    trim_slowest_n?: true
  }

  export type FormatsSumAggregateInputType = {
    expected_solve_count?: true
    trim_fastest_n?: true
    trim_slowest_n?: true
  }

  export type FormatsMinAggregateInputType = {
    id?: true
    name?: true
    sort_by?: true
    sort_by_second?: true
    expected_solve_count?: true
    trim_fastest_n?: true
    trim_slowest_n?: true
  }

  export type FormatsMaxAggregateInputType = {
    id?: true
    name?: true
    sort_by?: true
    sort_by_second?: true
    expected_solve_count?: true
    trim_fastest_n?: true
    trim_slowest_n?: true
  }

  export type FormatsCountAggregateInputType = {
    id?: true
    name?: true
    sort_by?: true
    sort_by_second?: true
    expected_solve_count?: true
    trim_fastest_n?: true
    trim_slowest_n?: true
    _all?: true
  }

  export type FormatsAggregateArgs = {
    /**
     * Filter which Formats to aggregate.
     */
    where?: FormatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: Enumerable<FormatsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FormatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Formats
    **/
    _count?: true | FormatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormatsMaxAggregateInputType
  }

  export type GetFormatsAggregateType<T extends FormatsAggregateArgs> = {
        [P in keyof T & keyof AggregateFormats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormats[P]>
      : GetScalarType<T[P], AggregateFormats[P]>
  }




  export type FormatsGroupByArgs = {
    where?: FormatsWhereInput
    orderBy?: Enumerable<FormatsOrderByWithAggregationInput>
    by: FormatsScalarFieldEnum[]
    having?: FormatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormatsCountAggregateInputType | true
    _avg?: FormatsAvgAggregateInputType
    _sum?: FormatsSumAggregateInputType
    _min?: FormatsMinAggregateInputType
    _max?: FormatsMaxAggregateInputType
  }


  export type FormatsGroupByOutputType = {
    id: string
    name: string
    sort_by: string
    sort_by_second: string
    expected_solve_count: number
    trim_fastest_n: number
    trim_slowest_n: number
    _count: FormatsCountAggregateOutputType | null
    _avg: FormatsAvgAggregateOutputType | null
    _sum: FormatsSumAggregateOutputType | null
    _min: FormatsMinAggregateOutputType | null
    _max: FormatsMaxAggregateOutputType | null
  }

  type GetFormatsGroupByPayload<T extends FormatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FormatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormatsGroupByOutputType[P]>
            : GetScalarType<T[P], FormatsGroupByOutputType[P]>
        }
      >
    >


  export type FormatsSelect = {
    id?: boolean
    name?: boolean
    sort_by?: boolean
    sort_by_second?: boolean
    expected_solve_count?: boolean
    trim_fastest_n?: boolean
    trim_slowest_n?: boolean
  }


  export type FormatsGetPayload<S extends boolean | null | undefined | FormatsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Formats :
    S extends undefined ? never :
    S extends { include: any } & (FormatsArgs | FormatsFindManyArgs)
    ? Formats 
    : S extends { select: any } & (FormatsArgs | FormatsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Formats ? Formats[P] : never
  } 
      : Formats


  type FormatsCountArgs = 
    Omit<FormatsFindManyArgs, 'select' | 'include'> & {
      select?: FormatsCountAggregateInputType | true
    }

  export interface FormatsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Formats that matches the filter.
     * @param {FormatsFindUniqueArgs} args - Arguments to find a Formats
     * @example
     * // Get one Formats
     * const formats = await prisma.formats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FormatsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FormatsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Formats'> extends True ? Prisma__FormatsClient<FormatsGetPayload<T>> : Prisma__FormatsClient<FormatsGetPayload<T> | null, null>

    /**
     * Find one Formats that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FormatsFindUniqueOrThrowArgs} args - Arguments to find a Formats
     * @example
     * // Get one Formats
     * const formats = await prisma.formats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FormatsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FormatsFindUniqueOrThrowArgs>
    ): Prisma__FormatsClient<FormatsGetPayload<T>>

    /**
     * Find the first Formats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatsFindFirstArgs} args - Arguments to find a Formats
     * @example
     * // Get one Formats
     * const formats = await prisma.formats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FormatsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FormatsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Formats'> extends True ? Prisma__FormatsClient<FormatsGetPayload<T>> : Prisma__FormatsClient<FormatsGetPayload<T> | null, null>

    /**
     * Find the first Formats that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatsFindFirstOrThrowArgs} args - Arguments to find a Formats
     * @example
     * // Get one Formats
     * const formats = await prisma.formats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FormatsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FormatsFindFirstOrThrowArgs>
    ): Prisma__FormatsClient<FormatsGetPayload<T>>

    /**
     * Find zero or more Formats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Formats
     * const formats = await prisma.formats.findMany()
     * 
     * // Get first 10 Formats
     * const formats = await prisma.formats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formatsWithIdOnly = await prisma.formats.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FormatsFindManyArgs>(
      args?: SelectSubset<T, FormatsFindManyArgs>
    ): Prisma.PrismaPromise<Array<FormatsGetPayload<T>>>

    /**
     * Create a Formats.
     * @param {FormatsCreateArgs} args - Arguments to create a Formats.
     * @example
     * // Create one Formats
     * const Formats = await prisma.formats.create({
     *   data: {
     *     // ... data to create a Formats
     *   }
     * })
     * 
    **/
    create<T extends FormatsCreateArgs>(
      args: SelectSubset<T, FormatsCreateArgs>
    ): Prisma__FormatsClient<FormatsGetPayload<T>>

    /**
     * Create many Formats.
     *     @param {FormatsCreateManyArgs} args - Arguments to create many Formats.
     *     @example
     *     // Create many Formats
     *     const formats = await prisma.formats.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FormatsCreateManyArgs>(
      args?: SelectSubset<T, FormatsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Formats.
     * @param {FormatsDeleteArgs} args - Arguments to delete one Formats.
     * @example
     * // Delete one Formats
     * const Formats = await prisma.formats.delete({
     *   where: {
     *     // ... filter to delete one Formats
     *   }
     * })
     * 
    **/
    delete<T extends FormatsDeleteArgs>(
      args: SelectSubset<T, FormatsDeleteArgs>
    ): Prisma__FormatsClient<FormatsGetPayload<T>>

    /**
     * Update one Formats.
     * @param {FormatsUpdateArgs} args - Arguments to update one Formats.
     * @example
     * // Update one Formats
     * const formats = await prisma.formats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FormatsUpdateArgs>(
      args: SelectSubset<T, FormatsUpdateArgs>
    ): Prisma__FormatsClient<FormatsGetPayload<T>>

    /**
     * Delete zero or more Formats.
     * @param {FormatsDeleteManyArgs} args - Arguments to filter Formats to delete.
     * @example
     * // Delete a few Formats
     * const { count } = await prisma.formats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FormatsDeleteManyArgs>(
      args?: SelectSubset<T, FormatsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Formats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Formats
     * const formats = await prisma.formats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FormatsUpdateManyArgs>(
      args: SelectSubset<T, FormatsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Formats.
     * @param {FormatsUpsertArgs} args - Arguments to update or create a Formats.
     * @example
     * // Update or create a Formats
     * const formats = await prisma.formats.upsert({
     *   create: {
     *     // ... data to create a Formats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Formats we want to update
     *   }
     * })
    **/
    upsert<T extends FormatsUpsertArgs>(
      args: SelectSubset<T, FormatsUpsertArgs>
    ): Prisma__FormatsClient<FormatsGetPayload<T>>

    /**
     * Count the number of Formats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatsCountArgs} args - Arguments to filter Formats to count.
     * @example
     * // Count the number of Formats
     * const count = await prisma.formats.count({
     *   where: {
     *     // ... the filter for the Formats we want to count
     *   }
     * })
    **/
    count<T extends FormatsCountArgs>(
      args?: Subset<T, FormatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Formats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormatsAggregateArgs>(args: Subset<T, FormatsAggregateArgs>): Prisma.PrismaPromise<GetFormatsAggregateType<T>>

    /**
     * Group by Formats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormatsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FormatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FormatsGroupByArgs['orderBy'] }
        : { orderBy?: FormatsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FormatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Formats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FormatsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Formats base type for findUnique actions
   */
  export type FormatsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Formats
     */
    select?: FormatsSelect | null
    /**
     * Filter, which Formats to fetch.
     */
    where: FormatsWhereUniqueInput
  }

  /**
   * Formats findUnique
   */
  export interface FormatsFindUniqueArgs extends FormatsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Formats findUniqueOrThrow
   */
  export type FormatsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Formats
     */
    select?: FormatsSelect | null
    /**
     * Filter, which Formats to fetch.
     */
    where: FormatsWhereUniqueInput
  }


  /**
   * Formats base type for findFirst actions
   */
  export type FormatsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Formats
     */
    select?: FormatsSelect | null
    /**
     * Filter, which Formats to fetch.
     */
    where?: FormatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: Enumerable<FormatsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formats.
     */
    cursor?: FormatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formats.
     */
    distinct?: Enumerable<FormatsScalarFieldEnum>
  }

  /**
   * Formats findFirst
   */
  export interface FormatsFindFirstArgs extends FormatsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Formats findFirstOrThrow
   */
  export type FormatsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Formats
     */
    select?: FormatsSelect | null
    /**
     * Filter, which Formats to fetch.
     */
    where?: FormatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: Enumerable<FormatsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Formats.
     */
    cursor?: FormatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Formats.
     */
    distinct?: Enumerable<FormatsScalarFieldEnum>
  }


  /**
   * Formats findMany
   */
  export type FormatsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Formats
     */
    select?: FormatsSelect | null
    /**
     * Filter, which Formats to fetch.
     */
    where?: FormatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Formats to fetch.
     */
    orderBy?: Enumerable<FormatsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Formats.
     */
    cursor?: FormatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Formats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Formats.
     */
    skip?: number
    distinct?: Enumerable<FormatsScalarFieldEnum>
  }


  /**
   * Formats create
   */
  export type FormatsCreateArgs = {
    /**
     * Select specific fields to fetch from the Formats
     */
    select?: FormatsSelect | null
    /**
     * The data needed to create a Formats.
     */
    data: XOR<FormatsCreateInput, FormatsUncheckedCreateInput>
  }


  /**
   * Formats createMany
   */
  export type FormatsCreateManyArgs = {
    /**
     * The data used to create many Formats.
     */
    data: Enumerable<FormatsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Formats update
   */
  export type FormatsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Formats
     */
    select?: FormatsSelect | null
    /**
     * The data needed to update a Formats.
     */
    data: XOR<FormatsUpdateInput, FormatsUncheckedUpdateInput>
    /**
     * Choose, which Formats to update.
     */
    where: FormatsWhereUniqueInput
  }


  /**
   * Formats updateMany
   */
  export type FormatsUpdateManyArgs = {
    /**
     * The data used to update Formats.
     */
    data: XOR<FormatsUpdateManyMutationInput, FormatsUncheckedUpdateManyInput>
    /**
     * Filter which Formats to update
     */
    where?: FormatsWhereInput
  }


  /**
   * Formats upsert
   */
  export type FormatsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Formats
     */
    select?: FormatsSelect | null
    /**
     * The filter to search for the Formats to update in case it exists.
     */
    where: FormatsWhereUniqueInput
    /**
     * In case the Formats found by the `where` argument doesn't exist, create a new Formats with this data.
     */
    create: XOR<FormatsCreateInput, FormatsUncheckedCreateInput>
    /**
     * In case the Formats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FormatsUpdateInput, FormatsUncheckedUpdateInput>
  }


  /**
   * Formats delete
   */
  export type FormatsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Formats
     */
    select?: FormatsSelect | null
    /**
     * Filter which Formats to delete.
     */
    where: FormatsWhereUniqueInput
  }


  /**
   * Formats deleteMany
   */
  export type FormatsDeleteManyArgs = {
    /**
     * Filter which Formats to delete
     */
    where?: FormatsWhereInput
  }


  /**
   * Formats without action
   */
  export type FormatsArgs = {
    /**
     * Select specific fields to fetch from the Formats
     */
    select?: FormatsSelect | null
  }



  /**
   * Model Person
   */


  export type AggregatePerson = {
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  export type PersonAvgAggregateOutputType = {
    subid: number | null
  }

  export type PersonSumAggregateOutputType = {
    subid: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    subid: number | null
    name: string | null
    countryId: string | null
    gender: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    subid: number | null
    name: string | null
    countryId: string | null
    gender: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    subid: number
    name: number
    countryId: number
    gender: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    subid?: true
  }

  export type PersonSumAggregateInputType = {
    subid?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    subid?: true
    name?: true
    countryId?: true
    gender?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    subid?: true
    name?: true
    countryId?: true
    gender?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    subid?: true
    name?: true
    countryId?: true
    gender?: true
    _all?: true
  }

  export type PersonAggregateArgs = {
    /**
     * Filter which Person to aggregate.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned People
    **/
    _count?: true | PersonCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PersonAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PersonSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonMaxAggregateInputType
  }

  export type GetPersonAggregateType<T extends PersonAggregateArgs> = {
        [P in keyof T & keyof AggregatePerson]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerson[P]>
      : GetScalarType<T[P], AggregatePerson[P]>
  }




  export type PersonGroupByArgs = {
    where?: PersonWhereInput
    orderBy?: Enumerable<PersonOrderByWithAggregationInput>
    by: PersonScalarFieldEnum[]
    having?: PersonScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonCountAggregateInputType | true
    _avg?: PersonAvgAggregateInputType
    _sum?: PersonSumAggregateInputType
    _min?: PersonMinAggregateInputType
    _max?: PersonMaxAggregateInputType
  }


  export type PersonGroupByOutputType = {
    id: string
    subid: number
    name: string | null
    countryId: string
    gender: string | null
    _count: PersonCountAggregateOutputType | null
    _avg: PersonAvgAggregateOutputType | null
    _sum: PersonSumAggregateOutputType | null
    _min: PersonMinAggregateOutputType | null
    _max: PersonMaxAggregateOutputType | null
  }

  type GetPersonGroupByPayload<T extends PersonGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PersonGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonGroupByOutputType[P]>
            : GetScalarType<T[P], PersonGroupByOutputType[P]>
        }
      >
    >


  export type PersonSelect = {
    id?: boolean
    subid?: boolean
    name?: boolean
    countryId?: boolean
    gender?: boolean
    Results?: boolean | Person$ResultsArgs
    RanksAverage?: boolean | Person$RanksAverageArgs
    RanksSingle?: boolean | Person$RanksSingleArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }


  export type PersonInclude = {
    Results?: boolean | Person$ResultsArgs
    RanksAverage?: boolean | Person$RanksAverageArgs
    RanksSingle?: boolean | Person$RanksSingleArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }

  export type PersonGetPayload<S extends boolean | null | undefined | PersonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Person :
    S extends undefined ? never :
    S extends { include: any } & (PersonArgs | PersonFindManyArgs)
    ? Person  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Results' ? Array < ResultsGetPayload<S['include'][P]>>  :
        P extends 'RanksAverage' ? Array < RanksAverageGetPayload<S['include'][P]>>  :
        P extends 'RanksSingle' ? Array < RanksSingleGetPayload<S['include'][P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PersonArgs | PersonFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Results' ? Array < ResultsGetPayload<S['select'][P]>>  :
        P extends 'RanksAverage' ? Array < RanksAverageGetPayload<S['select'][P]>>  :
        P extends 'RanksSingle' ? Array < RanksSingleGetPayload<S['select'][P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Person ? Person[P] : never
  } 
      : Person


  type PersonCountArgs = 
    Omit<PersonFindManyArgs, 'select' | 'include'> & {
      select?: PersonCountAggregateInputType | true
    }

  export interface PersonDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Person that matches the filter.
     * @param {PersonFindUniqueArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PersonFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PersonFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Person'> extends True ? Prisma__PersonClient<PersonGetPayload<T>> : Prisma__PersonClient<PersonGetPayload<T> | null, null>

    /**
     * Find one Person that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PersonFindUniqueOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PersonFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PersonFindUniqueOrThrowArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Find the first Person that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PersonFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PersonFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Person'> extends True ? Prisma__PersonClient<PersonGetPayload<T>> : Prisma__PersonClient<PersonGetPayload<T> | null, null>

    /**
     * Find the first Person that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindFirstOrThrowArgs} args - Arguments to find a Person
     * @example
     * // Get one Person
     * const person = await prisma.person.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PersonFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PersonFindFirstOrThrowArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Find zero or more People that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all People
     * const people = await prisma.person.findMany()
     * 
     * // Get first 10 People
     * const people = await prisma.person.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personWithIdOnly = await prisma.person.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PersonFindManyArgs>(
      args?: SelectSubset<T, PersonFindManyArgs>
    ): Prisma.PrismaPromise<Array<PersonGetPayload<T>>>

    /**
     * Create a Person.
     * @param {PersonCreateArgs} args - Arguments to create a Person.
     * @example
     * // Create one Person
     * const Person = await prisma.person.create({
     *   data: {
     *     // ... data to create a Person
     *   }
     * })
     * 
    **/
    create<T extends PersonCreateArgs>(
      args: SelectSubset<T, PersonCreateArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Create many People.
     *     @param {PersonCreateManyArgs} args - Arguments to create many People.
     *     @example
     *     // Create many People
     *     const person = await prisma.person.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PersonCreateManyArgs>(
      args?: SelectSubset<T, PersonCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Person.
     * @param {PersonDeleteArgs} args - Arguments to delete one Person.
     * @example
     * // Delete one Person
     * const Person = await prisma.person.delete({
     *   where: {
     *     // ... filter to delete one Person
     *   }
     * })
     * 
    **/
    delete<T extends PersonDeleteArgs>(
      args: SelectSubset<T, PersonDeleteArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Update one Person.
     * @param {PersonUpdateArgs} args - Arguments to update one Person.
     * @example
     * // Update one Person
     * const person = await prisma.person.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PersonUpdateArgs>(
      args: SelectSubset<T, PersonUpdateArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Delete zero or more People.
     * @param {PersonDeleteManyArgs} args - Arguments to filter People to delete.
     * @example
     * // Delete a few People
     * const { count } = await prisma.person.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PersonDeleteManyArgs>(
      args?: SelectSubset<T, PersonDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many People
     * const person = await prisma.person.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PersonUpdateManyArgs>(
      args: SelectSubset<T, PersonUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Person.
     * @param {PersonUpsertArgs} args - Arguments to update or create a Person.
     * @example
     * // Update or create a Person
     * const person = await prisma.person.upsert({
     *   create: {
     *     // ... data to create a Person
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Person we want to update
     *   }
     * })
    **/
    upsert<T extends PersonUpsertArgs>(
      args: SelectSubset<T, PersonUpsertArgs>
    ): Prisma__PersonClient<PersonGetPayload<T>>

    /**
     * Count the number of People.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonCountArgs} args - Arguments to filter People to count.
     * @example
     * // Count the number of People
     * const count = await prisma.person.count({
     *   where: {
     *     // ... the filter for the People we want to count
     *   }
     * })
    **/
    count<T extends PersonCountArgs>(
      args?: Subset<T, PersonCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonAggregateArgs>(args: Subset<T, PersonAggregateArgs>): Prisma.PrismaPromise<GetPersonAggregateType<T>>

    /**
     * Group by Person.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonGroupByArgs['orderBy'] }
        : { orderBy?: PersonGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Person.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PersonClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Results<T extends Person$ResultsArgs= {}>(args?: Subset<T, Person$ResultsArgs>): Prisma.PrismaPromise<Array<ResultsGetPayload<T>>| Null>;

    RanksAverage<T extends Person$RanksAverageArgs= {}>(args?: Subset<T, Person$RanksAverageArgs>): Prisma.PrismaPromise<Array<RanksAverageGetPayload<T>>| Null>;

    RanksSingle<T extends Person$RanksSingleArgs= {}>(args?: Subset<T, Person$RanksSingleArgs>): Prisma.PrismaPromise<Array<RanksSingleGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Person base type for findUnique actions
   */
  export type PersonFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }

  /**
   * Person findUnique
   */
  export interface PersonFindUniqueArgs extends PersonFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Person findUniqueOrThrow
   */
  export type PersonFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person base type for findFirst actions
   */
  export type PersonFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: Enumerable<PersonScalarFieldEnum>
  }

  /**
   * Person findFirst
   */
  export interface PersonFindFirstArgs extends PersonFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Person findFirstOrThrow
   */
  export type PersonFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter, which Person to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of People.
     */
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person findMany
   */
  export type PersonFindManyArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter, which People to fetch.
     */
    where?: PersonWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of People to fetch.
     */
    orderBy?: Enumerable<PersonOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing People.
     */
    cursor?: PersonWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` People from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` People.
     */
    skip?: number
    distinct?: Enumerable<PersonScalarFieldEnum>
  }


  /**
   * Person create
   */
  export type PersonCreateArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * The data needed to create a Person.
     */
    data: XOR<PersonCreateInput, PersonUncheckedCreateInput>
  }


  /**
   * Person createMany
   */
  export type PersonCreateManyArgs = {
    /**
     * The data used to create many People.
     */
    data: Enumerable<PersonCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Person update
   */
  export type PersonUpdateArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * The data needed to update a Person.
     */
    data: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
    /**
     * Choose, which Person to update.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person updateMany
   */
  export type PersonUpdateManyArgs = {
    /**
     * The data used to update People.
     */
    data: XOR<PersonUpdateManyMutationInput, PersonUncheckedUpdateManyInput>
    /**
     * Filter which People to update
     */
    where?: PersonWhereInput
  }


  /**
   * Person upsert
   */
  export type PersonUpsertArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * The filter to search for the Person to update in case it exists.
     */
    where: PersonWhereUniqueInput
    /**
     * In case the Person found by the `where` argument doesn't exist, create a new Person with this data.
     */
    create: XOR<PersonCreateInput, PersonUncheckedCreateInput>
    /**
     * In case the Person was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonUpdateInput, PersonUncheckedUpdateInput>
  }


  /**
   * Person delete
   */
  export type PersonDeleteArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
    /**
     * Filter which Person to delete.
     */
    where: PersonWhereUniqueInput
  }


  /**
   * Person deleteMany
   */
  export type PersonDeleteManyArgs = {
    /**
     * Filter which People to delete
     */
    where?: PersonWhereInput
  }


  /**
   * Person.Results
   */
  export type Person$ResultsArgs = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    where?: ResultsWhereInput
    orderBy?: Enumerable<ResultsOrderByWithRelationInput>
    cursor?: ResultsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResultsScalarFieldEnum>
  }


  /**
   * Person.RanksAverage
   */
  export type Person$RanksAverageArgs = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
    where?: RanksAverageWhereInput
    orderBy?: Enumerable<RanksAverageOrderByWithRelationInput>
    cursor?: RanksAverageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RanksAverageScalarFieldEnum>
  }


  /**
   * Person.RanksSingle
   */
  export type Person$RanksSingleArgs = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
    where?: RanksSingleWhereInput
    orderBy?: Enumerable<RanksSingleOrderByWithRelationInput>
    cursor?: RanksSingleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<RanksSingleScalarFieldEnum>
  }


  /**
   * Person without action
   */
  export type PersonArgs = {
    /**
     * Select specific fields to fetch from the Person
     */
    select?: PersonSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PersonInclude | null
  }



  /**
   * Model RanksAverage
   */


  export type AggregateRanksAverage = {
    _count: RanksAverageCountAggregateOutputType | null
    _avg: RanksAverageAvgAggregateOutputType | null
    _sum: RanksAverageSumAggregateOutputType | null
    _min: RanksAverageMinAggregateOutputType | null
    _max: RanksAverageMaxAggregateOutputType | null
  }

  export type RanksAverageAvgAggregateOutputType = {
    best: number | null
    worldRank: number | null
    continentRank: number | null
    countryRank: number | null
    personSubId: number | null
  }

  export type RanksAverageSumAggregateOutputType = {
    best: number | null
    worldRank: number | null
    continentRank: number | null
    countryRank: number | null
    personSubId: number | null
  }

  export type RanksAverageMinAggregateOutputType = {
    personId: string | null
    eventId: string | null
    best: number | null
    worldRank: number | null
    continentRank: number | null
    countryRank: number | null
    personSubId: number | null
  }

  export type RanksAverageMaxAggregateOutputType = {
    personId: string | null
    eventId: string | null
    best: number | null
    worldRank: number | null
    continentRank: number | null
    countryRank: number | null
    personSubId: number | null
  }

  export type RanksAverageCountAggregateOutputType = {
    personId: number
    eventId: number
    best: number
    worldRank: number
    continentRank: number
    countryRank: number
    personSubId: number
    _all: number
  }


  export type RanksAverageAvgAggregateInputType = {
    best?: true
    worldRank?: true
    continentRank?: true
    countryRank?: true
    personSubId?: true
  }

  export type RanksAverageSumAggregateInputType = {
    best?: true
    worldRank?: true
    continentRank?: true
    countryRank?: true
    personSubId?: true
  }

  export type RanksAverageMinAggregateInputType = {
    personId?: true
    eventId?: true
    best?: true
    worldRank?: true
    continentRank?: true
    countryRank?: true
    personSubId?: true
  }

  export type RanksAverageMaxAggregateInputType = {
    personId?: true
    eventId?: true
    best?: true
    worldRank?: true
    continentRank?: true
    countryRank?: true
    personSubId?: true
  }

  export type RanksAverageCountAggregateInputType = {
    personId?: true
    eventId?: true
    best?: true
    worldRank?: true
    continentRank?: true
    countryRank?: true
    personSubId?: true
    _all?: true
  }

  export type RanksAverageAggregateArgs = {
    /**
     * Filter which RanksAverage to aggregate.
     */
    where?: RanksAverageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RanksAverages to fetch.
     */
    orderBy?: Enumerable<RanksAverageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RanksAverageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RanksAverages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RanksAverages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RanksAverages
    **/
    _count?: true | RanksAverageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RanksAverageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RanksAverageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RanksAverageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RanksAverageMaxAggregateInputType
  }

  export type GetRanksAverageAggregateType<T extends RanksAverageAggregateArgs> = {
        [P in keyof T & keyof AggregateRanksAverage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRanksAverage[P]>
      : GetScalarType<T[P], AggregateRanksAverage[P]>
  }




  export type RanksAverageGroupByArgs = {
    where?: RanksAverageWhereInput
    orderBy?: Enumerable<RanksAverageOrderByWithAggregationInput>
    by: RanksAverageScalarFieldEnum[]
    having?: RanksAverageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RanksAverageCountAggregateInputType | true
    _avg?: RanksAverageAvgAggregateInputType
    _sum?: RanksAverageSumAggregateInputType
    _min?: RanksAverageMinAggregateInputType
    _max?: RanksAverageMaxAggregateInputType
  }


  export type RanksAverageGroupByOutputType = {
    personId: string
    eventId: string
    best: number
    worldRank: number
    continentRank: number
    countryRank: number
    personSubId: number
    _count: RanksAverageCountAggregateOutputType | null
    _avg: RanksAverageAvgAggregateOutputType | null
    _sum: RanksAverageSumAggregateOutputType | null
    _min: RanksAverageMinAggregateOutputType | null
    _max: RanksAverageMaxAggregateOutputType | null
  }

  type GetRanksAverageGroupByPayload<T extends RanksAverageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RanksAverageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RanksAverageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RanksAverageGroupByOutputType[P]>
            : GetScalarType<T[P], RanksAverageGroupByOutputType[P]>
        }
      >
    >


  export type RanksAverageSelect = {
    personId?: boolean
    eventId?: boolean
    best?: boolean
    worldRank?: boolean
    continentRank?: boolean
    countryRank?: boolean
    personSubId?: boolean
    person?: boolean | PersonArgs
  }


  export type RanksAverageInclude = {
    person?: boolean | PersonArgs
  }

  export type RanksAverageGetPayload<S extends boolean | null | undefined | RanksAverageArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RanksAverage :
    S extends undefined ? never :
    S extends { include: any } & (RanksAverageArgs | RanksAverageFindManyArgs)
    ? RanksAverage  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'person' ? PersonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RanksAverageArgs | RanksAverageFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'person' ? PersonGetPayload<S['select'][P]> :  P extends keyof RanksAverage ? RanksAverage[P] : never
  } 
      : RanksAverage


  type RanksAverageCountArgs = 
    Omit<RanksAverageFindManyArgs, 'select' | 'include'> & {
      select?: RanksAverageCountAggregateInputType | true
    }

  export interface RanksAverageDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RanksAverage that matches the filter.
     * @param {RanksAverageFindUniqueArgs} args - Arguments to find a RanksAverage
     * @example
     * // Get one RanksAverage
     * const ranksAverage = await prisma.ranksAverage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RanksAverageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RanksAverageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RanksAverage'> extends True ? Prisma__RanksAverageClient<RanksAverageGetPayload<T>> : Prisma__RanksAverageClient<RanksAverageGetPayload<T> | null, null>

    /**
     * Find one RanksAverage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RanksAverageFindUniqueOrThrowArgs} args - Arguments to find a RanksAverage
     * @example
     * // Get one RanksAverage
     * const ranksAverage = await prisma.ranksAverage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RanksAverageFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RanksAverageFindUniqueOrThrowArgs>
    ): Prisma__RanksAverageClient<RanksAverageGetPayload<T>>

    /**
     * Find the first RanksAverage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksAverageFindFirstArgs} args - Arguments to find a RanksAverage
     * @example
     * // Get one RanksAverage
     * const ranksAverage = await prisma.ranksAverage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RanksAverageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RanksAverageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RanksAverage'> extends True ? Prisma__RanksAverageClient<RanksAverageGetPayload<T>> : Prisma__RanksAverageClient<RanksAverageGetPayload<T> | null, null>

    /**
     * Find the first RanksAverage that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksAverageFindFirstOrThrowArgs} args - Arguments to find a RanksAverage
     * @example
     * // Get one RanksAverage
     * const ranksAverage = await prisma.ranksAverage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RanksAverageFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RanksAverageFindFirstOrThrowArgs>
    ): Prisma__RanksAverageClient<RanksAverageGetPayload<T>>

    /**
     * Find zero or more RanksAverages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksAverageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RanksAverages
     * const ranksAverages = await prisma.ranksAverage.findMany()
     * 
     * // Get first 10 RanksAverages
     * const ranksAverages = await prisma.ranksAverage.findMany({ take: 10 })
     * 
     * // Only select the `personId`
     * const ranksAverageWithPersonIdOnly = await prisma.ranksAverage.findMany({ select: { personId: true } })
     * 
    **/
    findMany<T extends RanksAverageFindManyArgs>(
      args?: SelectSubset<T, RanksAverageFindManyArgs>
    ): Prisma.PrismaPromise<Array<RanksAverageGetPayload<T>>>

    /**
     * Create a RanksAverage.
     * @param {RanksAverageCreateArgs} args - Arguments to create a RanksAverage.
     * @example
     * // Create one RanksAverage
     * const RanksAverage = await prisma.ranksAverage.create({
     *   data: {
     *     // ... data to create a RanksAverage
     *   }
     * })
     * 
    **/
    create<T extends RanksAverageCreateArgs>(
      args: SelectSubset<T, RanksAverageCreateArgs>
    ): Prisma__RanksAverageClient<RanksAverageGetPayload<T>>

    /**
     * Create many RanksAverages.
     *     @param {RanksAverageCreateManyArgs} args - Arguments to create many RanksAverages.
     *     @example
     *     // Create many RanksAverages
     *     const ranksAverage = await prisma.ranksAverage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RanksAverageCreateManyArgs>(
      args?: SelectSubset<T, RanksAverageCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RanksAverage.
     * @param {RanksAverageDeleteArgs} args - Arguments to delete one RanksAverage.
     * @example
     * // Delete one RanksAverage
     * const RanksAverage = await prisma.ranksAverage.delete({
     *   where: {
     *     // ... filter to delete one RanksAverage
     *   }
     * })
     * 
    **/
    delete<T extends RanksAverageDeleteArgs>(
      args: SelectSubset<T, RanksAverageDeleteArgs>
    ): Prisma__RanksAverageClient<RanksAverageGetPayload<T>>

    /**
     * Update one RanksAverage.
     * @param {RanksAverageUpdateArgs} args - Arguments to update one RanksAverage.
     * @example
     * // Update one RanksAverage
     * const ranksAverage = await prisma.ranksAverage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RanksAverageUpdateArgs>(
      args: SelectSubset<T, RanksAverageUpdateArgs>
    ): Prisma__RanksAverageClient<RanksAverageGetPayload<T>>

    /**
     * Delete zero or more RanksAverages.
     * @param {RanksAverageDeleteManyArgs} args - Arguments to filter RanksAverages to delete.
     * @example
     * // Delete a few RanksAverages
     * const { count } = await prisma.ranksAverage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RanksAverageDeleteManyArgs>(
      args?: SelectSubset<T, RanksAverageDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RanksAverages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksAverageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RanksAverages
     * const ranksAverage = await prisma.ranksAverage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RanksAverageUpdateManyArgs>(
      args: SelectSubset<T, RanksAverageUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RanksAverage.
     * @param {RanksAverageUpsertArgs} args - Arguments to update or create a RanksAverage.
     * @example
     * // Update or create a RanksAverage
     * const ranksAverage = await prisma.ranksAverage.upsert({
     *   create: {
     *     // ... data to create a RanksAverage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RanksAverage we want to update
     *   }
     * })
    **/
    upsert<T extends RanksAverageUpsertArgs>(
      args: SelectSubset<T, RanksAverageUpsertArgs>
    ): Prisma__RanksAverageClient<RanksAverageGetPayload<T>>

    /**
     * Count the number of RanksAverages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksAverageCountArgs} args - Arguments to filter RanksAverages to count.
     * @example
     * // Count the number of RanksAverages
     * const count = await prisma.ranksAverage.count({
     *   where: {
     *     // ... the filter for the RanksAverages we want to count
     *   }
     * })
    **/
    count<T extends RanksAverageCountArgs>(
      args?: Subset<T, RanksAverageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RanksAverageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RanksAverage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksAverageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RanksAverageAggregateArgs>(args: Subset<T, RanksAverageAggregateArgs>): Prisma.PrismaPromise<GetRanksAverageAggregateType<T>>

    /**
     * Group by RanksAverage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksAverageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RanksAverageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RanksAverageGroupByArgs['orderBy'] }
        : { orderBy?: RanksAverageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RanksAverageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRanksAverageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RanksAverage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RanksAverageClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RanksAverage base type for findUnique actions
   */
  export type RanksAverageFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
    /**
     * Filter, which RanksAverage to fetch.
     */
    where: RanksAverageWhereUniqueInput
  }

  /**
   * RanksAverage findUnique
   */
  export interface RanksAverageFindUniqueArgs extends RanksAverageFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RanksAverage findUniqueOrThrow
   */
  export type RanksAverageFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
    /**
     * Filter, which RanksAverage to fetch.
     */
    where: RanksAverageWhereUniqueInput
  }


  /**
   * RanksAverage base type for findFirst actions
   */
  export type RanksAverageFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
    /**
     * Filter, which RanksAverage to fetch.
     */
    where?: RanksAverageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RanksAverages to fetch.
     */
    orderBy?: Enumerable<RanksAverageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RanksAverages.
     */
    cursor?: RanksAverageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RanksAverages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RanksAverages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RanksAverages.
     */
    distinct?: Enumerable<RanksAverageScalarFieldEnum>
  }

  /**
   * RanksAverage findFirst
   */
  export interface RanksAverageFindFirstArgs extends RanksAverageFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RanksAverage findFirstOrThrow
   */
  export type RanksAverageFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
    /**
     * Filter, which RanksAverage to fetch.
     */
    where?: RanksAverageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RanksAverages to fetch.
     */
    orderBy?: Enumerable<RanksAverageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RanksAverages.
     */
    cursor?: RanksAverageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RanksAverages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RanksAverages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RanksAverages.
     */
    distinct?: Enumerable<RanksAverageScalarFieldEnum>
  }


  /**
   * RanksAverage findMany
   */
  export type RanksAverageFindManyArgs = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
    /**
     * Filter, which RanksAverages to fetch.
     */
    where?: RanksAverageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RanksAverages to fetch.
     */
    orderBy?: Enumerable<RanksAverageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RanksAverages.
     */
    cursor?: RanksAverageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RanksAverages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RanksAverages.
     */
    skip?: number
    distinct?: Enumerable<RanksAverageScalarFieldEnum>
  }


  /**
   * RanksAverage create
   */
  export type RanksAverageCreateArgs = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
    /**
     * The data needed to create a RanksAverage.
     */
    data: XOR<RanksAverageCreateInput, RanksAverageUncheckedCreateInput>
  }


  /**
   * RanksAverage createMany
   */
  export type RanksAverageCreateManyArgs = {
    /**
     * The data used to create many RanksAverages.
     */
    data: Enumerable<RanksAverageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RanksAverage update
   */
  export type RanksAverageUpdateArgs = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
    /**
     * The data needed to update a RanksAverage.
     */
    data: XOR<RanksAverageUpdateInput, RanksAverageUncheckedUpdateInput>
    /**
     * Choose, which RanksAverage to update.
     */
    where: RanksAverageWhereUniqueInput
  }


  /**
   * RanksAverage updateMany
   */
  export type RanksAverageUpdateManyArgs = {
    /**
     * The data used to update RanksAverages.
     */
    data: XOR<RanksAverageUpdateManyMutationInput, RanksAverageUncheckedUpdateManyInput>
    /**
     * Filter which RanksAverages to update
     */
    where?: RanksAverageWhereInput
  }


  /**
   * RanksAverage upsert
   */
  export type RanksAverageUpsertArgs = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
    /**
     * The filter to search for the RanksAverage to update in case it exists.
     */
    where: RanksAverageWhereUniqueInput
    /**
     * In case the RanksAverage found by the `where` argument doesn't exist, create a new RanksAverage with this data.
     */
    create: XOR<RanksAverageCreateInput, RanksAverageUncheckedCreateInput>
    /**
     * In case the RanksAverage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RanksAverageUpdateInput, RanksAverageUncheckedUpdateInput>
  }


  /**
   * RanksAverage delete
   */
  export type RanksAverageDeleteArgs = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
    /**
     * Filter which RanksAverage to delete.
     */
    where: RanksAverageWhereUniqueInput
  }


  /**
   * RanksAverage deleteMany
   */
  export type RanksAverageDeleteManyArgs = {
    /**
     * Filter which RanksAverages to delete
     */
    where?: RanksAverageWhereInput
  }


  /**
   * RanksAverage without action
   */
  export type RanksAverageArgs = {
    /**
     * Select specific fields to fetch from the RanksAverage
     */
    select?: RanksAverageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksAverageInclude | null
  }



  /**
   * Model RanksSingle
   */


  export type AggregateRanksSingle = {
    _count: RanksSingleCountAggregateOutputType | null
    _avg: RanksSingleAvgAggregateOutputType | null
    _sum: RanksSingleSumAggregateOutputType | null
    _min: RanksSingleMinAggregateOutputType | null
    _max: RanksSingleMaxAggregateOutputType | null
  }

  export type RanksSingleAvgAggregateOutputType = {
    best: number | null
    worldRank: number | null
    continentRank: number | null
    countryRank: number | null
    personSubId: number | null
  }

  export type RanksSingleSumAggregateOutputType = {
    best: number | null
    worldRank: number | null
    continentRank: number | null
    countryRank: number | null
    personSubId: number | null
  }

  export type RanksSingleMinAggregateOutputType = {
    personId: string | null
    eventId: string | null
    best: number | null
    worldRank: number | null
    continentRank: number | null
    countryRank: number | null
    personSubId: number | null
  }

  export type RanksSingleMaxAggregateOutputType = {
    personId: string | null
    eventId: string | null
    best: number | null
    worldRank: number | null
    continentRank: number | null
    countryRank: number | null
    personSubId: number | null
  }

  export type RanksSingleCountAggregateOutputType = {
    personId: number
    eventId: number
    best: number
    worldRank: number
    continentRank: number
    countryRank: number
    personSubId: number
    _all: number
  }


  export type RanksSingleAvgAggregateInputType = {
    best?: true
    worldRank?: true
    continentRank?: true
    countryRank?: true
    personSubId?: true
  }

  export type RanksSingleSumAggregateInputType = {
    best?: true
    worldRank?: true
    continentRank?: true
    countryRank?: true
    personSubId?: true
  }

  export type RanksSingleMinAggregateInputType = {
    personId?: true
    eventId?: true
    best?: true
    worldRank?: true
    continentRank?: true
    countryRank?: true
    personSubId?: true
  }

  export type RanksSingleMaxAggregateInputType = {
    personId?: true
    eventId?: true
    best?: true
    worldRank?: true
    continentRank?: true
    countryRank?: true
    personSubId?: true
  }

  export type RanksSingleCountAggregateInputType = {
    personId?: true
    eventId?: true
    best?: true
    worldRank?: true
    continentRank?: true
    countryRank?: true
    personSubId?: true
    _all?: true
  }

  export type RanksSingleAggregateArgs = {
    /**
     * Filter which RanksSingle to aggregate.
     */
    where?: RanksSingleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RanksSingles to fetch.
     */
    orderBy?: Enumerable<RanksSingleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RanksSingleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RanksSingles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RanksSingles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RanksSingles
    **/
    _count?: true | RanksSingleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RanksSingleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RanksSingleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RanksSingleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RanksSingleMaxAggregateInputType
  }

  export type GetRanksSingleAggregateType<T extends RanksSingleAggregateArgs> = {
        [P in keyof T & keyof AggregateRanksSingle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRanksSingle[P]>
      : GetScalarType<T[P], AggregateRanksSingle[P]>
  }




  export type RanksSingleGroupByArgs = {
    where?: RanksSingleWhereInput
    orderBy?: Enumerable<RanksSingleOrderByWithAggregationInput>
    by: RanksSingleScalarFieldEnum[]
    having?: RanksSingleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RanksSingleCountAggregateInputType | true
    _avg?: RanksSingleAvgAggregateInputType
    _sum?: RanksSingleSumAggregateInputType
    _min?: RanksSingleMinAggregateInputType
    _max?: RanksSingleMaxAggregateInputType
  }


  export type RanksSingleGroupByOutputType = {
    personId: string
    eventId: string
    best: number
    worldRank: number
    continentRank: number
    countryRank: number
    personSubId: number
    _count: RanksSingleCountAggregateOutputType | null
    _avg: RanksSingleAvgAggregateOutputType | null
    _sum: RanksSingleSumAggregateOutputType | null
    _min: RanksSingleMinAggregateOutputType | null
    _max: RanksSingleMaxAggregateOutputType | null
  }

  type GetRanksSingleGroupByPayload<T extends RanksSingleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RanksSingleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RanksSingleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RanksSingleGroupByOutputType[P]>
            : GetScalarType<T[P], RanksSingleGroupByOutputType[P]>
        }
      >
    >


  export type RanksSingleSelect = {
    personId?: boolean
    eventId?: boolean
    best?: boolean
    worldRank?: boolean
    continentRank?: boolean
    countryRank?: boolean
    personSubId?: boolean
    person?: boolean | PersonArgs
  }


  export type RanksSingleInclude = {
    person?: boolean | PersonArgs
  }

  export type RanksSingleGetPayload<S extends boolean | null | undefined | RanksSingleArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RanksSingle :
    S extends undefined ? never :
    S extends { include: any } & (RanksSingleArgs | RanksSingleFindManyArgs)
    ? RanksSingle  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'person' ? PersonGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (RanksSingleArgs | RanksSingleFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'person' ? PersonGetPayload<S['select'][P]> :  P extends keyof RanksSingle ? RanksSingle[P] : never
  } 
      : RanksSingle


  type RanksSingleCountArgs = 
    Omit<RanksSingleFindManyArgs, 'select' | 'include'> & {
      select?: RanksSingleCountAggregateInputType | true
    }

  export interface RanksSingleDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RanksSingle that matches the filter.
     * @param {RanksSingleFindUniqueArgs} args - Arguments to find a RanksSingle
     * @example
     * // Get one RanksSingle
     * const ranksSingle = await prisma.ranksSingle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RanksSingleFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RanksSingleFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RanksSingle'> extends True ? Prisma__RanksSingleClient<RanksSingleGetPayload<T>> : Prisma__RanksSingleClient<RanksSingleGetPayload<T> | null, null>

    /**
     * Find one RanksSingle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RanksSingleFindUniqueOrThrowArgs} args - Arguments to find a RanksSingle
     * @example
     * // Get one RanksSingle
     * const ranksSingle = await prisma.ranksSingle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RanksSingleFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RanksSingleFindUniqueOrThrowArgs>
    ): Prisma__RanksSingleClient<RanksSingleGetPayload<T>>

    /**
     * Find the first RanksSingle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksSingleFindFirstArgs} args - Arguments to find a RanksSingle
     * @example
     * // Get one RanksSingle
     * const ranksSingle = await prisma.ranksSingle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RanksSingleFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RanksSingleFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RanksSingle'> extends True ? Prisma__RanksSingleClient<RanksSingleGetPayload<T>> : Prisma__RanksSingleClient<RanksSingleGetPayload<T> | null, null>

    /**
     * Find the first RanksSingle that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksSingleFindFirstOrThrowArgs} args - Arguments to find a RanksSingle
     * @example
     * // Get one RanksSingle
     * const ranksSingle = await prisma.ranksSingle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RanksSingleFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RanksSingleFindFirstOrThrowArgs>
    ): Prisma__RanksSingleClient<RanksSingleGetPayload<T>>

    /**
     * Find zero or more RanksSingles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksSingleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RanksSingles
     * const ranksSingles = await prisma.ranksSingle.findMany()
     * 
     * // Get first 10 RanksSingles
     * const ranksSingles = await prisma.ranksSingle.findMany({ take: 10 })
     * 
     * // Only select the `personId`
     * const ranksSingleWithPersonIdOnly = await prisma.ranksSingle.findMany({ select: { personId: true } })
     * 
    **/
    findMany<T extends RanksSingleFindManyArgs>(
      args?: SelectSubset<T, RanksSingleFindManyArgs>
    ): Prisma.PrismaPromise<Array<RanksSingleGetPayload<T>>>

    /**
     * Create a RanksSingle.
     * @param {RanksSingleCreateArgs} args - Arguments to create a RanksSingle.
     * @example
     * // Create one RanksSingle
     * const RanksSingle = await prisma.ranksSingle.create({
     *   data: {
     *     // ... data to create a RanksSingle
     *   }
     * })
     * 
    **/
    create<T extends RanksSingleCreateArgs>(
      args: SelectSubset<T, RanksSingleCreateArgs>
    ): Prisma__RanksSingleClient<RanksSingleGetPayload<T>>

    /**
     * Create many RanksSingles.
     *     @param {RanksSingleCreateManyArgs} args - Arguments to create many RanksSingles.
     *     @example
     *     // Create many RanksSingles
     *     const ranksSingle = await prisma.ranksSingle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RanksSingleCreateManyArgs>(
      args?: SelectSubset<T, RanksSingleCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RanksSingle.
     * @param {RanksSingleDeleteArgs} args - Arguments to delete one RanksSingle.
     * @example
     * // Delete one RanksSingle
     * const RanksSingle = await prisma.ranksSingle.delete({
     *   where: {
     *     // ... filter to delete one RanksSingle
     *   }
     * })
     * 
    **/
    delete<T extends RanksSingleDeleteArgs>(
      args: SelectSubset<T, RanksSingleDeleteArgs>
    ): Prisma__RanksSingleClient<RanksSingleGetPayload<T>>

    /**
     * Update one RanksSingle.
     * @param {RanksSingleUpdateArgs} args - Arguments to update one RanksSingle.
     * @example
     * // Update one RanksSingle
     * const ranksSingle = await prisma.ranksSingle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RanksSingleUpdateArgs>(
      args: SelectSubset<T, RanksSingleUpdateArgs>
    ): Prisma__RanksSingleClient<RanksSingleGetPayload<T>>

    /**
     * Delete zero or more RanksSingles.
     * @param {RanksSingleDeleteManyArgs} args - Arguments to filter RanksSingles to delete.
     * @example
     * // Delete a few RanksSingles
     * const { count } = await prisma.ranksSingle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RanksSingleDeleteManyArgs>(
      args?: SelectSubset<T, RanksSingleDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RanksSingles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksSingleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RanksSingles
     * const ranksSingle = await prisma.ranksSingle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RanksSingleUpdateManyArgs>(
      args: SelectSubset<T, RanksSingleUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RanksSingle.
     * @param {RanksSingleUpsertArgs} args - Arguments to update or create a RanksSingle.
     * @example
     * // Update or create a RanksSingle
     * const ranksSingle = await prisma.ranksSingle.upsert({
     *   create: {
     *     // ... data to create a RanksSingle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RanksSingle we want to update
     *   }
     * })
    **/
    upsert<T extends RanksSingleUpsertArgs>(
      args: SelectSubset<T, RanksSingleUpsertArgs>
    ): Prisma__RanksSingleClient<RanksSingleGetPayload<T>>

    /**
     * Count the number of RanksSingles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksSingleCountArgs} args - Arguments to filter RanksSingles to count.
     * @example
     * // Count the number of RanksSingles
     * const count = await prisma.ranksSingle.count({
     *   where: {
     *     // ... the filter for the RanksSingles we want to count
     *   }
     * })
    **/
    count<T extends RanksSingleCountArgs>(
      args?: Subset<T, RanksSingleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RanksSingleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RanksSingle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksSingleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RanksSingleAggregateArgs>(args: Subset<T, RanksSingleAggregateArgs>): Prisma.PrismaPromise<GetRanksSingleAggregateType<T>>

    /**
     * Group by RanksSingle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RanksSingleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RanksSingleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RanksSingleGroupByArgs['orderBy'] }
        : { orderBy?: RanksSingleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RanksSingleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRanksSingleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RanksSingle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RanksSingleClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    person<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RanksSingle base type for findUnique actions
   */
  export type RanksSingleFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
    /**
     * Filter, which RanksSingle to fetch.
     */
    where: RanksSingleWhereUniqueInput
  }

  /**
   * RanksSingle findUnique
   */
  export interface RanksSingleFindUniqueArgs extends RanksSingleFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RanksSingle findUniqueOrThrow
   */
  export type RanksSingleFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
    /**
     * Filter, which RanksSingle to fetch.
     */
    where: RanksSingleWhereUniqueInput
  }


  /**
   * RanksSingle base type for findFirst actions
   */
  export type RanksSingleFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
    /**
     * Filter, which RanksSingle to fetch.
     */
    where?: RanksSingleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RanksSingles to fetch.
     */
    orderBy?: Enumerable<RanksSingleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RanksSingles.
     */
    cursor?: RanksSingleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RanksSingles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RanksSingles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RanksSingles.
     */
    distinct?: Enumerable<RanksSingleScalarFieldEnum>
  }

  /**
   * RanksSingle findFirst
   */
  export interface RanksSingleFindFirstArgs extends RanksSingleFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RanksSingle findFirstOrThrow
   */
  export type RanksSingleFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
    /**
     * Filter, which RanksSingle to fetch.
     */
    where?: RanksSingleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RanksSingles to fetch.
     */
    orderBy?: Enumerable<RanksSingleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RanksSingles.
     */
    cursor?: RanksSingleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RanksSingles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RanksSingles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RanksSingles.
     */
    distinct?: Enumerable<RanksSingleScalarFieldEnum>
  }


  /**
   * RanksSingle findMany
   */
  export type RanksSingleFindManyArgs = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
    /**
     * Filter, which RanksSingles to fetch.
     */
    where?: RanksSingleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RanksSingles to fetch.
     */
    orderBy?: Enumerable<RanksSingleOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RanksSingles.
     */
    cursor?: RanksSingleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RanksSingles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RanksSingles.
     */
    skip?: number
    distinct?: Enumerable<RanksSingleScalarFieldEnum>
  }


  /**
   * RanksSingle create
   */
  export type RanksSingleCreateArgs = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
    /**
     * The data needed to create a RanksSingle.
     */
    data: XOR<RanksSingleCreateInput, RanksSingleUncheckedCreateInput>
  }


  /**
   * RanksSingle createMany
   */
  export type RanksSingleCreateManyArgs = {
    /**
     * The data used to create many RanksSingles.
     */
    data: Enumerable<RanksSingleCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RanksSingle update
   */
  export type RanksSingleUpdateArgs = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
    /**
     * The data needed to update a RanksSingle.
     */
    data: XOR<RanksSingleUpdateInput, RanksSingleUncheckedUpdateInput>
    /**
     * Choose, which RanksSingle to update.
     */
    where: RanksSingleWhereUniqueInput
  }


  /**
   * RanksSingle updateMany
   */
  export type RanksSingleUpdateManyArgs = {
    /**
     * The data used to update RanksSingles.
     */
    data: XOR<RanksSingleUpdateManyMutationInput, RanksSingleUncheckedUpdateManyInput>
    /**
     * Filter which RanksSingles to update
     */
    where?: RanksSingleWhereInput
  }


  /**
   * RanksSingle upsert
   */
  export type RanksSingleUpsertArgs = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
    /**
     * The filter to search for the RanksSingle to update in case it exists.
     */
    where: RanksSingleWhereUniqueInput
    /**
     * In case the RanksSingle found by the `where` argument doesn't exist, create a new RanksSingle with this data.
     */
    create: XOR<RanksSingleCreateInput, RanksSingleUncheckedCreateInput>
    /**
     * In case the RanksSingle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RanksSingleUpdateInput, RanksSingleUncheckedUpdateInput>
  }


  /**
   * RanksSingle delete
   */
  export type RanksSingleDeleteArgs = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
    /**
     * Filter which RanksSingle to delete.
     */
    where: RanksSingleWhereUniqueInput
  }


  /**
   * RanksSingle deleteMany
   */
  export type RanksSingleDeleteManyArgs = {
    /**
     * Filter which RanksSingles to delete
     */
    where?: RanksSingleWhereInput
  }


  /**
   * RanksSingle without action
   */
  export type RanksSingleArgs = {
    /**
     * Select specific fields to fetch from the RanksSingle
     */
    select?: RanksSingleSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RanksSingleInclude | null
  }



  /**
   * Model Results
   */


  export type AggregateResults = {
    _count: ResultsCountAggregateOutputType | null
    _avg: ResultsAvgAggregateOutputType | null
    _sum: ResultsSumAggregateOutputType | null
    _min: ResultsMinAggregateOutputType | null
    _max: ResultsMaxAggregateOutputType | null
  }

  export type ResultsAvgAggregateOutputType = {
    pos: number | null
    best: number | null
    average: number | null
    value1: number | null
    value2: number | null
    value3: number | null
    value4: number | null
    value5: number | null
    personsSubid: number | null
  }

  export type ResultsSumAggregateOutputType = {
    pos: number | null
    best: number | null
    average: number | null
    value1: number | null
    value2: number | null
    value3: number | null
    value4: number | null
    value5: number | null
    personsSubid: number | null
  }

  export type ResultsMinAggregateOutputType = {
    competitionId: string | null
    eventId: string | null
    roundTypeId: string | null
    pos: number | null
    best: number | null
    average: number | null
    personName: string | null
    personId: string | null
    personCountryId: string | null
    formatId: string | null
    value1: number | null
    value2: number | null
    value3: number | null
    value4: number | null
    value5: number | null
    regionalSingleRecord: string | null
    regionalAverageRecord: string | null
    personsSubid: number | null
  }

  export type ResultsMaxAggregateOutputType = {
    competitionId: string | null
    eventId: string | null
    roundTypeId: string | null
    pos: number | null
    best: number | null
    average: number | null
    personName: string | null
    personId: string | null
    personCountryId: string | null
    formatId: string | null
    value1: number | null
    value2: number | null
    value3: number | null
    value4: number | null
    value5: number | null
    regionalSingleRecord: string | null
    regionalAverageRecord: string | null
    personsSubid: number | null
  }

  export type ResultsCountAggregateOutputType = {
    competitionId: number
    eventId: number
    roundTypeId: number
    pos: number
    best: number
    average: number
    personName: number
    personId: number
    personCountryId: number
    formatId: number
    value1: number
    value2: number
    value3: number
    value4: number
    value5: number
    regionalSingleRecord: number
    regionalAverageRecord: number
    personsSubid: number
    _all: number
  }


  export type ResultsAvgAggregateInputType = {
    pos?: true
    best?: true
    average?: true
    value1?: true
    value2?: true
    value3?: true
    value4?: true
    value5?: true
    personsSubid?: true
  }

  export type ResultsSumAggregateInputType = {
    pos?: true
    best?: true
    average?: true
    value1?: true
    value2?: true
    value3?: true
    value4?: true
    value5?: true
    personsSubid?: true
  }

  export type ResultsMinAggregateInputType = {
    competitionId?: true
    eventId?: true
    roundTypeId?: true
    pos?: true
    best?: true
    average?: true
    personName?: true
    personId?: true
    personCountryId?: true
    formatId?: true
    value1?: true
    value2?: true
    value3?: true
    value4?: true
    value5?: true
    regionalSingleRecord?: true
    regionalAverageRecord?: true
    personsSubid?: true
  }

  export type ResultsMaxAggregateInputType = {
    competitionId?: true
    eventId?: true
    roundTypeId?: true
    pos?: true
    best?: true
    average?: true
    personName?: true
    personId?: true
    personCountryId?: true
    formatId?: true
    value1?: true
    value2?: true
    value3?: true
    value4?: true
    value5?: true
    regionalSingleRecord?: true
    regionalAverageRecord?: true
    personsSubid?: true
  }

  export type ResultsCountAggregateInputType = {
    competitionId?: true
    eventId?: true
    roundTypeId?: true
    pos?: true
    best?: true
    average?: true
    personName?: true
    personId?: true
    personCountryId?: true
    formatId?: true
    value1?: true
    value2?: true
    value3?: true
    value4?: true
    value5?: true
    regionalSingleRecord?: true
    regionalAverageRecord?: true
    personsSubid?: true
    _all?: true
  }

  export type ResultsAggregateArgs = {
    /**
     * Filter which Results to aggregate.
     */
    where?: ResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: Enumerable<ResultsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultsMaxAggregateInputType
  }

  export type GetResultsAggregateType<T extends ResultsAggregateArgs> = {
        [P in keyof T & keyof AggregateResults]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResults[P]>
      : GetScalarType<T[P], AggregateResults[P]>
  }




  export type ResultsGroupByArgs = {
    where?: ResultsWhereInput
    orderBy?: Enumerable<ResultsOrderByWithAggregationInput>
    by: ResultsScalarFieldEnum[]
    having?: ResultsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultsCountAggregateInputType | true
    _avg?: ResultsAvgAggregateInputType
    _sum?: ResultsSumAggregateInputType
    _min?: ResultsMinAggregateInputType
    _max?: ResultsMaxAggregateInputType
  }


  export type ResultsGroupByOutputType = {
    competitionId: string
    eventId: string
    roundTypeId: string
    pos: number
    best: number
    average: number
    personName: string | null
    personId: string
    personCountryId: string | null
    formatId: string
    value1: number
    value2: number
    value3: number
    value4: number
    value5: number
    regionalSingleRecord: string | null
    regionalAverageRecord: string | null
    personsSubid: number
    _count: ResultsCountAggregateOutputType | null
    _avg: ResultsAvgAggregateOutputType | null
    _sum: ResultsSumAggregateOutputType | null
    _min: ResultsMinAggregateOutputType | null
    _max: ResultsMaxAggregateOutputType | null
  }

  type GetResultsGroupByPayload<T extends ResultsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ResultsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultsGroupByOutputType[P]>
            : GetScalarType<T[P], ResultsGroupByOutputType[P]>
        }
      >
    >


  export type ResultsSelect = {
    competitionId?: boolean
    eventId?: boolean
    roundTypeId?: boolean
    pos?: boolean
    best?: boolean
    average?: boolean
    personName?: boolean
    personId?: boolean
    personCountryId?: boolean
    formatId?: boolean
    value1?: boolean
    value2?: boolean
    value3?: boolean
    value4?: boolean
    value5?: boolean
    regionalSingleRecord?: boolean
    regionalAverageRecord?: boolean
    personsSubid?: boolean
    results?: boolean | PersonArgs
    competition?: boolean | CompetitionArgs
  }


  export type ResultsInclude = {
    results?: boolean | PersonArgs
    competition?: boolean | CompetitionArgs
  }

  export type ResultsGetPayload<S extends boolean | null | undefined | ResultsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Results :
    S extends undefined ? never :
    S extends { include: any } & (ResultsArgs | ResultsFindManyArgs)
    ? Results  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'results' ? PersonGetPayload<S['include'][P]> :
        P extends 'competition' ? CompetitionGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ResultsArgs | ResultsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'results' ? PersonGetPayload<S['select'][P]> :
        P extends 'competition' ? CompetitionGetPayload<S['select'][P]> :  P extends keyof Results ? Results[P] : never
  } 
      : Results


  type ResultsCountArgs = 
    Omit<ResultsFindManyArgs, 'select' | 'include'> & {
      select?: ResultsCountAggregateInputType | true
    }

  export interface ResultsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Results that matches the filter.
     * @param {ResultsFindUniqueArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResultsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ResultsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Results'> extends True ? Prisma__ResultsClient<ResultsGetPayload<T>> : Prisma__ResultsClient<ResultsGetPayload<T> | null, null>

    /**
     * Find one Results that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResultsFindUniqueOrThrowArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResultsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ResultsFindUniqueOrThrowArgs>
    ): Prisma__ResultsClient<ResultsGetPayload<T>>

    /**
     * Find the first Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultsFindFirstArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResultsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ResultsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Results'> extends True ? Prisma__ResultsClient<ResultsGetPayload<T>> : Prisma__ResultsClient<ResultsGetPayload<T> | null, null>

    /**
     * Find the first Results that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultsFindFirstOrThrowArgs} args - Arguments to find a Results
     * @example
     * // Get one Results
     * const results = await prisma.results.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResultsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ResultsFindFirstOrThrowArgs>
    ): Prisma__ResultsClient<ResultsGetPayload<T>>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.results.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.results.findMany({ take: 10 })
     * 
     * // Only select the `competitionId`
     * const resultsWithCompetitionIdOnly = await prisma.results.findMany({ select: { competitionId: true } })
     * 
    **/
    findMany<T extends ResultsFindManyArgs>(
      args?: SelectSubset<T, ResultsFindManyArgs>
    ): Prisma.PrismaPromise<Array<ResultsGetPayload<T>>>

    /**
     * Create a Results.
     * @param {ResultsCreateArgs} args - Arguments to create a Results.
     * @example
     * // Create one Results
     * const Results = await prisma.results.create({
     *   data: {
     *     // ... data to create a Results
     *   }
     * })
     * 
    **/
    create<T extends ResultsCreateArgs>(
      args: SelectSubset<T, ResultsCreateArgs>
    ): Prisma__ResultsClient<ResultsGetPayload<T>>

    /**
     * Create many Results.
     *     @param {ResultsCreateManyArgs} args - Arguments to create many Results.
     *     @example
     *     // Create many Results
     *     const results = await prisma.results.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResultsCreateManyArgs>(
      args?: SelectSubset<T, ResultsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Results.
     * @param {ResultsDeleteArgs} args - Arguments to delete one Results.
     * @example
     * // Delete one Results
     * const Results = await prisma.results.delete({
     *   where: {
     *     // ... filter to delete one Results
     *   }
     * })
     * 
    **/
    delete<T extends ResultsDeleteArgs>(
      args: SelectSubset<T, ResultsDeleteArgs>
    ): Prisma__ResultsClient<ResultsGetPayload<T>>

    /**
     * Update one Results.
     * @param {ResultsUpdateArgs} args - Arguments to update one Results.
     * @example
     * // Update one Results
     * const results = await prisma.results.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResultsUpdateArgs>(
      args: SelectSubset<T, ResultsUpdateArgs>
    ): Prisma__ResultsClient<ResultsGetPayload<T>>

    /**
     * Delete zero or more Results.
     * @param {ResultsDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.results.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResultsDeleteManyArgs>(
      args?: SelectSubset<T, ResultsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const results = await prisma.results.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResultsUpdateManyArgs>(
      args: SelectSubset<T, ResultsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Results.
     * @param {ResultsUpsertArgs} args - Arguments to update or create a Results.
     * @example
     * // Update or create a Results
     * const results = await prisma.results.upsert({
     *   create: {
     *     // ... data to create a Results
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Results we want to update
     *   }
     * })
    **/
    upsert<T extends ResultsUpsertArgs>(
      args: SelectSubset<T, ResultsUpsertArgs>
    ): Prisma__ResultsClient<ResultsGetPayload<T>>

    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultsCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.results.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultsCountArgs>(
      args?: Subset<T, ResultsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultsAggregateArgs>(args: Subset<T, ResultsAggregateArgs>): Prisma.PrismaPromise<GetResultsAggregateType<T>>

    /**
     * Group by Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultsGroupByArgs['orderBy'] }
        : { orderBy?: ResultsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Results.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ResultsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    results<T extends PersonArgs= {}>(args?: Subset<T, PersonArgs>): Prisma__PersonClient<PersonGetPayload<T> | Null>;

    competition<T extends CompetitionArgs= {}>(args?: Subset<T, CompetitionArgs>): Prisma__CompetitionClient<CompetitionGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Results base type for findUnique actions
   */
  export type ResultsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    /**
     * Filter, which Results to fetch.
     */
    where: ResultsWhereUniqueInput
  }

  /**
   * Results findUnique
   */
  export interface ResultsFindUniqueArgs extends ResultsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Results findUniqueOrThrow
   */
  export type ResultsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    /**
     * Filter, which Results to fetch.
     */
    where: ResultsWhereUniqueInput
  }


  /**
   * Results base type for findFirst actions
   */
  export type ResultsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: Enumerable<ResultsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: Enumerable<ResultsScalarFieldEnum>
  }

  /**
   * Results findFirst
   */
  export interface ResultsFindFirstArgs extends ResultsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Results findFirstOrThrow
   */
  export type ResultsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: Enumerable<ResultsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: Enumerable<ResultsScalarFieldEnum>
  }


  /**
   * Results findMany
   */
  export type ResultsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: Enumerable<ResultsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: Enumerable<ResultsScalarFieldEnum>
  }


  /**
   * Results create
   */
  export type ResultsCreateArgs = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    /**
     * The data needed to create a Results.
     */
    data: XOR<ResultsCreateInput, ResultsUncheckedCreateInput>
  }


  /**
   * Results createMany
   */
  export type ResultsCreateManyArgs = {
    /**
     * The data used to create many Results.
     */
    data: Enumerable<ResultsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Results update
   */
  export type ResultsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    /**
     * The data needed to update a Results.
     */
    data: XOR<ResultsUpdateInput, ResultsUncheckedUpdateInput>
    /**
     * Choose, which Results to update.
     */
    where: ResultsWhereUniqueInput
  }


  /**
   * Results updateMany
   */
  export type ResultsUpdateManyArgs = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultsUpdateManyMutationInput, ResultsUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultsWhereInput
  }


  /**
   * Results upsert
   */
  export type ResultsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    /**
     * The filter to search for the Results to update in case it exists.
     */
    where: ResultsWhereUniqueInput
    /**
     * In case the Results found by the `where` argument doesn't exist, create a new Results with this data.
     */
    create: XOR<ResultsCreateInput, ResultsUncheckedCreateInput>
    /**
     * In case the Results was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultsUpdateInput, ResultsUncheckedUpdateInput>
  }


  /**
   * Results delete
   */
  export type ResultsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
    /**
     * Filter which Results to delete.
     */
    where: ResultsWhereUniqueInput
  }


  /**
   * Results deleteMany
   */
  export type ResultsDeleteManyArgs = {
    /**
     * Filter which Results to delete
     */
    where?: ResultsWhereInput
  }


  /**
   * Results without action
   */
  export type ResultsArgs = {
    /**
     * Select specific fields to fetch from the Results
     */
    select?: ResultsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultsInclude | null
  }



  /**
   * Model RoundTypes
   */


  export type AggregateRoundTypes = {
    _count: RoundTypesCountAggregateOutputType | null
    _avg: RoundTypesAvgAggregateOutputType | null
    _sum: RoundTypesSumAggregateOutputType | null
    _min: RoundTypesMinAggregateOutputType | null
    _max: RoundTypesMaxAggregateOutputType | null
  }

  export type RoundTypesAvgAggregateOutputType = {
    rank: number | null
  }

  export type RoundTypesSumAggregateOutputType = {
    rank: number | null
  }

  export type RoundTypesMinAggregateOutputType = {
    id: string | null
    rank: number | null
    name: string | null
    cellName: string | null
    final: boolean | null
  }

  export type RoundTypesMaxAggregateOutputType = {
    id: string | null
    rank: number | null
    name: string | null
    cellName: string | null
    final: boolean | null
  }

  export type RoundTypesCountAggregateOutputType = {
    id: number
    rank: number
    name: number
    cellName: number
    final: number
    _all: number
  }


  export type RoundTypesAvgAggregateInputType = {
    rank?: true
  }

  export type RoundTypesSumAggregateInputType = {
    rank?: true
  }

  export type RoundTypesMinAggregateInputType = {
    id?: true
    rank?: true
    name?: true
    cellName?: true
    final?: true
  }

  export type RoundTypesMaxAggregateInputType = {
    id?: true
    rank?: true
    name?: true
    cellName?: true
    final?: true
  }

  export type RoundTypesCountAggregateInputType = {
    id?: true
    rank?: true
    name?: true
    cellName?: true
    final?: true
    _all?: true
  }

  export type RoundTypesAggregateArgs = {
    /**
     * Filter which RoundTypes to aggregate.
     */
    where?: RoundTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundTypes to fetch.
     */
    orderBy?: Enumerable<RoundTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RoundTypes
    **/
    _count?: true | RoundTypesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundTypesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundTypesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundTypesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundTypesMaxAggregateInputType
  }

  export type GetRoundTypesAggregateType<T extends RoundTypesAggregateArgs> = {
        [P in keyof T & keyof AggregateRoundTypes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoundTypes[P]>
      : GetScalarType<T[P], AggregateRoundTypes[P]>
  }




  export type RoundTypesGroupByArgs = {
    where?: RoundTypesWhereInput
    orderBy?: Enumerable<RoundTypesOrderByWithAggregationInput>
    by: RoundTypesScalarFieldEnum[]
    having?: RoundTypesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundTypesCountAggregateInputType | true
    _avg?: RoundTypesAvgAggregateInputType
    _sum?: RoundTypesSumAggregateInputType
    _min?: RoundTypesMinAggregateInputType
    _max?: RoundTypesMaxAggregateInputType
  }


  export type RoundTypesGroupByOutputType = {
    id: string
    rank: number
    name: string
    cellName: string
    final: boolean
    _count: RoundTypesCountAggregateOutputType | null
    _avg: RoundTypesAvgAggregateOutputType | null
    _sum: RoundTypesSumAggregateOutputType | null
    _min: RoundTypesMinAggregateOutputType | null
    _max: RoundTypesMaxAggregateOutputType | null
  }

  type GetRoundTypesGroupByPayload<T extends RoundTypesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<RoundTypesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundTypesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundTypesGroupByOutputType[P]>
            : GetScalarType<T[P], RoundTypesGroupByOutputType[P]>
        }
      >
    >


  export type RoundTypesSelect = {
    id?: boolean
    rank?: boolean
    name?: boolean
    cellName?: boolean
    final?: boolean
  }


  export type RoundTypesGetPayload<S extends boolean | null | undefined | RoundTypesArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? RoundTypes :
    S extends undefined ? never :
    S extends { include: any } & (RoundTypesArgs | RoundTypesFindManyArgs)
    ? RoundTypes 
    : S extends { select: any } & (RoundTypesArgs | RoundTypesFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof RoundTypes ? RoundTypes[P] : never
  } 
      : RoundTypes


  type RoundTypesCountArgs = 
    Omit<RoundTypesFindManyArgs, 'select' | 'include'> & {
      select?: RoundTypesCountAggregateInputType | true
    }

  export interface RoundTypesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one RoundTypes that matches the filter.
     * @param {RoundTypesFindUniqueArgs} args - Arguments to find a RoundTypes
     * @example
     * // Get one RoundTypes
     * const roundTypes = await prisma.roundTypes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RoundTypesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, RoundTypesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'RoundTypes'> extends True ? Prisma__RoundTypesClient<RoundTypesGetPayload<T>> : Prisma__RoundTypesClient<RoundTypesGetPayload<T> | null, null>

    /**
     * Find one RoundTypes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RoundTypesFindUniqueOrThrowArgs} args - Arguments to find a RoundTypes
     * @example
     * // Get one RoundTypes
     * const roundTypes = await prisma.roundTypes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RoundTypesFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, RoundTypesFindUniqueOrThrowArgs>
    ): Prisma__RoundTypesClient<RoundTypesGetPayload<T>>

    /**
     * Find the first RoundTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundTypesFindFirstArgs} args - Arguments to find a RoundTypes
     * @example
     * // Get one RoundTypes
     * const roundTypes = await prisma.roundTypes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RoundTypesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, RoundTypesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'RoundTypes'> extends True ? Prisma__RoundTypesClient<RoundTypesGetPayload<T>> : Prisma__RoundTypesClient<RoundTypesGetPayload<T> | null, null>

    /**
     * Find the first RoundTypes that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundTypesFindFirstOrThrowArgs} args - Arguments to find a RoundTypes
     * @example
     * // Get one RoundTypes
     * const roundTypes = await prisma.roundTypes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RoundTypesFindFirstOrThrowArgs>(
      args?: SelectSubset<T, RoundTypesFindFirstOrThrowArgs>
    ): Prisma__RoundTypesClient<RoundTypesGetPayload<T>>

    /**
     * Find zero or more RoundTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundTypesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RoundTypes
     * const roundTypes = await prisma.roundTypes.findMany()
     * 
     * // Get first 10 RoundTypes
     * const roundTypes = await prisma.roundTypes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundTypesWithIdOnly = await prisma.roundTypes.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RoundTypesFindManyArgs>(
      args?: SelectSubset<T, RoundTypesFindManyArgs>
    ): Prisma.PrismaPromise<Array<RoundTypesGetPayload<T>>>

    /**
     * Create a RoundTypes.
     * @param {RoundTypesCreateArgs} args - Arguments to create a RoundTypes.
     * @example
     * // Create one RoundTypes
     * const RoundTypes = await prisma.roundTypes.create({
     *   data: {
     *     // ... data to create a RoundTypes
     *   }
     * })
     * 
    **/
    create<T extends RoundTypesCreateArgs>(
      args: SelectSubset<T, RoundTypesCreateArgs>
    ): Prisma__RoundTypesClient<RoundTypesGetPayload<T>>

    /**
     * Create many RoundTypes.
     *     @param {RoundTypesCreateManyArgs} args - Arguments to create many RoundTypes.
     *     @example
     *     // Create many RoundTypes
     *     const roundTypes = await prisma.roundTypes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RoundTypesCreateManyArgs>(
      args?: SelectSubset<T, RoundTypesCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a RoundTypes.
     * @param {RoundTypesDeleteArgs} args - Arguments to delete one RoundTypes.
     * @example
     * // Delete one RoundTypes
     * const RoundTypes = await prisma.roundTypes.delete({
     *   where: {
     *     // ... filter to delete one RoundTypes
     *   }
     * })
     * 
    **/
    delete<T extends RoundTypesDeleteArgs>(
      args: SelectSubset<T, RoundTypesDeleteArgs>
    ): Prisma__RoundTypesClient<RoundTypesGetPayload<T>>

    /**
     * Update one RoundTypes.
     * @param {RoundTypesUpdateArgs} args - Arguments to update one RoundTypes.
     * @example
     * // Update one RoundTypes
     * const roundTypes = await prisma.roundTypes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RoundTypesUpdateArgs>(
      args: SelectSubset<T, RoundTypesUpdateArgs>
    ): Prisma__RoundTypesClient<RoundTypesGetPayload<T>>

    /**
     * Delete zero or more RoundTypes.
     * @param {RoundTypesDeleteManyArgs} args - Arguments to filter RoundTypes to delete.
     * @example
     * // Delete a few RoundTypes
     * const { count } = await prisma.roundTypes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RoundTypesDeleteManyArgs>(
      args?: SelectSubset<T, RoundTypesDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RoundTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundTypesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RoundTypes
     * const roundTypes = await prisma.roundTypes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RoundTypesUpdateManyArgs>(
      args: SelectSubset<T, RoundTypesUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one RoundTypes.
     * @param {RoundTypesUpsertArgs} args - Arguments to update or create a RoundTypes.
     * @example
     * // Update or create a RoundTypes
     * const roundTypes = await prisma.roundTypes.upsert({
     *   create: {
     *     // ... data to create a RoundTypes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RoundTypes we want to update
     *   }
     * })
    **/
    upsert<T extends RoundTypesUpsertArgs>(
      args: SelectSubset<T, RoundTypesUpsertArgs>
    ): Prisma__RoundTypesClient<RoundTypesGetPayload<T>>

    /**
     * Count the number of RoundTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundTypesCountArgs} args - Arguments to filter RoundTypes to count.
     * @example
     * // Count the number of RoundTypes
     * const count = await prisma.roundTypes.count({
     *   where: {
     *     // ... the filter for the RoundTypes we want to count
     *   }
     * })
    **/
    count<T extends RoundTypesCountArgs>(
      args?: Subset<T, RoundTypesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundTypesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RoundTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundTypesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoundTypesAggregateArgs>(args: Subset<T, RoundTypesAggregateArgs>): Prisma.PrismaPromise<GetRoundTypesAggregateType<T>>

    /**
     * Group by RoundTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundTypesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoundTypesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundTypesGroupByArgs['orderBy'] }
        : { orderBy?: RoundTypesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoundTypesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundTypesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for RoundTypes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__RoundTypesClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * RoundTypes base type for findUnique actions
   */
  export type RoundTypesFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the RoundTypes
     */
    select?: RoundTypesSelect | null
    /**
     * Filter, which RoundTypes to fetch.
     */
    where: RoundTypesWhereUniqueInput
  }

  /**
   * RoundTypes findUnique
   */
  export interface RoundTypesFindUniqueArgs extends RoundTypesFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundTypes findUniqueOrThrow
   */
  export type RoundTypesFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundTypes
     */
    select?: RoundTypesSelect | null
    /**
     * Filter, which RoundTypes to fetch.
     */
    where: RoundTypesWhereUniqueInput
  }


  /**
   * RoundTypes base type for findFirst actions
   */
  export type RoundTypesFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the RoundTypes
     */
    select?: RoundTypesSelect | null
    /**
     * Filter, which RoundTypes to fetch.
     */
    where?: RoundTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundTypes to fetch.
     */
    orderBy?: Enumerable<RoundTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundTypes.
     */
    cursor?: RoundTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundTypes.
     */
    distinct?: Enumerable<RoundTypesScalarFieldEnum>
  }

  /**
   * RoundTypes findFirst
   */
  export interface RoundTypesFindFirstArgs extends RoundTypesFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * RoundTypes findFirstOrThrow
   */
  export type RoundTypesFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the RoundTypes
     */
    select?: RoundTypesSelect | null
    /**
     * Filter, which RoundTypes to fetch.
     */
    where?: RoundTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundTypes to fetch.
     */
    orderBy?: Enumerable<RoundTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RoundTypes.
     */
    cursor?: RoundTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RoundTypes.
     */
    distinct?: Enumerable<RoundTypesScalarFieldEnum>
  }


  /**
   * RoundTypes findMany
   */
  export type RoundTypesFindManyArgs = {
    /**
     * Select specific fields to fetch from the RoundTypes
     */
    select?: RoundTypesSelect | null
    /**
     * Filter, which RoundTypes to fetch.
     */
    where?: RoundTypesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RoundTypes to fetch.
     */
    orderBy?: Enumerable<RoundTypesOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RoundTypes.
     */
    cursor?: RoundTypesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RoundTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RoundTypes.
     */
    skip?: number
    distinct?: Enumerable<RoundTypesScalarFieldEnum>
  }


  /**
   * RoundTypes create
   */
  export type RoundTypesCreateArgs = {
    /**
     * Select specific fields to fetch from the RoundTypes
     */
    select?: RoundTypesSelect | null
    /**
     * The data needed to create a RoundTypes.
     */
    data: XOR<RoundTypesCreateInput, RoundTypesUncheckedCreateInput>
  }


  /**
   * RoundTypes createMany
   */
  export type RoundTypesCreateManyArgs = {
    /**
     * The data used to create many RoundTypes.
     */
    data: Enumerable<RoundTypesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * RoundTypes update
   */
  export type RoundTypesUpdateArgs = {
    /**
     * Select specific fields to fetch from the RoundTypes
     */
    select?: RoundTypesSelect | null
    /**
     * The data needed to update a RoundTypes.
     */
    data: XOR<RoundTypesUpdateInput, RoundTypesUncheckedUpdateInput>
    /**
     * Choose, which RoundTypes to update.
     */
    where: RoundTypesWhereUniqueInput
  }


  /**
   * RoundTypes updateMany
   */
  export type RoundTypesUpdateManyArgs = {
    /**
     * The data used to update RoundTypes.
     */
    data: XOR<RoundTypesUpdateManyMutationInput, RoundTypesUncheckedUpdateManyInput>
    /**
     * Filter which RoundTypes to update
     */
    where?: RoundTypesWhereInput
  }


  /**
   * RoundTypes upsert
   */
  export type RoundTypesUpsertArgs = {
    /**
     * Select specific fields to fetch from the RoundTypes
     */
    select?: RoundTypesSelect | null
    /**
     * The filter to search for the RoundTypes to update in case it exists.
     */
    where: RoundTypesWhereUniqueInput
    /**
     * In case the RoundTypes found by the `where` argument doesn't exist, create a new RoundTypes with this data.
     */
    create: XOR<RoundTypesCreateInput, RoundTypesUncheckedCreateInput>
    /**
     * In case the RoundTypes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundTypesUpdateInput, RoundTypesUncheckedUpdateInput>
  }


  /**
   * RoundTypes delete
   */
  export type RoundTypesDeleteArgs = {
    /**
     * Select specific fields to fetch from the RoundTypes
     */
    select?: RoundTypesSelect | null
    /**
     * Filter which RoundTypes to delete.
     */
    where: RoundTypesWhereUniqueInput
  }


  /**
   * RoundTypes deleteMany
   */
  export type RoundTypesDeleteManyArgs = {
    /**
     * Filter which RoundTypes to delete
     */
    where?: RoundTypesWhereInput
  }


  /**
   * RoundTypes without action
   */
  export type RoundTypesArgs = {
    /**
     * Select specific fields to fetch from the RoundTypes
     */
    select?: RoundTypesSelect | null
  }



  /**
   * Model championships
   */


  export type AggregateChampionships = {
    _count: ChampionshipsCountAggregateOutputType | null
    _avg: ChampionshipsAvgAggregateOutputType | null
    _sum: ChampionshipsSumAggregateOutputType | null
    _min: ChampionshipsMinAggregateOutputType | null
    _max: ChampionshipsMaxAggregateOutputType | null
  }

  export type ChampionshipsAvgAggregateOutputType = {
    id: number | null
  }

  export type ChampionshipsSumAggregateOutputType = {
    id: number | null
  }

  export type ChampionshipsMinAggregateOutputType = {
    id: number | null
    competition_id: string | null
    championship_type: string | null
  }

  export type ChampionshipsMaxAggregateOutputType = {
    id: number | null
    competition_id: string | null
    championship_type: string | null
  }

  export type ChampionshipsCountAggregateOutputType = {
    id: number
    competition_id: number
    championship_type: number
    _all: number
  }


  export type ChampionshipsAvgAggregateInputType = {
    id?: true
  }

  export type ChampionshipsSumAggregateInputType = {
    id?: true
  }

  export type ChampionshipsMinAggregateInputType = {
    id?: true
    competition_id?: true
    championship_type?: true
  }

  export type ChampionshipsMaxAggregateInputType = {
    id?: true
    competition_id?: true
    championship_type?: true
  }

  export type ChampionshipsCountAggregateInputType = {
    id?: true
    competition_id?: true
    championship_type?: true
    _all?: true
  }

  export type ChampionshipsAggregateArgs = {
    /**
     * Filter which championships to aggregate.
     */
    where?: championshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of championships to fetch.
     */
    orderBy?: Enumerable<championshipsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: championshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` championships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` championships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned championships
    **/
    _count?: true | ChampionshipsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChampionshipsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChampionshipsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChampionshipsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChampionshipsMaxAggregateInputType
  }

  export type GetChampionshipsAggregateType<T extends ChampionshipsAggregateArgs> = {
        [P in keyof T & keyof AggregateChampionships]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChampionships[P]>
      : GetScalarType<T[P], AggregateChampionships[P]>
  }




  export type ChampionshipsGroupByArgs = {
    where?: championshipsWhereInput
    orderBy?: Enumerable<championshipsOrderByWithAggregationInput>
    by: ChampionshipsScalarFieldEnum[]
    having?: championshipsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChampionshipsCountAggregateInputType | true
    _avg?: ChampionshipsAvgAggregateInputType
    _sum?: ChampionshipsSumAggregateInputType
    _min?: ChampionshipsMinAggregateInputType
    _max?: ChampionshipsMaxAggregateInputType
  }


  export type ChampionshipsGroupByOutputType = {
    id: number
    competition_id: string
    championship_type: string
    _count: ChampionshipsCountAggregateOutputType | null
    _avg: ChampionshipsAvgAggregateOutputType | null
    _sum: ChampionshipsSumAggregateOutputType | null
    _min: ChampionshipsMinAggregateOutputType | null
    _max: ChampionshipsMaxAggregateOutputType | null
  }

  type GetChampionshipsGroupByPayload<T extends ChampionshipsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ChampionshipsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChampionshipsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChampionshipsGroupByOutputType[P]>
            : GetScalarType<T[P], ChampionshipsGroupByOutputType[P]>
        }
      >
    >


  export type championshipsSelect = {
    id?: boolean
    competition_id?: boolean
    championship_type?: boolean
  }


  export type championshipsGetPayload<S extends boolean | null | undefined | championshipsArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? championships :
    S extends undefined ? never :
    S extends { include: any } & (championshipsArgs | championshipsFindManyArgs)
    ? championships 
    : S extends { select: any } & (championshipsArgs | championshipsFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof championships ? championships[P] : never
  } 
      : championships


  type championshipsCountArgs = 
    Omit<championshipsFindManyArgs, 'select' | 'include'> & {
      select?: ChampionshipsCountAggregateInputType | true
    }

  export interface championshipsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Championships that matches the filter.
     * @param {championshipsFindUniqueArgs} args - Arguments to find a Championships
     * @example
     * // Get one Championships
     * const championships = await prisma.championships.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends championshipsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, championshipsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'championships'> extends True ? Prisma__championshipsClient<championshipsGetPayload<T>> : Prisma__championshipsClient<championshipsGetPayload<T> | null, null>

    /**
     * Find one Championships that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {championshipsFindUniqueOrThrowArgs} args - Arguments to find a Championships
     * @example
     * // Get one Championships
     * const championships = await prisma.championships.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends championshipsFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, championshipsFindUniqueOrThrowArgs>
    ): Prisma__championshipsClient<championshipsGetPayload<T>>

    /**
     * Find the first Championships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {championshipsFindFirstArgs} args - Arguments to find a Championships
     * @example
     * // Get one Championships
     * const championships = await prisma.championships.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends championshipsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, championshipsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'championships'> extends True ? Prisma__championshipsClient<championshipsGetPayload<T>> : Prisma__championshipsClient<championshipsGetPayload<T> | null, null>

    /**
     * Find the first Championships that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {championshipsFindFirstOrThrowArgs} args - Arguments to find a Championships
     * @example
     * // Get one Championships
     * const championships = await prisma.championships.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends championshipsFindFirstOrThrowArgs>(
      args?: SelectSubset<T, championshipsFindFirstOrThrowArgs>
    ): Prisma__championshipsClient<championshipsGetPayload<T>>

    /**
     * Find zero or more Championships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {championshipsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Championships
     * const championships = await prisma.championships.findMany()
     * 
     * // Get first 10 Championships
     * const championships = await prisma.championships.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const championshipsWithIdOnly = await prisma.championships.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends championshipsFindManyArgs>(
      args?: SelectSubset<T, championshipsFindManyArgs>
    ): Prisma.PrismaPromise<Array<championshipsGetPayload<T>>>

    /**
     * Create a Championships.
     * @param {championshipsCreateArgs} args - Arguments to create a Championships.
     * @example
     * // Create one Championships
     * const Championships = await prisma.championships.create({
     *   data: {
     *     // ... data to create a Championships
     *   }
     * })
     * 
    **/
    create<T extends championshipsCreateArgs>(
      args: SelectSubset<T, championshipsCreateArgs>
    ): Prisma__championshipsClient<championshipsGetPayload<T>>

    /**
     * Create many Championships.
     *     @param {championshipsCreateManyArgs} args - Arguments to create many Championships.
     *     @example
     *     // Create many Championships
     *     const championships = await prisma.championships.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends championshipsCreateManyArgs>(
      args?: SelectSubset<T, championshipsCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Championships.
     * @param {championshipsDeleteArgs} args - Arguments to delete one Championships.
     * @example
     * // Delete one Championships
     * const Championships = await prisma.championships.delete({
     *   where: {
     *     // ... filter to delete one Championships
     *   }
     * })
     * 
    **/
    delete<T extends championshipsDeleteArgs>(
      args: SelectSubset<T, championshipsDeleteArgs>
    ): Prisma__championshipsClient<championshipsGetPayload<T>>

    /**
     * Update one Championships.
     * @param {championshipsUpdateArgs} args - Arguments to update one Championships.
     * @example
     * // Update one Championships
     * const championships = await prisma.championships.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends championshipsUpdateArgs>(
      args: SelectSubset<T, championshipsUpdateArgs>
    ): Prisma__championshipsClient<championshipsGetPayload<T>>

    /**
     * Delete zero or more Championships.
     * @param {championshipsDeleteManyArgs} args - Arguments to filter Championships to delete.
     * @example
     * // Delete a few Championships
     * const { count } = await prisma.championships.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends championshipsDeleteManyArgs>(
      args?: SelectSubset<T, championshipsDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Championships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {championshipsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Championships
     * const championships = await prisma.championships.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends championshipsUpdateManyArgs>(
      args: SelectSubset<T, championshipsUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Championships.
     * @param {championshipsUpsertArgs} args - Arguments to update or create a Championships.
     * @example
     * // Update or create a Championships
     * const championships = await prisma.championships.upsert({
     *   create: {
     *     // ... data to create a Championships
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Championships we want to update
     *   }
     * })
    **/
    upsert<T extends championshipsUpsertArgs>(
      args: SelectSubset<T, championshipsUpsertArgs>
    ): Prisma__championshipsClient<championshipsGetPayload<T>>

    /**
     * Count the number of Championships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {championshipsCountArgs} args - Arguments to filter Championships to count.
     * @example
     * // Count the number of Championships
     * const count = await prisma.championships.count({
     *   where: {
     *     // ... the filter for the Championships we want to count
     *   }
     * })
    **/
    count<T extends championshipsCountArgs>(
      args?: Subset<T, championshipsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChampionshipsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Championships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionshipsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChampionshipsAggregateArgs>(args: Subset<T, ChampionshipsAggregateArgs>): Prisma.PrismaPromise<GetChampionshipsAggregateType<T>>

    /**
     * Group by Championships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChampionshipsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChampionshipsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChampionshipsGroupByArgs['orderBy'] }
        : { orderBy?: ChampionshipsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChampionshipsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChampionshipsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for championships.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__championshipsClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * championships base type for findUnique actions
   */
  export type championshipsFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the championships
     */
    select?: championshipsSelect | null
    /**
     * Filter, which championships to fetch.
     */
    where: championshipsWhereUniqueInput
  }

  /**
   * championships findUnique
   */
  export interface championshipsFindUniqueArgs extends championshipsFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * championships findUniqueOrThrow
   */
  export type championshipsFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the championships
     */
    select?: championshipsSelect | null
    /**
     * Filter, which championships to fetch.
     */
    where: championshipsWhereUniqueInput
  }


  /**
   * championships base type for findFirst actions
   */
  export type championshipsFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the championships
     */
    select?: championshipsSelect | null
    /**
     * Filter, which championships to fetch.
     */
    where?: championshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of championships to fetch.
     */
    orderBy?: Enumerable<championshipsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for championships.
     */
    cursor?: championshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` championships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` championships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of championships.
     */
    distinct?: Enumerable<ChampionshipsScalarFieldEnum>
  }

  /**
   * championships findFirst
   */
  export interface championshipsFindFirstArgs extends championshipsFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * championships findFirstOrThrow
   */
  export type championshipsFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the championships
     */
    select?: championshipsSelect | null
    /**
     * Filter, which championships to fetch.
     */
    where?: championshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of championships to fetch.
     */
    orderBy?: Enumerable<championshipsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for championships.
     */
    cursor?: championshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` championships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` championships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of championships.
     */
    distinct?: Enumerable<ChampionshipsScalarFieldEnum>
  }


  /**
   * championships findMany
   */
  export type championshipsFindManyArgs = {
    /**
     * Select specific fields to fetch from the championships
     */
    select?: championshipsSelect | null
    /**
     * Filter, which championships to fetch.
     */
    where?: championshipsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of championships to fetch.
     */
    orderBy?: Enumerable<championshipsOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing championships.
     */
    cursor?: championshipsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` championships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` championships.
     */
    skip?: number
    distinct?: Enumerable<ChampionshipsScalarFieldEnum>
  }


  /**
   * championships create
   */
  export type championshipsCreateArgs = {
    /**
     * Select specific fields to fetch from the championships
     */
    select?: championshipsSelect | null
    /**
     * The data needed to create a championships.
     */
    data: XOR<championshipsCreateInput, championshipsUncheckedCreateInput>
  }


  /**
   * championships createMany
   */
  export type championshipsCreateManyArgs = {
    /**
     * The data used to create many championships.
     */
    data: Enumerable<championshipsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * championships update
   */
  export type championshipsUpdateArgs = {
    /**
     * Select specific fields to fetch from the championships
     */
    select?: championshipsSelect | null
    /**
     * The data needed to update a championships.
     */
    data: XOR<championshipsUpdateInput, championshipsUncheckedUpdateInput>
    /**
     * Choose, which championships to update.
     */
    where: championshipsWhereUniqueInput
  }


  /**
   * championships updateMany
   */
  export type championshipsUpdateManyArgs = {
    /**
     * The data used to update championships.
     */
    data: XOR<championshipsUpdateManyMutationInput, championshipsUncheckedUpdateManyInput>
    /**
     * Filter which championships to update
     */
    where?: championshipsWhereInput
  }


  /**
   * championships upsert
   */
  export type championshipsUpsertArgs = {
    /**
     * Select specific fields to fetch from the championships
     */
    select?: championshipsSelect | null
    /**
     * The filter to search for the championships to update in case it exists.
     */
    where: championshipsWhereUniqueInput
    /**
     * In case the championships found by the `where` argument doesn't exist, create a new championships with this data.
     */
    create: XOR<championshipsCreateInput, championshipsUncheckedCreateInput>
    /**
     * In case the championships was found with the provided `where` argument, update it with this data.
     */
    update: XOR<championshipsUpdateInput, championshipsUncheckedUpdateInput>
  }


  /**
   * championships delete
   */
  export type championshipsDeleteArgs = {
    /**
     * Select specific fields to fetch from the championships
     */
    select?: championshipsSelect | null
    /**
     * Filter which championships to delete.
     */
    where: championshipsWhereUniqueInput
  }


  /**
   * championships deleteMany
   */
  export type championshipsDeleteManyArgs = {
    /**
     * Filter which championships to delete
     */
    where?: championshipsWhereInput
  }


  /**
   * championships without action
   */
  export type championshipsArgs = {
    /**
     * Select specific fields to fetch from the championships
     */
    select?: championshipsSelect | null
  }



  /**
   * Model eligible_country_iso2s_for_championship
   */


  export type AggregateEligible_country_iso2s_for_championship = {
    _count: Eligible_country_iso2s_for_championshipCountAggregateOutputType | null
    _avg: Eligible_country_iso2s_for_championshipAvgAggregateOutputType | null
    _sum: Eligible_country_iso2s_for_championshipSumAggregateOutputType | null
    _min: Eligible_country_iso2s_for_championshipMinAggregateOutputType | null
    _max: Eligible_country_iso2s_for_championshipMaxAggregateOutputType | null
  }

  export type Eligible_country_iso2s_for_championshipAvgAggregateOutputType = {
    id: number | null
  }

  export type Eligible_country_iso2s_for_championshipSumAggregateOutputType = {
    id: bigint | null
  }

  export type Eligible_country_iso2s_for_championshipMinAggregateOutputType = {
    id: bigint | null
    championship_type: string | null
    eligible_country_iso2: string | null
  }

  export type Eligible_country_iso2s_for_championshipMaxAggregateOutputType = {
    id: bigint | null
    championship_type: string | null
    eligible_country_iso2: string | null
  }

  export type Eligible_country_iso2s_for_championshipCountAggregateOutputType = {
    id: number
    championship_type: number
    eligible_country_iso2: number
    _all: number
  }


  export type Eligible_country_iso2s_for_championshipAvgAggregateInputType = {
    id?: true
  }

  export type Eligible_country_iso2s_for_championshipSumAggregateInputType = {
    id?: true
  }

  export type Eligible_country_iso2s_for_championshipMinAggregateInputType = {
    id?: true
    championship_type?: true
    eligible_country_iso2?: true
  }

  export type Eligible_country_iso2s_for_championshipMaxAggregateInputType = {
    id?: true
    championship_type?: true
    eligible_country_iso2?: true
  }

  export type Eligible_country_iso2s_for_championshipCountAggregateInputType = {
    id?: true
    championship_type?: true
    eligible_country_iso2?: true
    _all?: true
  }

  export type Eligible_country_iso2s_for_championshipAggregateArgs = {
    /**
     * Filter which eligible_country_iso2s_for_championship to aggregate.
     */
    where?: eligible_country_iso2s_for_championshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eligible_country_iso2s_for_championships to fetch.
     */
    orderBy?: Enumerable<eligible_country_iso2s_for_championshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: eligible_country_iso2s_for_championshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eligible_country_iso2s_for_championships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eligible_country_iso2s_for_championships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned eligible_country_iso2s_for_championships
    **/
    _count?: true | Eligible_country_iso2s_for_championshipCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Eligible_country_iso2s_for_championshipAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Eligible_country_iso2s_for_championshipSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Eligible_country_iso2s_for_championshipMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Eligible_country_iso2s_for_championshipMaxAggregateInputType
  }

  export type GetEligible_country_iso2s_for_championshipAggregateType<T extends Eligible_country_iso2s_for_championshipAggregateArgs> = {
        [P in keyof T & keyof AggregateEligible_country_iso2s_for_championship]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEligible_country_iso2s_for_championship[P]>
      : GetScalarType<T[P], AggregateEligible_country_iso2s_for_championship[P]>
  }




  export type Eligible_country_iso2s_for_championshipGroupByArgs = {
    where?: eligible_country_iso2s_for_championshipWhereInput
    orderBy?: Enumerable<eligible_country_iso2s_for_championshipOrderByWithAggregationInput>
    by: Eligible_country_iso2s_for_championshipScalarFieldEnum[]
    having?: eligible_country_iso2s_for_championshipScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Eligible_country_iso2s_for_championshipCountAggregateInputType | true
    _avg?: Eligible_country_iso2s_for_championshipAvgAggregateInputType
    _sum?: Eligible_country_iso2s_for_championshipSumAggregateInputType
    _min?: Eligible_country_iso2s_for_championshipMinAggregateInputType
    _max?: Eligible_country_iso2s_for_championshipMaxAggregateInputType
  }


  export type Eligible_country_iso2s_for_championshipGroupByOutputType = {
    id: bigint
    championship_type: string
    eligible_country_iso2: string
    _count: Eligible_country_iso2s_for_championshipCountAggregateOutputType | null
    _avg: Eligible_country_iso2s_for_championshipAvgAggregateOutputType | null
    _sum: Eligible_country_iso2s_for_championshipSumAggregateOutputType | null
    _min: Eligible_country_iso2s_for_championshipMinAggregateOutputType | null
    _max: Eligible_country_iso2s_for_championshipMaxAggregateOutputType | null
  }

  type GetEligible_country_iso2s_for_championshipGroupByPayload<T extends Eligible_country_iso2s_for_championshipGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<Eligible_country_iso2s_for_championshipGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Eligible_country_iso2s_for_championshipGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Eligible_country_iso2s_for_championshipGroupByOutputType[P]>
            : GetScalarType<T[P], Eligible_country_iso2s_for_championshipGroupByOutputType[P]>
        }
      >
    >


  export type eligible_country_iso2s_for_championshipSelect = {
    id?: boolean
    championship_type?: boolean
    eligible_country_iso2?: boolean
  }


  export type eligible_country_iso2s_for_championshipGetPayload<S extends boolean | null | undefined | eligible_country_iso2s_for_championshipArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? eligible_country_iso2s_for_championship :
    S extends undefined ? never :
    S extends { include: any } & (eligible_country_iso2s_for_championshipArgs | eligible_country_iso2s_for_championshipFindManyArgs)
    ? eligible_country_iso2s_for_championship 
    : S extends { select: any } & (eligible_country_iso2s_for_championshipArgs | eligible_country_iso2s_for_championshipFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof eligible_country_iso2s_for_championship ? eligible_country_iso2s_for_championship[P] : never
  } 
      : eligible_country_iso2s_for_championship


  type eligible_country_iso2s_for_championshipCountArgs = 
    Omit<eligible_country_iso2s_for_championshipFindManyArgs, 'select' | 'include'> & {
      select?: Eligible_country_iso2s_for_championshipCountAggregateInputType | true
    }

  export interface eligible_country_iso2s_for_championshipDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Eligible_country_iso2s_for_championship that matches the filter.
     * @param {eligible_country_iso2s_for_championshipFindUniqueArgs} args - Arguments to find a Eligible_country_iso2s_for_championship
     * @example
     * // Get one Eligible_country_iso2s_for_championship
     * const eligible_country_iso2s_for_championship = await prisma.eligible_country_iso2s_for_championship.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends eligible_country_iso2s_for_championshipFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, eligible_country_iso2s_for_championshipFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'eligible_country_iso2s_for_championship'> extends True ? Prisma__eligible_country_iso2s_for_championshipClient<eligible_country_iso2s_for_championshipGetPayload<T>> : Prisma__eligible_country_iso2s_for_championshipClient<eligible_country_iso2s_for_championshipGetPayload<T> | null, null>

    /**
     * Find one Eligible_country_iso2s_for_championship that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {eligible_country_iso2s_for_championshipFindUniqueOrThrowArgs} args - Arguments to find a Eligible_country_iso2s_for_championship
     * @example
     * // Get one Eligible_country_iso2s_for_championship
     * const eligible_country_iso2s_for_championship = await prisma.eligible_country_iso2s_for_championship.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends eligible_country_iso2s_for_championshipFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, eligible_country_iso2s_for_championshipFindUniqueOrThrowArgs>
    ): Prisma__eligible_country_iso2s_for_championshipClient<eligible_country_iso2s_for_championshipGetPayload<T>>

    /**
     * Find the first Eligible_country_iso2s_for_championship that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligible_country_iso2s_for_championshipFindFirstArgs} args - Arguments to find a Eligible_country_iso2s_for_championship
     * @example
     * // Get one Eligible_country_iso2s_for_championship
     * const eligible_country_iso2s_for_championship = await prisma.eligible_country_iso2s_for_championship.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends eligible_country_iso2s_for_championshipFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, eligible_country_iso2s_for_championshipFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'eligible_country_iso2s_for_championship'> extends True ? Prisma__eligible_country_iso2s_for_championshipClient<eligible_country_iso2s_for_championshipGetPayload<T>> : Prisma__eligible_country_iso2s_for_championshipClient<eligible_country_iso2s_for_championshipGetPayload<T> | null, null>

    /**
     * Find the first Eligible_country_iso2s_for_championship that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligible_country_iso2s_for_championshipFindFirstOrThrowArgs} args - Arguments to find a Eligible_country_iso2s_for_championship
     * @example
     * // Get one Eligible_country_iso2s_for_championship
     * const eligible_country_iso2s_for_championship = await prisma.eligible_country_iso2s_for_championship.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends eligible_country_iso2s_for_championshipFindFirstOrThrowArgs>(
      args?: SelectSubset<T, eligible_country_iso2s_for_championshipFindFirstOrThrowArgs>
    ): Prisma__eligible_country_iso2s_for_championshipClient<eligible_country_iso2s_for_championshipGetPayload<T>>

    /**
     * Find zero or more Eligible_country_iso2s_for_championships that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligible_country_iso2s_for_championshipFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eligible_country_iso2s_for_championships
     * const eligible_country_iso2s_for_championships = await prisma.eligible_country_iso2s_for_championship.findMany()
     * 
     * // Get first 10 Eligible_country_iso2s_for_championships
     * const eligible_country_iso2s_for_championships = await prisma.eligible_country_iso2s_for_championship.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eligible_country_iso2s_for_championshipWithIdOnly = await prisma.eligible_country_iso2s_for_championship.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends eligible_country_iso2s_for_championshipFindManyArgs>(
      args?: SelectSubset<T, eligible_country_iso2s_for_championshipFindManyArgs>
    ): Prisma.PrismaPromise<Array<eligible_country_iso2s_for_championshipGetPayload<T>>>

    /**
     * Create a Eligible_country_iso2s_for_championship.
     * @param {eligible_country_iso2s_for_championshipCreateArgs} args - Arguments to create a Eligible_country_iso2s_for_championship.
     * @example
     * // Create one Eligible_country_iso2s_for_championship
     * const Eligible_country_iso2s_for_championship = await prisma.eligible_country_iso2s_for_championship.create({
     *   data: {
     *     // ... data to create a Eligible_country_iso2s_for_championship
     *   }
     * })
     * 
    **/
    create<T extends eligible_country_iso2s_for_championshipCreateArgs>(
      args: SelectSubset<T, eligible_country_iso2s_for_championshipCreateArgs>
    ): Prisma__eligible_country_iso2s_for_championshipClient<eligible_country_iso2s_for_championshipGetPayload<T>>

    /**
     * Create many Eligible_country_iso2s_for_championships.
     *     @param {eligible_country_iso2s_for_championshipCreateManyArgs} args - Arguments to create many Eligible_country_iso2s_for_championships.
     *     @example
     *     // Create many Eligible_country_iso2s_for_championships
     *     const eligible_country_iso2s_for_championship = await prisma.eligible_country_iso2s_for_championship.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends eligible_country_iso2s_for_championshipCreateManyArgs>(
      args?: SelectSubset<T, eligible_country_iso2s_for_championshipCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Eligible_country_iso2s_for_championship.
     * @param {eligible_country_iso2s_for_championshipDeleteArgs} args - Arguments to delete one Eligible_country_iso2s_for_championship.
     * @example
     * // Delete one Eligible_country_iso2s_for_championship
     * const Eligible_country_iso2s_for_championship = await prisma.eligible_country_iso2s_for_championship.delete({
     *   where: {
     *     // ... filter to delete one Eligible_country_iso2s_for_championship
     *   }
     * })
     * 
    **/
    delete<T extends eligible_country_iso2s_for_championshipDeleteArgs>(
      args: SelectSubset<T, eligible_country_iso2s_for_championshipDeleteArgs>
    ): Prisma__eligible_country_iso2s_for_championshipClient<eligible_country_iso2s_for_championshipGetPayload<T>>

    /**
     * Update one Eligible_country_iso2s_for_championship.
     * @param {eligible_country_iso2s_for_championshipUpdateArgs} args - Arguments to update one Eligible_country_iso2s_for_championship.
     * @example
     * // Update one Eligible_country_iso2s_for_championship
     * const eligible_country_iso2s_for_championship = await prisma.eligible_country_iso2s_for_championship.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends eligible_country_iso2s_for_championshipUpdateArgs>(
      args: SelectSubset<T, eligible_country_iso2s_for_championshipUpdateArgs>
    ): Prisma__eligible_country_iso2s_for_championshipClient<eligible_country_iso2s_for_championshipGetPayload<T>>

    /**
     * Delete zero or more Eligible_country_iso2s_for_championships.
     * @param {eligible_country_iso2s_for_championshipDeleteManyArgs} args - Arguments to filter Eligible_country_iso2s_for_championships to delete.
     * @example
     * // Delete a few Eligible_country_iso2s_for_championships
     * const { count } = await prisma.eligible_country_iso2s_for_championship.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends eligible_country_iso2s_for_championshipDeleteManyArgs>(
      args?: SelectSubset<T, eligible_country_iso2s_for_championshipDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eligible_country_iso2s_for_championships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligible_country_iso2s_for_championshipUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eligible_country_iso2s_for_championships
     * const eligible_country_iso2s_for_championship = await prisma.eligible_country_iso2s_for_championship.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends eligible_country_iso2s_for_championshipUpdateManyArgs>(
      args: SelectSubset<T, eligible_country_iso2s_for_championshipUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Eligible_country_iso2s_for_championship.
     * @param {eligible_country_iso2s_for_championshipUpsertArgs} args - Arguments to update or create a Eligible_country_iso2s_for_championship.
     * @example
     * // Update or create a Eligible_country_iso2s_for_championship
     * const eligible_country_iso2s_for_championship = await prisma.eligible_country_iso2s_for_championship.upsert({
     *   create: {
     *     // ... data to create a Eligible_country_iso2s_for_championship
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Eligible_country_iso2s_for_championship we want to update
     *   }
     * })
    **/
    upsert<T extends eligible_country_iso2s_for_championshipUpsertArgs>(
      args: SelectSubset<T, eligible_country_iso2s_for_championshipUpsertArgs>
    ): Prisma__eligible_country_iso2s_for_championshipClient<eligible_country_iso2s_for_championshipGetPayload<T>>

    /**
     * Count the number of Eligible_country_iso2s_for_championships.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {eligible_country_iso2s_for_championshipCountArgs} args - Arguments to filter Eligible_country_iso2s_for_championships to count.
     * @example
     * // Count the number of Eligible_country_iso2s_for_championships
     * const count = await prisma.eligible_country_iso2s_for_championship.count({
     *   where: {
     *     // ... the filter for the Eligible_country_iso2s_for_championships we want to count
     *   }
     * })
    **/
    count<T extends eligible_country_iso2s_for_championshipCountArgs>(
      args?: Subset<T, eligible_country_iso2s_for_championshipCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Eligible_country_iso2s_for_championshipCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Eligible_country_iso2s_for_championship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eligible_country_iso2s_for_championshipAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Eligible_country_iso2s_for_championshipAggregateArgs>(args: Subset<T, Eligible_country_iso2s_for_championshipAggregateArgs>): Prisma.PrismaPromise<GetEligible_country_iso2s_for_championshipAggregateType<T>>

    /**
     * Group by Eligible_country_iso2s_for_championship.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Eligible_country_iso2s_for_championshipGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Eligible_country_iso2s_for_championshipGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Eligible_country_iso2s_for_championshipGroupByArgs['orderBy'] }
        : { orderBy?: Eligible_country_iso2s_for_championshipGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Eligible_country_iso2s_for_championshipGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEligible_country_iso2s_for_championshipGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for eligible_country_iso2s_for_championship.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__eligible_country_iso2s_for_championshipClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * eligible_country_iso2s_for_championship base type for findUnique actions
   */
  export type eligible_country_iso2s_for_championshipFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the eligible_country_iso2s_for_championship
     */
    select?: eligible_country_iso2s_for_championshipSelect | null
    /**
     * Filter, which eligible_country_iso2s_for_championship to fetch.
     */
    where: eligible_country_iso2s_for_championshipWhereUniqueInput
  }

  /**
   * eligible_country_iso2s_for_championship findUnique
   */
  export interface eligible_country_iso2s_for_championshipFindUniqueArgs extends eligible_country_iso2s_for_championshipFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * eligible_country_iso2s_for_championship findUniqueOrThrow
   */
  export type eligible_country_iso2s_for_championshipFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the eligible_country_iso2s_for_championship
     */
    select?: eligible_country_iso2s_for_championshipSelect | null
    /**
     * Filter, which eligible_country_iso2s_for_championship to fetch.
     */
    where: eligible_country_iso2s_for_championshipWhereUniqueInput
  }


  /**
   * eligible_country_iso2s_for_championship base type for findFirst actions
   */
  export type eligible_country_iso2s_for_championshipFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the eligible_country_iso2s_for_championship
     */
    select?: eligible_country_iso2s_for_championshipSelect | null
    /**
     * Filter, which eligible_country_iso2s_for_championship to fetch.
     */
    where?: eligible_country_iso2s_for_championshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eligible_country_iso2s_for_championships to fetch.
     */
    orderBy?: Enumerable<eligible_country_iso2s_for_championshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eligible_country_iso2s_for_championships.
     */
    cursor?: eligible_country_iso2s_for_championshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eligible_country_iso2s_for_championships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eligible_country_iso2s_for_championships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eligible_country_iso2s_for_championships.
     */
    distinct?: Enumerable<Eligible_country_iso2s_for_championshipScalarFieldEnum>
  }

  /**
   * eligible_country_iso2s_for_championship findFirst
   */
  export interface eligible_country_iso2s_for_championshipFindFirstArgs extends eligible_country_iso2s_for_championshipFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * eligible_country_iso2s_for_championship findFirstOrThrow
   */
  export type eligible_country_iso2s_for_championshipFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the eligible_country_iso2s_for_championship
     */
    select?: eligible_country_iso2s_for_championshipSelect | null
    /**
     * Filter, which eligible_country_iso2s_for_championship to fetch.
     */
    where?: eligible_country_iso2s_for_championshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eligible_country_iso2s_for_championships to fetch.
     */
    orderBy?: Enumerable<eligible_country_iso2s_for_championshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for eligible_country_iso2s_for_championships.
     */
    cursor?: eligible_country_iso2s_for_championshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eligible_country_iso2s_for_championships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eligible_country_iso2s_for_championships.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of eligible_country_iso2s_for_championships.
     */
    distinct?: Enumerable<Eligible_country_iso2s_for_championshipScalarFieldEnum>
  }


  /**
   * eligible_country_iso2s_for_championship findMany
   */
  export type eligible_country_iso2s_for_championshipFindManyArgs = {
    /**
     * Select specific fields to fetch from the eligible_country_iso2s_for_championship
     */
    select?: eligible_country_iso2s_for_championshipSelect | null
    /**
     * Filter, which eligible_country_iso2s_for_championships to fetch.
     */
    where?: eligible_country_iso2s_for_championshipWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of eligible_country_iso2s_for_championships to fetch.
     */
    orderBy?: Enumerable<eligible_country_iso2s_for_championshipOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing eligible_country_iso2s_for_championships.
     */
    cursor?: eligible_country_iso2s_for_championshipWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` eligible_country_iso2s_for_championships from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` eligible_country_iso2s_for_championships.
     */
    skip?: number
    distinct?: Enumerable<Eligible_country_iso2s_for_championshipScalarFieldEnum>
  }


  /**
   * eligible_country_iso2s_for_championship create
   */
  export type eligible_country_iso2s_for_championshipCreateArgs = {
    /**
     * Select specific fields to fetch from the eligible_country_iso2s_for_championship
     */
    select?: eligible_country_iso2s_for_championshipSelect | null
    /**
     * The data needed to create a eligible_country_iso2s_for_championship.
     */
    data: XOR<eligible_country_iso2s_for_championshipCreateInput, eligible_country_iso2s_for_championshipUncheckedCreateInput>
  }


  /**
   * eligible_country_iso2s_for_championship createMany
   */
  export type eligible_country_iso2s_for_championshipCreateManyArgs = {
    /**
     * The data used to create many eligible_country_iso2s_for_championships.
     */
    data: Enumerable<eligible_country_iso2s_for_championshipCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * eligible_country_iso2s_for_championship update
   */
  export type eligible_country_iso2s_for_championshipUpdateArgs = {
    /**
     * Select specific fields to fetch from the eligible_country_iso2s_for_championship
     */
    select?: eligible_country_iso2s_for_championshipSelect | null
    /**
     * The data needed to update a eligible_country_iso2s_for_championship.
     */
    data: XOR<eligible_country_iso2s_for_championshipUpdateInput, eligible_country_iso2s_for_championshipUncheckedUpdateInput>
    /**
     * Choose, which eligible_country_iso2s_for_championship to update.
     */
    where: eligible_country_iso2s_for_championshipWhereUniqueInput
  }


  /**
   * eligible_country_iso2s_for_championship updateMany
   */
  export type eligible_country_iso2s_for_championshipUpdateManyArgs = {
    /**
     * The data used to update eligible_country_iso2s_for_championships.
     */
    data: XOR<eligible_country_iso2s_for_championshipUpdateManyMutationInput, eligible_country_iso2s_for_championshipUncheckedUpdateManyInput>
    /**
     * Filter which eligible_country_iso2s_for_championships to update
     */
    where?: eligible_country_iso2s_for_championshipWhereInput
  }


  /**
   * eligible_country_iso2s_for_championship upsert
   */
  export type eligible_country_iso2s_for_championshipUpsertArgs = {
    /**
     * Select specific fields to fetch from the eligible_country_iso2s_for_championship
     */
    select?: eligible_country_iso2s_for_championshipSelect | null
    /**
     * The filter to search for the eligible_country_iso2s_for_championship to update in case it exists.
     */
    where: eligible_country_iso2s_for_championshipWhereUniqueInput
    /**
     * In case the eligible_country_iso2s_for_championship found by the `where` argument doesn't exist, create a new eligible_country_iso2s_for_championship with this data.
     */
    create: XOR<eligible_country_iso2s_for_championshipCreateInput, eligible_country_iso2s_for_championshipUncheckedCreateInput>
    /**
     * In case the eligible_country_iso2s_for_championship was found with the provided `where` argument, update it with this data.
     */
    update: XOR<eligible_country_iso2s_for_championshipUpdateInput, eligible_country_iso2s_for_championshipUncheckedUpdateInput>
  }


  /**
   * eligible_country_iso2s_for_championship delete
   */
  export type eligible_country_iso2s_for_championshipDeleteArgs = {
    /**
     * Select specific fields to fetch from the eligible_country_iso2s_for_championship
     */
    select?: eligible_country_iso2s_for_championshipSelect | null
    /**
     * Filter which eligible_country_iso2s_for_championship to delete.
     */
    where: eligible_country_iso2s_for_championshipWhereUniqueInput
  }


  /**
   * eligible_country_iso2s_for_championship deleteMany
   */
  export type eligible_country_iso2s_for_championshipDeleteManyArgs = {
    /**
     * Filter which eligible_country_iso2s_for_championships to delete
     */
    where?: eligible_country_iso2s_for_championshipWhereInput
  }


  /**
   * eligible_country_iso2s_for_championship without action
   */
  export type eligible_country_iso2s_for_championshipArgs = {
    /**
     * Select specific fields to fetch from the eligible_country_iso2s_for_championship
     */
    select?: eligible_country_iso2s_for_championshipSelect | null
  }



  /**
   * Model Session
   */


  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sid: string | null
    data: string | null
    expiresAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sid: number
    data: number
    expiresAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sid?: true
    data?: true
    expiresAt?: true
    _all?: true
  }

  export type SessionAggregateArgs = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs = {
    where?: SessionWhereInput
    orderBy?: Enumerable<SessionOrderByWithAggregationInput>
    by: SessionScalarFieldEnum[]
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }


  export type SessionGroupByOutputType = {
    id: string
    sid: string
    data: string
    expiresAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect = {
    id?: boolean
    sid?: boolean
    data?: boolean
    expiresAt?: boolean
  }


  export type SessionGetPayload<S extends boolean | null | undefined | SessionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Session :
    S extends undefined ? never :
    S extends { include: any } & (SessionArgs | SessionFindManyArgs)
    ? Session 
    : S extends { select: any } & (SessionArgs | SessionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Session ? Session[P] : never
  } 
      : Session


  type SessionCountArgs = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SessionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SessionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SessionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SessionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Session'> extends True ? Prisma__SessionClient<SessionGetPayload<T>> : Prisma__SessionClient<SessionGetPayload<T> | null, null>

    /**
     * Find the first Session that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SessionFindManyArgs>(
      args?: SelectSubset<T, SessionFindManyArgs>
    ): Prisma.PrismaPromise<Array<SessionGetPayload<T>>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
    **/
    create<T extends SessionCreateArgs>(
      args: SelectSubset<T, SessionCreateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs>(
      args?: SelectSubset<T, SessionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
    **/
    delete<T extends SessionDeleteArgs>(
      args: SelectSubset<T, SessionDeleteArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SessionUpdateArgs>(
      args: SelectSubset<T, SessionUpdateArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SessionDeleteManyArgs>(
      args?: SelectSubset<T, SessionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SessionUpdateManyArgs>(
      args: SelectSubset<T, SessionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
    **/
    upsert<T extends SessionUpsertArgs>(
      args: SelectSubset<T, SessionUpsertArgs>
    ): Prisma__SessionClient<SessionGetPayload<T>>

    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SessionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Session base type for findUnique actions
   */
  export type SessionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUnique
   */
  export interface SessionFindUniqueArgs extends SessionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session base type for findFirst actions
   */
  export type SessionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }

  /**
   * Session findFirst
   */
  export interface SessionFindFirstArgs extends SessionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session findMany
   */
  export type SessionFindManyArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: Enumerable<SessionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: Enumerable<SessionScalarFieldEnum>
  }


  /**
   * Session create
   */
  export type SessionCreateArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }


  /**
   * Session createMany
   */
  export type SessionCreateManyArgs = {
    /**
     * The data used to create many Sessions.
     */
    data: Enumerable<SessionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }


  /**
   * Session delete
   */
  export type SessionDeleteArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }


  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionArgs = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    avatar: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    avatar: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    avatar: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    avatar?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    avatar: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    name?: boolean
    email?: boolean
    avatar?: boolean
    Team?: boolean | TeamArgs
  }


  export type UserInclude = {
    Team?: boolean | TeamArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Team' ? TeamGetPayload<S['include'][P]> | null :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Team' ? TeamGetPayload<S['select'][P]> | null :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Team<T extends TeamArgs= {}>(args?: Subset<T, TeamArgs>): Prisma__TeamClient<TeamGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Team
   */


  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeamSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    name: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeamSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    _all?: true
  }

  export type TeamAggregateArgs = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: Enumerable<TeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs = {
    where?: TeamWhereInput
    orderBy?: Enumerable<TeamOrderByWithAggregationInput>
    by: TeamScalarFieldEnum[]
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }


  export type TeamGroupByOutputType = {
    id: number
    userId: number
    name: string
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect = {
    id?: boolean
    userId?: boolean
    name?: boolean
    Picks?: boolean | Team$PicksArgs
    user?: boolean | UserArgs
    _count?: boolean | TeamCountOutputTypeArgs
  }


  export type TeamInclude = {
    Picks?: boolean | Team$PicksArgs
    user?: boolean | UserArgs
    _count?: boolean | TeamCountOutputTypeArgs
  }

  export type TeamGetPayload<S extends boolean | null | undefined | TeamArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Team :
    S extends undefined ? never :
    S extends { include: any } & (TeamArgs | TeamFindManyArgs)
    ? Team  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Picks' ? Array < PicksGetPayload<S['include'][P]>>  :
        P extends 'user' ? UserGetPayload<S['include'][P]> :
        P extends '_count' ? TeamCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TeamArgs | TeamFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Picks' ? Array < PicksGetPayload<S['select'][P]>>  :
        P extends 'user' ? UserGetPayload<S['select'][P]> :
        P extends '_count' ? TeamCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Team ? Team[P] : never
  } 
      : Team


  type TeamCountArgs = 
    Omit<TeamFindManyArgs, 'select' | 'include'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TeamFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TeamFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Team'> extends True ? Prisma__TeamClient<TeamGetPayload<T>> : Prisma__TeamClient<TeamGetPayload<T> | null, null>

    /**
     * Find one Team that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TeamFindUniqueOrThrowArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TeamFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TeamFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Team'> extends True ? Prisma__TeamClient<TeamGetPayload<T>> : Prisma__TeamClient<TeamGetPayload<T> | null, null>

    /**
     * Find the first Team that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TeamFindFirstOrThrowArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TeamFindManyArgs>(
      args?: SelectSubset<T, TeamFindManyArgs>
    ): Prisma.PrismaPromise<Array<TeamGetPayload<T>>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
    **/
    create<T extends TeamCreateArgs>(
      args: SelectSubset<T, TeamCreateArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Create many Teams.
     *     @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     *     @example
     *     // Create many Teams
     *     const team = await prisma.team.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TeamCreateManyArgs>(
      args?: SelectSubset<T, TeamCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
    **/
    delete<T extends TeamDeleteArgs>(
      args: SelectSubset<T, TeamDeleteArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TeamUpdateArgs>(
      args: SelectSubset<T, TeamUpdateArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TeamDeleteManyArgs>(
      args?: SelectSubset<T, TeamDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TeamUpdateManyArgs>(
      args: SelectSubset<T, TeamUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
    **/
    upsert<T extends TeamUpsertArgs>(
      args: SelectSubset<T, TeamUpsertArgs>
    ): Prisma__TeamClient<TeamGetPayload<T>>

    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TeamClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Picks<T extends Team$PicksArgs= {}>(args?: Subset<T, Team$PicksArgs>): Prisma.PrismaPromise<Array<PicksGetPayload<T>>| Null>;

    user<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Team base type for findUnique actions
   */
  export type TeamFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUnique
   */
  export interface TeamFindUniqueArgs extends TeamFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team base type for findFirst actions
   */
  export type TeamFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: Enumerable<TeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: Enumerable<TeamScalarFieldEnum>
  }

  /**
   * Team findFirst
   */
  export interface TeamFindFirstArgs extends TeamFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: Enumerable<TeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: Enumerable<TeamScalarFieldEnum>
  }


  /**
   * Team findMany
   */
  export type TeamFindManyArgs = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: Enumerable<TeamOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: Enumerable<TeamScalarFieldEnum>
  }


  /**
   * Team create
   */
  export type TeamCreateArgs = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }


  /**
   * Team createMany
   */
  export type TeamCreateManyArgs = {
    /**
     * The data used to create many Teams.
     */
    data: Enumerable<TeamCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Team update
   */
  export type TeamUpdateArgs = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
  }


  /**
   * Team upsert
   */
  export type TeamUpsertArgs = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }


  /**
   * Team delete
   */
  export type TeamDeleteArgs = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }


  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
  }


  /**
   * Team.Picks
   */
  export type Team$PicksArgs = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
    where?: PicksWhereInput
    orderBy?: Enumerable<PicksOrderByWithRelationInput>
    cursor?: PicksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PicksScalarFieldEnum>
  }


  /**
   * Team without action
   */
  export type TeamArgs = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TeamInclude | null
  }



  /**
   * Model Picks
   */


  export type AggregatePicks = {
    _count: PicksCountAggregateOutputType | null
    _avg: PicksAvgAggregateOutputType | null
    _sum: PicksSumAggregateOutputType | null
    _min: PicksMinAggregateOutputType | null
    _max: PicksMaxAggregateOutputType | null
  }

  export type PicksAvgAggregateOutputType = {
    id: number | null
    slot: number | null
    teamId: number | null
    week: number | null
    year: number | null
    points: number | null
  }

  export type PicksSumAggregateOutputType = {
    id: number | null
    slot: number | null
    teamId: number | null
    week: number | null
    year: number | null
    points: number | null
  }

  export type PicksMinAggregateOutputType = {
    id: number | null
    slot: number | null
    teamId: number | null
    week: number | null
    year: number | null
    wcaId: string | null
    eventId: string | null
    points: number | null
  }

  export type PicksMaxAggregateOutputType = {
    id: number | null
    slot: number | null
    teamId: number | null
    week: number | null
    year: number | null
    wcaId: string | null
    eventId: string | null
    points: number | null
  }

  export type PicksCountAggregateOutputType = {
    id: number
    slot: number
    teamId: number
    week: number
    year: number
    wcaId: number
    eventId: number
    points: number
    _all: number
  }


  export type PicksAvgAggregateInputType = {
    id?: true
    slot?: true
    teamId?: true
    week?: true
    year?: true
    points?: true
  }

  export type PicksSumAggregateInputType = {
    id?: true
    slot?: true
    teamId?: true
    week?: true
    year?: true
    points?: true
  }

  export type PicksMinAggregateInputType = {
    id?: true
    slot?: true
    teamId?: true
    week?: true
    year?: true
    wcaId?: true
    eventId?: true
    points?: true
  }

  export type PicksMaxAggregateInputType = {
    id?: true
    slot?: true
    teamId?: true
    week?: true
    year?: true
    wcaId?: true
    eventId?: true
    points?: true
  }

  export type PicksCountAggregateInputType = {
    id?: true
    slot?: true
    teamId?: true
    week?: true
    year?: true
    wcaId?: true
    eventId?: true
    points?: true
    _all?: true
  }

  export type PicksAggregateArgs = {
    /**
     * Filter which Picks to aggregate.
     */
    where?: PicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Picks to fetch.
     */
    orderBy?: Enumerable<PicksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Picks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Picks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Picks
    **/
    _count?: true | PicksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PicksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PicksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PicksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PicksMaxAggregateInputType
  }

  export type GetPicksAggregateType<T extends PicksAggregateArgs> = {
        [P in keyof T & keyof AggregatePicks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePicks[P]>
      : GetScalarType<T[P], AggregatePicks[P]>
  }




  export type PicksGroupByArgs = {
    where?: PicksWhereInput
    orderBy?: Enumerable<PicksOrderByWithAggregationInput>
    by: PicksScalarFieldEnum[]
    having?: PicksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PicksCountAggregateInputType | true
    _avg?: PicksAvgAggregateInputType
    _sum?: PicksSumAggregateInputType
    _min?: PicksMinAggregateInputType
    _max?: PicksMaxAggregateInputType
  }


  export type PicksGroupByOutputType = {
    id: number
    slot: number
    teamId: number
    week: number
    year: number
    wcaId: string
    eventId: string
    points: number | null
    _count: PicksCountAggregateOutputType | null
    _avg: PicksAvgAggregateOutputType | null
    _sum: PicksSumAggregateOutputType | null
    _min: PicksMinAggregateOutputType | null
    _max: PicksMaxAggregateOutputType | null
  }

  type GetPicksGroupByPayload<T extends PicksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PicksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PicksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PicksGroupByOutputType[P]>
            : GetScalarType<T[P], PicksGroupByOutputType[P]>
        }
      >
    >


  export type PicksSelect = {
    id?: boolean
    slot?: boolean
    teamId?: boolean
    week?: boolean
    year?: boolean
    wcaId?: boolean
    eventId?: boolean
    points?: boolean
    team?: boolean | TeamArgs
  }


  export type PicksInclude = {
    team?: boolean | TeamArgs
  }

  export type PicksGetPayload<S extends boolean | null | undefined | PicksArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Picks :
    S extends undefined ? never :
    S extends { include: any } & (PicksArgs | PicksFindManyArgs)
    ? Picks  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'team' ? TeamGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PicksArgs | PicksFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'team' ? TeamGetPayload<S['select'][P]> :  P extends keyof Picks ? Picks[P] : never
  } 
      : Picks


  type PicksCountArgs = 
    Omit<PicksFindManyArgs, 'select' | 'include'> & {
      select?: PicksCountAggregateInputType | true
    }

  export interface PicksDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Picks that matches the filter.
     * @param {PicksFindUniqueArgs} args - Arguments to find a Picks
     * @example
     * // Get one Picks
     * const picks = await prisma.picks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PicksFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PicksFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Picks'> extends True ? Prisma__PicksClient<PicksGetPayload<T>> : Prisma__PicksClient<PicksGetPayload<T> | null, null>

    /**
     * Find one Picks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PicksFindUniqueOrThrowArgs} args - Arguments to find a Picks
     * @example
     * // Get one Picks
     * const picks = await prisma.picks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PicksFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PicksFindUniqueOrThrowArgs>
    ): Prisma__PicksClient<PicksGetPayload<T>>

    /**
     * Find the first Picks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicksFindFirstArgs} args - Arguments to find a Picks
     * @example
     * // Get one Picks
     * const picks = await prisma.picks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PicksFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PicksFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Picks'> extends True ? Prisma__PicksClient<PicksGetPayload<T>> : Prisma__PicksClient<PicksGetPayload<T> | null, null>

    /**
     * Find the first Picks that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicksFindFirstOrThrowArgs} args - Arguments to find a Picks
     * @example
     * // Get one Picks
     * const picks = await prisma.picks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PicksFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PicksFindFirstOrThrowArgs>
    ): Prisma__PicksClient<PicksGetPayload<T>>

    /**
     * Find zero or more Picks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Picks
     * const picks = await prisma.picks.findMany()
     * 
     * // Get first 10 Picks
     * const picks = await prisma.picks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const picksWithIdOnly = await prisma.picks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PicksFindManyArgs>(
      args?: SelectSubset<T, PicksFindManyArgs>
    ): Prisma.PrismaPromise<Array<PicksGetPayload<T>>>

    /**
     * Create a Picks.
     * @param {PicksCreateArgs} args - Arguments to create a Picks.
     * @example
     * // Create one Picks
     * const Picks = await prisma.picks.create({
     *   data: {
     *     // ... data to create a Picks
     *   }
     * })
     * 
    **/
    create<T extends PicksCreateArgs>(
      args: SelectSubset<T, PicksCreateArgs>
    ): Prisma__PicksClient<PicksGetPayload<T>>

    /**
     * Create many Picks.
     *     @param {PicksCreateManyArgs} args - Arguments to create many Picks.
     *     @example
     *     // Create many Picks
     *     const picks = await prisma.picks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PicksCreateManyArgs>(
      args?: SelectSubset<T, PicksCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Picks.
     * @param {PicksDeleteArgs} args - Arguments to delete one Picks.
     * @example
     * // Delete one Picks
     * const Picks = await prisma.picks.delete({
     *   where: {
     *     // ... filter to delete one Picks
     *   }
     * })
     * 
    **/
    delete<T extends PicksDeleteArgs>(
      args: SelectSubset<T, PicksDeleteArgs>
    ): Prisma__PicksClient<PicksGetPayload<T>>

    /**
     * Update one Picks.
     * @param {PicksUpdateArgs} args - Arguments to update one Picks.
     * @example
     * // Update one Picks
     * const picks = await prisma.picks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PicksUpdateArgs>(
      args: SelectSubset<T, PicksUpdateArgs>
    ): Prisma__PicksClient<PicksGetPayload<T>>

    /**
     * Delete zero or more Picks.
     * @param {PicksDeleteManyArgs} args - Arguments to filter Picks to delete.
     * @example
     * // Delete a few Picks
     * const { count } = await prisma.picks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PicksDeleteManyArgs>(
      args?: SelectSubset<T, PicksDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Picks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Picks
     * const picks = await prisma.picks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PicksUpdateManyArgs>(
      args: SelectSubset<T, PicksUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Picks.
     * @param {PicksUpsertArgs} args - Arguments to update or create a Picks.
     * @example
     * // Update or create a Picks
     * const picks = await prisma.picks.upsert({
     *   create: {
     *     // ... data to create a Picks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Picks we want to update
     *   }
     * })
    **/
    upsert<T extends PicksUpsertArgs>(
      args: SelectSubset<T, PicksUpsertArgs>
    ): Prisma__PicksClient<PicksGetPayload<T>>

    /**
     * Count the number of Picks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicksCountArgs} args - Arguments to filter Picks to count.
     * @example
     * // Count the number of Picks
     * const count = await prisma.picks.count({
     *   where: {
     *     // ... the filter for the Picks we want to count
     *   }
     * })
    **/
    count<T extends PicksCountArgs>(
      args?: Subset<T, PicksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PicksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Picks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PicksAggregateArgs>(args: Subset<T, PicksAggregateArgs>): Prisma.PrismaPromise<GetPicksAggregateType<T>>

    /**
     * Group by Picks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PicksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PicksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PicksGroupByArgs['orderBy'] }
        : { orderBy?: PicksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PicksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPicksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Picks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PicksClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    team<T extends TeamArgs= {}>(args?: Subset<T, TeamArgs>): Prisma__TeamClient<TeamGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Picks base type for findUnique actions
   */
  export type PicksFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
    /**
     * Filter, which Picks to fetch.
     */
    where: PicksWhereUniqueInput
  }

  /**
   * Picks findUnique
   */
  export interface PicksFindUniqueArgs extends PicksFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Picks findUniqueOrThrow
   */
  export type PicksFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
    /**
     * Filter, which Picks to fetch.
     */
    where: PicksWhereUniqueInput
  }


  /**
   * Picks base type for findFirst actions
   */
  export type PicksFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
    /**
     * Filter, which Picks to fetch.
     */
    where?: PicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Picks to fetch.
     */
    orderBy?: Enumerable<PicksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Picks.
     */
    cursor?: PicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Picks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Picks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Picks.
     */
    distinct?: Enumerable<PicksScalarFieldEnum>
  }

  /**
   * Picks findFirst
   */
  export interface PicksFindFirstArgs extends PicksFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Picks findFirstOrThrow
   */
  export type PicksFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
    /**
     * Filter, which Picks to fetch.
     */
    where?: PicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Picks to fetch.
     */
    orderBy?: Enumerable<PicksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Picks.
     */
    cursor?: PicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Picks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Picks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Picks.
     */
    distinct?: Enumerable<PicksScalarFieldEnum>
  }


  /**
   * Picks findMany
   */
  export type PicksFindManyArgs = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
    /**
     * Filter, which Picks to fetch.
     */
    where?: PicksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Picks to fetch.
     */
    orderBy?: Enumerable<PicksOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Picks.
     */
    cursor?: PicksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Picks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Picks.
     */
    skip?: number
    distinct?: Enumerable<PicksScalarFieldEnum>
  }


  /**
   * Picks create
   */
  export type PicksCreateArgs = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
    /**
     * The data needed to create a Picks.
     */
    data: XOR<PicksCreateInput, PicksUncheckedCreateInput>
  }


  /**
   * Picks createMany
   */
  export type PicksCreateManyArgs = {
    /**
     * The data used to create many Picks.
     */
    data: Enumerable<PicksCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Picks update
   */
  export type PicksUpdateArgs = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
    /**
     * The data needed to update a Picks.
     */
    data: XOR<PicksUpdateInput, PicksUncheckedUpdateInput>
    /**
     * Choose, which Picks to update.
     */
    where: PicksWhereUniqueInput
  }


  /**
   * Picks updateMany
   */
  export type PicksUpdateManyArgs = {
    /**
     * The data used to update Picks.
     */
    data: XOR<PicksUpdateManyMutationInput, PicksUncheckedUpdateManyInput>
    /**
     * Filter which Picks to update
     */
    where?: PicksWhereInput
  }


  /**
   * Picks upsert
   */
  export type PicksUpsertArgs = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
    /**
     * The filter to search for the Picks to update in case it exists.
     */
    where: PicksWhereUniqueInput
    /**
     * In case the Picks found by the `where` argument doesn't exist, create a new Picks with this data.
     */
    create: XOR<PicksCreateInput, PicksUncheckedCreateInput>
    /**
     * In case the Picks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PicksUpdateInput, PicksUncheckedUpdateInput>
  }


  /**
   * Picks delete
   */
  export type PicksDeleteArgs = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
    /**
     * Filter which Picks to delete.
     */
    where: PicksWhereUniqueInput
  }


  /**
   * Picks deleteMany
   */
  export type PicksDeleteManyArgs = {
    /**
     * Filter which Picks to delete
     */
    where?: PicksWhereInput
  }


  /**
   * Picks without action
   */
  export type PicksArgs = {
    /**
     * Select specific fields to fetch from the Picks
     */
    select?: PicksSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PicksInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const ChampionshipsScalarFieldEnum: {
    id: 'id',
    competition_id: 'competition_id',
    championship_type: 'championship_type'
  };

  export type ChampionshipsScalarFieldEnum = (typeof ChampionshipsScalarFieldEnum)[keyof typeof ChampionshipsScalarFieldEnum]


  export const CompetitionScalarFieldEnum: {
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
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const ContinentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    recordName: 'recordName',
    latitude: 'latitude',
    longitude: 'longitude',
    zoom: 'zoom'
  };

  export type ContinentsScalarFieldEnum = (typeof ContinentsScalarFieldEnum)[keyof typeof ContinentsScalarFieldEnum]


  export const CountriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    continentId: 'continentId',
    iso2: 'iso2'
  };

  export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum]


  export const Eligible_country_iso2s_for_championshipScalarFieldEnum: {
    id: 'id',
    championship_type: 'championship_type',
    eligible_country_iso2: 'eligible_country_iso2'
  };

  export type Eligible_country_iso2s_for_championshipScalarFieldEnum = (typeof Eligible_country_iso2s_for_championshipScalarFieldEnum)[keyof typeof Eligible_country_iso2s_for_championshipScalarFieldEnum]


  export const EventsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    rank: 'rank',
    format: 'format',
    cellName: 'cellName'
  };

  export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum]


  export const FormatsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sort_by: 'sort_by',
    sort_by_second: 'sort_by_second',
    expected_solve_count: 'expected_solve_count',
    trim_fastest_n: 'trim_fastest_n',
    trim_slowest_n: 'trim_slowest_n'
  };

  export type FormatsScalarFieldEnum = (typeof FormatsScalarFieldEnum)[keyof typeof FormatsScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    subid: 'subid',
    name: 'name',
    countryId: 'countryId',
    gender: 'gender'
  };

  export type PersonScalarFieldEnum = (typeof PersonScalarFieldEnum)[keyof typeof PersonScalarFieldEnum]


  export const PicksScalarFieldEnum: {
    id: 'id',
    slot: 'slot',
    teamId: 'teamId',
    week: 'week',
    year: 'year',
    wcaId: 'wcaId',
    eventId: 'eventId',
    points: 'points'
  };

  export type PicksScalarFieldEnum = (typeof PicksScalarFieldEnum)[keyof typeof PicksScalarFieldEnum]


  export const RanksAverageScalarFieldEnum: {
    personId: 'personId',
    eventId: 'eventId',
    best: 'best',
    worldRank: 'worldRank',
    continentRank: 'continentRank',
    countryRank: 'countryRank',
    personSubId: 'personSubId'
  };

  export type RanksAverageScalarFieldEnum = (typeof RanksAverageScalarFieldEnum)[keyof typeof RanksAverageScalarFieldEnum]


  export const RanksSingleScalarFieldEnum: {
    personId: 'personId',
    eventId: 'eventId',
    best: 'best',
    worldRank: 'worldRank',
    continentRank: 'continentRank',
    countryRank: 'countryRank',
    personSubId: 'personSubId'
  };

  export type RanksSingleScalarFieldEnum = (typeof RanksSingleScalarFieldEnum)[keyof typeof RanksSingleScalarFieldEnum]


  export const ResultsScalarFieldEnum: {
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
  };

  export type ResultsScalarFieldEnum = (typeof ResultsScalarFieldEnum)[keyof typeof ResultsScalarFieldEnum]


  export const RoundTypesScalarFieldEnum: {
    id: 'id',
    rank: 'rank',
    name: 'name',
    cellName: 'cellName',
    final: 'final'
  };

  export type RoundTypesScalarFieldEnum = (typeof RoundTypesScalarFieldEnum)[keyof typeof RoundTypesScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sid: 'sid',
    data: 'data',
    expiresAt: 'expiresAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TeamScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    avatar: 'avatar'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type CompetitionWhereInput = {
    AND?: Enumerable<CompetitionWhereInput>
    OR?: Enumerable<CompetitionWhereInput>
    NOT?: Enumerable<CompetitionWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    cityName?: StringFilter | string
    countryId?: StringFilter | string
    information?: StringNullableFilter | string | null
    year?: IntFilter | number
    month?: IntFilter | number
    day?: IntFilter | number
    endMonth?: IntFilter | number
    endDay?: IntFilter | number
    cancelled?: IntFilter | number
    eventSpecs?: StringNullableFilter | string | null
    wcaDelegate?: StringNullableFilter | string | null
    organiser?: StringNullableFilter | string | null
    venue?: StringFilter | string
    venueAddress?: StringNullableFilter | string | null
    venueDetails?: StringNullableFilter | string | null
    external_website?: StringNullableFilter | string | null
    cellName?: StringFilter | string
    latitude?: IntNullableFilter | number | null
    longitude?: IntNullableFilter | number | null
    Results?: ResultsListRelationFilter
  }

  export type CompetitionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cityName?: SortOrder
    countryId?: SortOrder
    information?: SortOrder
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
    endMonth?: SortOrder
    endDay?: SortOrder
    cancelled?: SortOrder
    eventSpecs?: SortOrder
    wcaDelegate?: SortOrder
    organiser?: SortOrder
    venue?: SortOrder
    venueAddress?: SortOrder
    venueDetails?: SortOrder
    external_website?: SortOrder
    cellName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    Results?: ResultsOrderByRelationAggregateInput
  }

  export type CompetitionWhereUniqueInput = {
    id?: string
  }

  export type CompetitionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cityName?: SortOrder
    countryId?: SortOrder
    information?: SortOrder
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
    endMonth?: SortOrder
    endDay?: SortOrder
    cancelled?: SortOrder
    eventSpecs?: SortOrder
    wcaDelegate?: SortOrder
    organiser?: SortOrder
    venue?: SortOrder
    venueAddress?: SortOrder
    venueDetails?: SortOrder
    external_website?: SortOrder
    cellName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    _count?: CompetitionCountOrderByAggregateInput
    _avg?: CompetitionAvgOrderByAggregateInput
    _max?: CompetitionMaxOrderByAggregateInput
    _min?: CompetitionMinOrderByAggregateInput
    _sum?: CompetitionSumOrderByAggregateInput
  }

  export type CompetitionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompetitionScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompetitionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompetitionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    cityName?: StringWithAggregatesFilter | string
    countryId?: StringWithAggregatesFilter | string
    information?: StringNullableWithAggregatesFilter | string | null
    year?: IntWithAggregatesFilter | number
    month?: IntWithAggregatesFilter | number
    day?: IntWithAggregatesFilter | number
    endMonth?: IntWithAggregatesFilter | number
    endDay?: IntWithAggregatesFilter | number
    cancelled?: IntWithAggregatesFilter | number
    eventSpecs?: StringNullableWithAggregatesFilter | string | null
    wcaDelegate?: StringNullableWithAggregatesFilter | string | null
    organiser?: StringNullableWithAggregatesFilter | string | null
    venue?: StringWithAggregatesFilter | string
    venueAddress?: StringNullableWithAggregatesFilter | string | null
    venueDetails?: StringNullableWithAggregatesFilter | string | null
    external_website?: StringNullableWithAggregatesFilter | string | null
    cellName?: StringWithAggregatesFilter | string
    latitude?: IntNullableWithAggregatesFilter | number | null
    longitude?: IntNullableWithAggregatesFilter | number | null
  }

  export type ContinentsWhereInput = {
    AND?: Enumerable<ContinentsWhereInput>
    OR?: Enumerable<ContinentsWhereInput>
    NOT?: Enumerable<ContinentsWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    recordName?: StringFilter | string
    latitude?: IntFilter | number
    longitude?: IntFilter | number
    zoom?: IntFilter | number
  }

  export type ContinentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    recordName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    zoom?: SortOrder
  }

  export type ContinentsWhereUniqueInput = {
    id?: string
  }

  export type ContinentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    recordName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    zoom?: SortOrder
    _count?: ContinentsCountOrderByAggregateInput
    _avg?: ContinentsAvgOrderByAggregateInput
    _max?: ContinentsMaxOrderByAggregateInput
    _min?: ContinentsMinOrderByAggregateInput
    _sum?: ContinentsSumOrderByAggregateInput
  }

  export type ContinentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContinentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContinentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContinentsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    recordName?: StringWithAggregatesFilter | string
    latitude?: IntWithAggregatesFilter | number
    longitude?: IntWithAggregatesFilter | number
    zoom?: IntWithAggregatesFilter | number
  }

  export type CountriesWhereInput = {
    AND?: Enumerable<CountriesWhereInput>
    OR?: Enumerable<CountriesWhereInput>
    NOT?: Enumerable<CountriesWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    continentId?: StringFilter | string
    iso2?: StringNullableFilter | string | null
  }

  export type CountriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    continentId?: SortOrder
    iso2?: SortOrder
  }

  export type CountriesWhereUniqueInput = {
    id?: string
  }

  export type CountriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    continentId?: SortOrder
    iso2?: SortOrder
    _count?: CountriesCountOrderByAggregateInput
    _max?: CountriesMaxOrderByAggregateInput
    _min?: CountriesMinOrderByAggregateInput
  }

  export type CountriesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CountriesScalarWhereWithAggregatesInput>
    OR?: Enumerable<CountriesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CountriesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    continentId?: StringWithAggregatesFilter | string
    iso2?: StringNullableWithAggregatesFilter | string | null
  }

  export type EventsWhereInput = {
    AND?: Enumerable<EventsWhereInput>
    OR?: Enumerable<EventsWhereInput>
    NOT?: Enumerable<EventsWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    rank?: IntFilter | number
    format?: StringFilter | string
    cellName?: StringFilter | string
  }

  export type EventsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    format?: SortOrder
    cellName?: SortOrder
  }

  export type EventsWhereUniqueInput = {
    id?: string
  }

  export type EventsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    format?: SortOrder
    cellName?: SortOrder
    _count?: EventsCountOrderByAggregateInput
    _avg?: EventsAvgOrderByAggregateInput
    _max?: EventsMaxOrderByAggregateInput
    _min?: EventsMinOrderByAggregateInput
    _sum?: EventsSumOrderByAggregateInput
  }

  export type EventsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<EventsScalarWhereWithAggregatesInput>
    OR?: Enumerable<EventsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<EventsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    rank?: IntWithAggregatesFilter | number
    format?: StringWithAggregatesFilter | string
    cellName?: StringWithAggregatesFilter | string
  }

  export type FormatsWhereInput = {
    AND?: Enumerable<FormatsWhereInput>
    OR?: Enumerable<FormatsWhereInput>
    NOT?: Enumerable<FormatsWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    sort_by?: StringFilter | string
    sort_by_second?: StringFilter | string
    expected_solve_count?: IntFilter | number
    trim_fastest_n?: IntFilter | number
    trim_slowest_n?: IntFilter | number
  }

  export type FormatsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sort_by?: SortOrder
    sort_by_second?: SortOrder
    expected_solve_count?: SortOrder
    trim_fastest_n?: SortOrder
    trim_slowest_n?: SortOrder
  }

  export type FormatsWhereUniqueInput = {
    id?: string
  }

  export type FormatsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sort_by?: SortOrder
    sort_by_second?: SortOrder
    expected_solve_count?: SortOrder
    trim_fastest_n?: SortOrder
    trim_slowest_n?: SortOrder
    _count?: FormatsCountOrderByAggregateInput
    _avg?: FormatsAvgOrderByAggregateInput
    _max?: FormatsMaxOrderByAggregateInput
    _min?: FormatsMinOrderByAggregateInput
    _sum?: FormatsSumOrderByAggregateInput
  }

  export type FormatsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FormatsScalarWhereWithAggregatesInput>
    OR?: Enumerable<FormatsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FormatsScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    sort_by?: StringWithAggregatesFilter | string
    sort_by_second?: StringWithAggregatesFilter | string
    expected_solve_count?: IntWithAggregatesFilter | number
    trim_fastest_n?: IntWithAggregatesFilter | number
    trim_slowest_n?: IntWithAggregatesFilter | number
  }

  export type PersonWhereInput = {
    AND?: Enumerable<PersonWhereInput>
    OR?: Enumerable<PersonWhereInput>
    NOT?: Enumerable<PersonWhereInput>
    id?: StringFilter | string
    subid?: IntFilter | number
    name?: StringNullableFilter | string | null
    countryId?: StringFilter | string
    gender?: StringNullableFilter | string | null
    Results?: ResultsListRelationFilter
    RanksAverage?: RanksAverageListRelationFilter
    RanksSingle?: RanksSingleListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    subid?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    gender?: SortOrder
    Results?: ResultsOrderByRelationAggregateInput
    RanksAverage?: RanksAverageOrderByRelationAggregateInput
    RanksSingle?: RanksSingleOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = {
    id_subid?: PersonIdSubidCompoundUniqueInput
  }

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    subid?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    gender?: SortOrder
    _count?: PersonCountOrderByAggregateInput
    _avg?: PersonAvgOrderByAggregateInput
    _max?: PersonMaxOrderByAggregateInput
    _min?: PersonMinOrderByAggregateInput
    _sum?: PersonSumOrderByAggregateInput
  }

  export type PersonScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PersonScalarWhereWithAggregatesInput>
    OR?: Enumerable<PersonScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PersonScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    subid?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    countryId?: StringWithAggregatesFilter | string
    gender?: StringNullableWithAggregatesFilter | string | null
  }

  export type RanksAverageWhereInput = {
    AND?: Enumerable<RanksAverageWhereInput>
    OR?: Enumerable<RanksAverageWhereInput>
    NOT?: Enumerable<RanksAverageWhereInput>
    personId?: StringFilter | string
    eventId?: StringFilter | string
    best?: IntFilter | number
    worldRank?: IntFilter | number
    continentRank?: IntFilter | number
    countryRank?: IntFilter | number
    personSubId?: IntFilter | number
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type RanksAverageOrderByWithRelationInput = {
    personId?: SortOrder
    eventId?: SortOrder
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type RanksAverageWhereUniqueInput = {
    personId_eventId?: RanksAveragePersonIdEventIdCompoundUniqueInput
  }

  export type RanksAverageOrderByWithAggregationInput = {
    personId?: SortOrder
    eventId?: SortOrder
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
    _count?: RanksAverageCountOrderByAggregateInput
    _avg?: RanksAverageAvgOrderByAggregateInput
    _max?: RanksAverageMaxOrderByAggregateInput
    _min?: RanksAverageMinOrderByAggregateInput
    _sum?: RanksAverageSumOrderByAggregateInput
  }

  export type RanksAverageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RanksAverageScalarWhereWithAggregatesInput>
    OR?: Enumerable<RanksAverageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RanksAverageScalarWhereWithAggregatesInput>
    personId?: StringWithAggregatesFilter | string
    eventId?: StringWithAggregatesFilter | string
    best?: IntWithAggregatesFilter | number
    worldRank?: IntWithAggregatesFilter | number
    continentRank?: IntWithAggregatesFilter | number
    countryRank?: IntWithAggregatesFilter | number
    personSubId?: IntWithAggregatesFilter | number
  }

  export type RanksSingleWhereInput = {
    AND?: Enumerable<RanksSingleWhereInput>
    OR?: Enumerable<RanksSingleWhereInput>
    NOT?: Enumerable<RanksSingleWhereInput>
    personId?: StringFilter | string
    eventId?: StringFilter | string
    best?: IntFilter | number
    worldRank?: IntFilter | number
    continentRank?: IntFilter | number
    countryRank?: IntFilter | number
    personSubId?: IntFilter | number
    person?: XOR<PersonRelationFilter, PersonWhereInput>
  }

  export type RanksSingleOrderByWithRelationInput = {
    personId?: SortOrder
    eventId?: SortOrder
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
    person?: PersonOrderByWithRelationInput
  }

  export type RanksSingleWhereUniqueInput = {
    personId_eventId?: RanksSinglePersonIdEventIdCompoundUniqueInput
  }

  export type RanksSingleOrderByWithAggregationInput = {
    personId?: SortOrder
    eventId?: SortOrder
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
    _count?: RanksSingleCountOrderByAggregateInput
    _avg?: RanksSingleAvgOrderByAggregateInput
    _max?: RanksSingleMaxOrderByAggregateInput
    _min?: RanksSingleMinOrderByAggregateInput
    _sum?: RanksSingleSumOrderByAggregateInput
  }

  export type RanksSingleScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RanksSingleScalarWhereWithAggregatesInput>
    OR?: Enumerable<RanksSingleScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RanksSingleScalarWhereWithAggregatesInput>
    personId?: StringWithAggregatesFilter | string
    eventId?: StringWithAggregatesFilter | string
    best?: IntWithAggregatesFilter | number
    worldRank?: IntWithAggregatesFilter | number
    continentRank?: IntWithAggregatesFilter | number
    countryRank?: IntWithAggregatesFilter | number
    personSubId?: IntWithAggregatesFilter | number
  }

  export type ResultsWhereInput = {
    AND?: Enumerable<ResultsWhereInput>
    OR?: Enumerable<ResultsWhereInput>
    NOT?: Enumerable<ResultsWhereInput>
    competitionId?: StringFilter | string
    eventId?: StringFilter | string
    roundTypeId?: StringFilter | string
    pos?: IntFilter | number
    best?: IntFilter | number
    average?: IntFilter | number
    personName?: StringNullableFilter | string | null
    personId?: StringFilter | string
    personCountryId?: StringNullableFilter | string | null
    formatId?: StringFilter | string
    value1?: IntFilter | number
    value2?: IntFilter | number
    value3?: IntFilter | number
    value4?: IntFilter | number
    value5?: IntFilter | number
    regionalSingleRecord?: StringNullableFilter | string | null
    regionalAverageRecord?: StringNullableFilter | string | null
    personsSubid?: IntFilter | number
    results?: XOR<PersonRelationFilter, PersonWhereInput>
    competition?: XOR<CompetitionRelationFilter, CompetitionWhereInput>
  }

  export type ResultsOrderByWithRelationInput = {
    competitionId?: SortOrder
    eventId?: SortOrder
    roundTypeId?: SortOrder
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    personName?: SortOrder
    personId?: SortOrder
    personCountryId?: SortOrder
    formatId?: SortOrder
    value1?: SortOrder
    value2?: SortOrder
    value3?: SortOrder
    value4?: SortOrder
    value5?: SortOrder
    regionalSingleRecord?: SortOrder
    regionalAverageRecord?: SortOrder
    personsSubid?: SortOrder
    results?: PersonOrderByWithRelationInput
    competition?: CompetitionOrderByWithRelationInput
  }

  export type ResultsWhereUniqueInput = {
    competitionId_eventId_roundTypeId_personId?: ResultsCompetitionIdEventIdRoundTypeIdPersonIdCompoundUniqueInput
  }

  export type ResultsOrderByWithAggregationInput = {
    competitionId?: SortOrder
    eventId?: SortOrder
    roundTypeId?: SortOrder
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    personName?: SortOrder
    personId?: SortOrder
    personCountryId?: SortOrder
    formatId?: SortOrder
    value1?: SortOrder
    value2?: SortOrder
    value3?: SortOrder
    value4?: SortOrder
    value5?: SortOrder
    regionalSingleRecord?: SortOrder
    regionalAverageRecord?: SortOrder
    personsSubid?: SortOrder
    _count?: ResultsCountOrderByAggregateInput
    _avg?: ResultsAvgOrderByAggregateInput
    _max?: ResultsMaxOrderByAggregateInput
    _min?: ResultsMinOrderByAggregateInput
    _sum?: ResultsSumOrderByAggregateInput
  }

  export type ResultsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ResultsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ResultsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ResultsScalarWhereWithAggregatesInput>
    competitionId?: StringWithAggregatesFilter | string
    eventId?: StringWithAggregatesFilter | string
    roundTypeId?: StringWithAggregatesFilter | string
    pos?: IntWithAggregatesFilter | number
    best?: IntWithAggregatesFilter | number
    average?: IntWithAggregatesFilter | number
    personName?: StringNullableWithAggregatesFilter | string | null
    personId?: StringWithAggregatesFilter | string
    personCountryId?: StringNullableWithAggregatesFilter | string | null
    formatId?: StringWithAggregatesFilter | string
    value1?: IntWithAggregatesFilter | number
    value2?: IntWithAggregatesFilter | number
    value3?: IntWithAggregatesFilter | number
    value4?: IntWithAggregatesFilter | number
    value5?: IntWithAggregatesFilter | number
    regionalSingleRecord?: StringNullableWithAggregatesFilter | string | null
    regionalAverageRecord?: StringNullableWithAggregatesFilter | string | null
    personsSubid?: IntWithAggregatesFilter | number
  }

  export type RoundTypesWhereInput = {
    AND?: Enumerable<RoundTypesWhereInput>
    OR?: Enumerable<RoundTypesWhereInput>
    NOT?: Enumerable<RoundTypesWhereInput>
    id?: StringFilter | string
    rank?: IntFilter | number
    name?: StringFilter | string
    cellName?: StringFilter | string
    final?: BoolFilter | boolean
  }

  export type RoundTypesOrderByWithRelationInput = {
    id?: SortOrder
    rank?: SortOrder
    name?: SortOrder
    cellName?: SortOrder
    final?: SortOrder
  }

  export type RoundTypesWhereUniqueInput = {
    id?: string
  }

  export type RoundTypesOrderByWithAggregationInput = {
    id?: SortOrder
    rank?: SortOrder
    name?: SortOrder
    cellName?: SortOrder
    final?: SortOrder
    _count?: RoundTypesCountOrderByAggregateInput
    _avg?: RoundTypesAvgOrderByAggregateInput
    _max?: RoundTypesMaxOrderByAggregateInput
    _min?: RoundTypesMinOrderByAggregateInput
    _sum?: RoundTypesSumOrderByAggregateInput
  }

  export type RoundTypesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<RoundTypesScalarWhereWithAggregatesInput>
    OR?: Enumerable<RoundTypesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<RoundTypesScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    rank?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    cellName?: StringWithAggregatesFilter | string
    final?: BoolWithAggregatesFilter | boolean
  }

  export type championshipsWhereInput = {
    AND?: Enumerable<championshipsWhereInput>
    OR?: Enumerable<championshipsWhereInput>
    NOT?: Enumerable<championshipsWhereInput>
    id?: IntFilter | number
    competition_id?: StringFilter | string
    championship_type?: StringFilter | string
  }

  export type championshipsOrderByWithRelationInput = {
    id?: SortOrder
    competition_id?: SortOrder
    championship_type?: SortOrder
  }

  export type championshipsWhereUniqueInput = {
    id?: number
  }

  export type championshipsOrderByWithAggregationInput = {
    id?: SortOrder
    competition_id?: SortOrder
    championship_type?: SortOrder
    _count?: championshipsCountOrderByAggregateInput
    _avg?: championshipsAvgOrderByAggregateInput
    _max?: championshipsMaxOrderByAggregateInput
    _min?: championshipsMinOrderByAggregateInput
    _sum?: championshipsSumOrderByAggregateInput
  }

  export type championshipsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<championshipsScalarWhereWithAggregatesInput>
    OR?: Enumerable<championshipsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<championshipsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    competition_id?: StringWithAggregatesFilter | string
    championship_type?: StringWithAggregatesFilter | string
  }

  export type eligible_country_iso2s_for_championshipWhereInput = {
    AND?: Enumerable<eligible_country_iso2s_for_championshipWhereInput>
    OR?: Enumerable<eligible_country_iso2s_for_championshipWhereInput>
    NOT?: Enumerable<eligible_country_iso2s_for_championshipWhereInput>
    id?: BigIntFilter | bigint | number
    championship_type?: StringFilter | string
    eligible_country_iso2?: StringFilter | string
  }

  export type eligible_country_iso2s_for_championshipOrderByWithRelationInput = {
    id?: SortOrder
    championship_type?: SortOrder
    eligible_country_iso2?: SortOrder
  }

  export type eligible_country_iso2s_for_championshipWhereUniqueInput = {
    id?: bigint | number
  }

  export type eligible_country_iso2s_for_championshipOrderByWithAggregationInput = {
    id?: SortOrder
    championship_type?: SortOrder
    eligible_country_iso2?: SortOrder
    _count?: eligible_country_iso2s_for_championshipCountOrderByAggregateInput
    _avg?: eligible_country_iso2s_for_championshipAvgOrderByAggregateInput
    _max?: eligible_country_iso2s_for_championshipMaxOrderByAggregateInput
    _min?: eligible_country_iso2s_for_championshipMinOrderByAggregateInput
    _sum?: eligible_country_iso2s_for_championshipSumOrderByAggregateInput
  }

  export type eligible_country_iso2s_for_championshipScalarWhereWithAggregatesInput = {
    AND?: Enumerable<eligible_country_iso2s_for_championshipScalarWhereWithAggregatesInput>
    OR?: Enumerable<eligible_country_iso2s_for_championshipScalarWhereWithAggregatesInput>
    NOT?: Enumerable<eligible_country_iso2s_for_championshipScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter | bigint | number
    championship_type?: StringWithAggregatesFilter | string
    eligible_country_iso2?: StringWithAggregatesFilter | string
  }

  export type SessionWhereInput = {
    AND?: Enumerable<SessionWhereInput>
    OR?: Enumerable<SessionWhereInput>
    NOT?: Enumerable<SessionWhereInput>
    id?: StringFilter | string
    sid?: StringFilter | string
    data?: StringFilter | string
    expiresAt?: DateTimeFilter | Date | string
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionWhereUniqueInput = {
    id?: string
    sid?: string
  }

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SessionScalarWhereWithAggregatesInput>
    OR?: Enumerable<SessionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SessionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    sid?: StringWithAggregatesFilter | string
    data?: StringWithAggregatesFilter | string
    expiresAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    email?: StringFilter | string
    avatar?: StringNullableFilter | string | null
    Team?: XOR<TeamRelationFilter, TeamWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    Team?: TeamOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    name?: string
    email?: string
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    email?: StringWithAggregatesFilter | string
    avatar?: StringNullableWithAggregatesFilter | string | null
  }

  export type TeamWhereInput = {
    AND?: Enumerable<TeamWhereInput>
    OR?: Enumerable<TeamWhereInput>
    NOT?: Enumerable<TeamWhereInput>
    id?: IntFilter | number
    userId?: IntFilter | number
    name?: StringFilter | string
    Picks?: PicksListRelationFilter
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    Picks?: PicksOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type TeamWhereUniqueInput = {
    id?: number
    userId?: number
    name?: string
  }

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TeamScalarWhereWithAggregatesInput>
    OR?: Enumerable<TeamScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TeamScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type PicksWhereInput = {
    AND?: Enumerable<PicksWhereInput>
    OR?: Enumerable<PicksWhereInput>
    NOT?: Enumerable<PicksWhereInput>
    id?: IntFilter | number
    slot?: IntFilter | number
    teamId?: IntFilter | number
    week?: IntFilter | number
    year?: IntFilter | number
    wcaId?: StringFilter | string
    eventId?: StringFilter | string
    points?: IntNullableFilter | number | null
    team?: XOR<TeamRelationFilter, TeamWhereInput>
  }

  export type PicksOrderByWithRelationInput = {
    id?: SortOrder
    slot?: SortOrder
    teamId?: SortOrder
    week?: SortOrder
    year?: SortOrder
    wcaId?: SortOrder
    eventId?: SortOrder
    points?: SortOrder
    team?: TeamOrderByWithRelationInput
  }

  export type PicksWhereUniqueInput = {
    id?: number
  }

  export type PicksOrderByWithAggregationInput = {
    id?: SortOrder
    slot?: SortOrder
    teamId?: SortOrder
    week?: SortOrder
    year?: SortOrder
    wcaId?: SortOrder
    eventId?: SortOrder
    points?: SortOrder
    _count?: PicksCountOrderByAggregateInput
    _avg?: PicksAvgOrderByAggregateInput
    _max?: PicksMaxOrderByAggregateInput
    _min?: PicksMinOrderByAggregateInput
    _sum?: PicksSumOrderByAggregateInput
  }

  export type PicksScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PicksScalarWhereWithAggregatesInput>
    OR?: Enumerable<PicksScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PicksScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    slot?: IntWithAggregatesFilter | number
    teamId?: IntWithAggregatesFilter | number
    week?: IntWithAggregatesFilter | number
    year?: IntWithAggregatesFilter | number
    wcaId?: StringWithAggregatesFilter | string
    eventId?: StringWithAggregatesFilter | string
    points?: IntNullableWithAggregatesFilter | number | null
  }

  export type CompetitionCreateInput = {
    id?: string
    name?: string
    cityName?: string
    countryId?: string
    information?: string | null
    year?: number
    month?: number
    day?: number
    endMonth?: number
    endDay?: number
    cancelled?: number
    eventSpecs?: string | null
    wcaDelegate?: string | null
    organiser?: string | null
    venue?: string
    venueAddress?: string | null
    venueDetails?: string | null
    external_website?: string | null
    cellName?: string
    latitude?: number | null
    longitude?: number | null
    Results?: ResultsCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateInput = {
    id?: string
    name?: string
    cityName?: string
    countryId?: string
    information?: string | null
    year?: number
    month?: number
    day?: number
    endMonth?: number
    endDay?: number
    cancelled?: number
    eventSpecs?: string | null
    wcaDelegate?: string | null
    organiser?: string | null
    venue?: string
    venueAddress?: string | null
    venueDetails?: string | null
    external_website?: string | null
    cellName?: string
    latitude?: number | null
    longitude?: number | null
    Results?: ResultsUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    information?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endDay?: IntFieldUpdateOperationsInput | number
    cancelled?: IntFieldUpdateOperationsInput | number
    eventSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    wcaDelegate?: NullableStringFieldUpdateOperationsInput | string | null
    organiser?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: StringFieldUpdateOperationsInput | string
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetails?: NullableStringFieldUpdateOperationsInput | string | null
    external_website?: NullableStringFieldUpdateOperationsInput | string | null
    cellName?: StringFieldUpdateOperationsInput | string
    latitude?: NullableIntFieldUpdateOperationsInput | number | null
    longitude?: NullableIntFieldUpdateOperationsInput | number | null
    Results?: ResultsUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    information?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endDay?: IntFieldUpdateOperationsInput | number
    cancelled?: IntFieldUpdateOperationsInput | number
    eventSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    wcaDelegate?: NullableStringFieldUpdateOperationsInput | string | null
    organiser?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: StringFieldUpdateOperationsInput | string
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetails?: NullableStringFieldUpdateOperationsInput | string | null
    external_website?: NullableStringFieldUpdateOperationsInput | string | null
    cellName?: StringFieldUpdateOperationsInput | string
    latitude?: NullableIntFieldUpdateOperationsInput | number | null
    longitude?: NullableIntFieldUpdateOperationsInput | number | null
    Results?: ResultsUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionCreateManyInput = {
    id?: string
    name?: string
    cityName?: string
    countryId?: string
    information?: string | null
    year?: number
    month?: number
    day?: number
    endMonth?: number
    endDay?: number
    cancelled?: number
    eventSpecs?: string | null
    wcaDelegate?: string | null
    organiser?: string | null
    venue?: string
    venueAddress?: string | null
    venueDetails?: string | null
    external_website?: string | null
    cellName?: string
    latitude?: number | null
    longitude?: number | null
  }

  export type CompetitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    information?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endDay?: IntFieldUpdateOperationsInput | number
    cancelled?: IntFieldUpdateOperationsInput | number
    eventSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    wcaDelegate?: NullableStringFieldUpdateOperationsInput | string | null
    organiser?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: StringFieldUpdateOperationsInput | string
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetails?: NullableStringFieldUpdateOperationsInput | string | null
    external_website?: NullableStringFieldUpdateOperationsInput | string | null
    cellName?: StringFieldUpdateOperationsInput | string
    latitude?: NullableIntFieldUpdateOperationsInput | number | null
    longitude?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CompetitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    information?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endDay?: IntFieldUpdateOperationsInput | number
    cancelled?: IntFieldUpdateOperationsInput | number
    eventSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    wcaDelegate?: NullableStringFieldUpdateOperationsInput | string | null
    organiser?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: StringFieldUpdateOperationsInput | string
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetails?: NullableStringFieldUpdateOperationsInput | string | null
    external_website?: NullableStringFieldUpdateOperationsInput | string | null
    cellName?: StringFieldUpdateOperationsInput | string
    latitude?: NullableIntFieldUpdateOperationsInput | number | null
    longitude?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ContinentsCreateInput = {
    id?: string
    name?: string
    recordName?: string
    latitude?: number
    longitude?: number
    zoom?: number
  }

  export type ContinentsUncheckedCreateInput = {
    id?: string
    name?: string
    recordName?: string
    latitude?: number
    longitude?: number
    zoom?: number
  }

  export type ContinentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recordName?: StringFieldUpdateOperationsInput | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
  }

  export type ContinentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recordName?: StringFieldUpdateOperationsInput | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
  }

  export type ContinentsCreateManyInput = {
    id?: string
    name?: string
    recordName?: string
    latitude?: number
    longitude?: number
    zoom?: number
  }

  export type ContinentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recordName?: StringFieldUpdateOperationsInput | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
  }

  export type ContinentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    recordName?: StringFieldUpdateOperationsInput | string
    latitude?: IntFieldUpdateOperationsInput | number
    longitude?: IntFieldUpdateOperationsInput | number
    zoom?: IntFieldUpdateOperationsInput | number
  }

  export type CountriesCreateInput = {
    id?: string
    name?: string
    continentId?: string
    iso2?: string | null
  }

  export type CountriesUncheckedCreateInput = {
    id?: string
    name?: string
    continentId?: string
    iso2?: string | null
  }

  export type CountriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    continentId?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    continentId?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountriesCreateManyInput = {
    id?: string
    name?: string
    continentId?: string
    iso2?: string | null
  }

  export type CountriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    continentId?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CountriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    continentId?: StringFieldUpdateOperationsInput | string
    iso2?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventsCreateInput = {
    id?: string
    name?: string
    rank?: number
    format?: string
    cellName?: string
  }

  export type EventsUncheckedCreateInput = {
    id?: string
    name?: string
    rank?: number
    format?: string
    cellName?: string
  }

  export type EventsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    cellName?: StringFieldUpdateOperationsInput | string
  }

  export type EventsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    cellName?: StringFieldUpdateOperationsInput | string
  }

  export type EventsCreateManyInput = {
    id?: string
    name?: string
    rank?: number
    format?: string
    cellName?: string
  }

  export type EventsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    cellName?: StringFieldUpdateOperationsInput | string
  }

  export type EventsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    format?: StringFieldUpdateOperationsInput | string
    cellName?: StringFieldUpdateOperationsInput | string
  }

  export type FormatsCreateInput = {
    id?: string
    name?: string
    sort_by: string
    sort_by_second: string
    expected_solve_count: number
    trim_fastest_n: number
    trim_slowest_n: number
  }

  export type FormatsUncheckedCreateInput = {
    id?: string
    name?: string
    sort_by: string
    sort_by_second: string
    expected_solve_count: number
    trim_fastest_n: number
    trim_slowest_n: number
  }

  export type FormatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_by?: StringFieldUpdateOperationsInput | string
    sort_by_second?: StringFieldUpdateOperationsInput | string
    expected_solve_count?: IntFieldUpdateOperationsInput | number
    trim_fastest_n?: IntFieldUpdateOperationsInput | number
    trim_slowest_n?: IntFieldUpdateOperationsInput | number
  }

  export type FormatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_by?: StringFieldUpdateOperationsInput | string
    sort_by_second?: StringFieldUpdateOperationsInput | string
    expected_solve_count?: IntFieldUpdateOperationsInput | number
    trim_fastest_n?: IntFieldUpdateOperationsInput | number
    trim_slowest_n?: IntFieldUpdateOperationsInput | number
  }

  export type FormatsCreateManyInput = {
    id?: string
    name?: string
    sort_by: string
    sort_by_second: string
    expected_solve_count: number
    trim_fastest_n: number
    trim_slowest_n: number
  }

  export type FormatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_by?: StringFieldUpdateOperationsInput | string
    sort_by_second?: StringFieldUpdateOperationsInput | string
    expected_solve_count?: IntFieldUpdateOperationsInput | number
    trim_fastest_n?: IntFieldUpdateOperationsInput | number
    trim_slowest_n?: IntFieldUpdateOperationsInput | number
  }

  export type FormatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sort_by?: StringFieldUpdateOperationsInput | string
    sort_by_second?: StringFieldUpdateOperationsInput | string
    expected_solve_count?: IntFieldUpdateOperationsInput | number
    trim_fastest_n?: IntFieldUpdateOperationsInput | number
    trim_slowest_n?: IntFieldUpdateOperationsInput | number
  }

  export type PersonCreateInput = {
    id?: string
    subid?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    Results?: ResultsCreateNestedManyWithoutResultsInput
    RanksAverage?: RanksAverageCreateNestedManyWithoutPersonInput
    RanksSingle?: RanksSingleCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    subid?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    Results?: ResultsUncheckedCreateNestedManyWithoutResultsInput
    RanksAverage?: RanksAverageUncheckedCreateNestedManyWithoutPersonInput
    RanksSingle?: RanksSingleUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subid?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Results?: ResultsUpdateManyWithoutResultsNestedInput
    RanksAverage?: RanksAverageUpdateManyWithoutPersonNestedInput
    RanksSingle?: RanksSingleUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subid?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Results?: ResultsUncheckedUpdateManyWithoutResultsNestedInput
    RanksAverage?: RanksAverageUncheckedUpdateManyWithoutPersonNestedInput
    RanksSingle?: RanksSingleUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    subid?: number
    name?: string | null
    countryId?: string
    gender?: string | null
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subid?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    subid?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RanksAverageCreateInput = {
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
    person?: PersonCreateNestedOneWithoutRanksAverageInput
  }

  export type RanksAverageUncheckedCreateInput = {
    personId?: string
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
    personSubId?: number
  }

  export type RanksAverageUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
    person?: PersonUpdateOneRequiredWithoutRanksAverageNestedInput
  }

  export type RanksAverageUncheckedUpdateInput = {
    personId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
    personSubId?: IntFieldUpdateOperationsInput | number
  }

  export type RanksAverageCreateManyInput = {
    personId?: string
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
    personSubId?: number
  }

  export type RanksAverageUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
  }

  export type RanksAverageUncheckedUpdateManyInput = {
    personId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
    personSubId?: IntFieldUpdateOperationsInput | number
  }

  export type RanksSingleCreateInput = {
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
    person?: PersonCreateNestedOneWithoutRanksSingleInput
  }

  export type RanksSingleUncheckedCreateInput = {
    personId?: string
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
    personSubId?: number
  }

  export type RanksSingleUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
    person?: PersonUpdateOneRequiredWithoutRanksSingleNestedInput
  }

  export type RanksSingleUncheckedUpdateInput = {
    personId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
    personSubId?: IntFieldUpdateOperationsInput | number
  }

  export type RanksSingleCreateManyInput = {
    personId?: string
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
    personSubId?: number
  }

  export type RanksSingleUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
  }

  export type RanksSingleUncheckedUpdateManyInput = {
    personId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
    personSubId?: IntFieldUpdateOperationsInput | number
  }

  export type ResultsCreateInput = {
    eventId?: string
    roundTypeId?: string
    pos?: number
    best?: number
    average?: number
    personName?: string | null
    personCountryId?: string | null
    formatId?: string
    value1?: number
    value2?: number
    value3?: number
    value4?: number
    value5?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    results?: PersonCreateNestedOneWithoutResultsInput
    competition?: CompetitionCreateNestedOneWithoutResultsInput
  }

  export type ResultsUncheckedCreateInput = {
    competitionId?: string
    eventId?: string
    roundTypeId?: string
    pos?: number
    best?: number
    average?: number
    personName?: string | null
    personId?: string
    personCountryId?: string | null
    formatId?: string
    value1?: number
    value2?: number
    value3?: number
    value4?: number
    value5?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    personsSubid?: number
  }

  export type ResultsUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    personName?: NullableStringFieldUpdateOperationsInput | string | null
    personCountryId?: NullableStringFieldUpdateOperationsInput | string | null
    formatId?: StringFieldUpdateOperationsInput | string
    value1?: IntFieldUpdateOperationsInput | number
    value2?: IntFieldUpdateOperationsInput | number
    value3?: IntFieldUpdateOperationsInput | number
    value4?: IntFieldUpdateOperationsInput | number
    value5?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    results?: PersonUpdateOneRequiredWithoutResultsNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultsUncheckedUpdateInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    personName?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: StringFieldUpdateOperationsInput | string
    personCountryId?: NullableStringFieldUpdateOperationsInput | string | null
    formatId?: StringFieldUpdateOperationsInput | string
    value1?: IntFieldUpdateOperationsInput | number
    value2?: IntFieldUpdateOperationsInput | number
    value3?: IntFieldUpdateOperationsInput | number
    value4?: IntFieldUpdateOperationsInput | number
    value5?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    personsSubid?: IntFieldUpdateOperationsInput | number
  }

  export type ResultsCreateManyInput = {
    competitionId?: string
    eventId?: string
    roundTypeId?: string
    pos?: number
    best?: number
    average?: number
    personName?: string | null
    personId?: string
    personCountryId?: string | null
    formatId?: string
    value1?: number
    value2?: number
    value3?: number
    value4?: number
    value5?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    personsSubid?: number
  }

  export type ResultsUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    personName?: NullableStringFieldUpdateOperationsInput | string | null
    personCountryId?: NullableStringFieldUpdateOperationsInput | string | null
    formatId?: StringFieldUpdateOperationsInput | string
    value1?: IntFieldUpdateOperationsInput | number
    value2?: IntFieldUpdateOperationsInput | number
    value3?: IntFieldUpdateOperationsInput | number
    value4?: IntFieldUpdateOperationsInput | number
    value5?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResultsUncheckedUpdateManyInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    personName?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: StringFieldUpdateOperationsInput | string
    personCountryId?: NullableStringFieldUpdateOperationsInput | string | null
    formatId?: StringFieldUpdateOperationsInput | string
    value1?: IntFieldUpdateOperationsInput | number
    value2?: IntFieldUpdateOperationsInput | number
    value3?: IntFieldUpdateOperationsInput | number
    value4?: IntFieldUpdateOperationsInput | number
    value5?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    personsSubid?: IntFieldUpdateOperationsInput | number
  }

  export type RoundTypesCreateInput = {
    id?: string
    rank?: number
    name?: string
    cellName?: string
    final: boolean
  }

  export type RoundTypesUncheckedCreateInput = {
    id?: string
    rank?: number
    name?: string
    cellName?: string
    final: boolean
  }

  export type RoundTypesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cellName?: StringFieldUpdateOperationsInput | string
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoundTypesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cellName?: StringFieldUpdateOperationsInput | string
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoundTypesCreateManyInput = {
    id?: string
    rank?: number
    name?: string
    cellName?: string
    final: boolean
  }

  export type RoundTypesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cellName?: StringFieldUpdateOperationsInput | string
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoundTypesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rank?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    cellName?: StringFieldUpdateOperationsInput | string
    final?: BoolFieldUpdateOperationsInput | boolean
  }

  export type championshipsCreateInput = {
    id?: number
    competition_id: string
    championship_type: string
  }

  export type championshipsUncheckedCreateInput = {
    id?: number
    competition_id: string
    championship_type: string
  }

  export type championshipsUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    competition_id?: StringFieldUpdateOperationsInput | string
    championship_type?: StringFieldUpdateOperationsInput | string
  }

  export type championshipsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    competition_id?: StringFieldUpdateOperationsInput | string
    championship_type?: StringFieldUpdateOperationsInput | string
  }

  export type championshipsCreateManyInput = {
    id?: number
    competition_id: string
    championship_type: string
  }

  export type championshipsUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    competition_id?: StringFieldUpdateOperationsInput | string
    championship_type?: StringFieldUpdateOperationsInput | string
  }

  export type championshipsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    competition_id?: StringFieldUpdateOperationsInput | string
    championship_type?: StringFieldUpdateOperationsInput | string
  }

  export type eligible_country_iso2s_for_championshipCreateInput = {
    id?: bigint | number
    championship_type: string
    eligible_country_iso2: string
  }

  export type eligible_country_iso2s_for_championshipUncheckedCreateInput = {
    id?: bigint | number
    championship_type: string
    eligible_country_iso2: string
  }

  export type eligible_country_iso2s_for_championshipUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    championship_type?: StringFieldUpdateOperationsInput | string
    eligible_country_iso2?: StringFieldUpdateOperationsInput | string
  }

  export type eligible_country_iso2s_for_championshipUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    championship_type?: StringFieldUpdateOperationsInput | string
    eligible_country_iso2?: StringFieldUpdateOperationsInput | string
  }

  export type eligible_country_iso2s_for_championshipCreateManyInput = {
    id?: bigint | number
    championship_type: string
    eligible_country_iso2: string
  }

  export type eligible_country_iso2s_for_championshipUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    championship_type?: StringFieldUpdateOperationsInput | string
    eligible_country_iso2?: StringFieldUpdateOperationsInput | string
  }

  export type eligible_country_iso2s_for_championshipUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    championship_type?: StringFieldUpdateOperationsInput | string
    eligible_country_iso2?: StringFieldUpdateOperationsInput | string
  }

  export type SessionCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUncheckedCreateInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id: string
    sid: string
    data: string
    expiresAt: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sid?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    avatar?: string | null
    Team?: TeamCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    avatar?: string | null
    Team?: TeamUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Team?: TeamUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    avatar?: string | null
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamCreateInput = {
    name: string
    Picks?: PicksCreateNestedManyWithoutTeamInput
    user: UserCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: number
    userId: number
    name: string
    Picks?: PicksUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Picks?: PicksUpdateManyWithoutTeamNestedInput
    user?: UserUpdateOneRequiredWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Picks?: PicksUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: number
    userId: number
    name: string
  }

  export type TeamUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PicksCreateInput = {
    slot: number
    week: number
    year: number
    wcaId: string
    eventId: string
    points?: number | null
    team: TeamCreateNestedOneWithoutPicksInput
  }

  export type PicksUncheckedCreateInput = {
    id?: number
    slot: number
    teamId: number
    week: number
    year: number
    wcaId: string
    eventId: string
    points?: number | null
  }

  export type PicksUpdateInput = {
    slot?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    wcaId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
    team?: TeamUpdateOneRequiredWithoutPicksNestedInput
  }

  export type PicksUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    wcaId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PicksCreateManyInput = {
    id?: number
    slot: number
    teamId: number
    week: number
    year: number
    wcaId: string
    eventId: string
    points?: number | null
  }

  export type PicksUpdateManyMutationInput = {
    slot?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    wcaId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PicksUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    teamId?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    wcaId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type ResultsListRelationFilter = {
    every?: ResultsWhereInput
    some?: ResultsWhereInput
    none?: ResultsWhereInput
  }

  export type ResultsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityName?: SortOrder
    countryId?: SortOrder
    information?: SortOrder
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
    endMonth?: SortOrder
    endDay?: SortOrder
    cancelled?: SortOrder
    eventSpecs?: SortOrder
    wcaDelegate?: SortOrder
    organiser?: SortOrder
    venue?: SortOrder
    venueAddress?: SortOrder
    venueDetails?: SortOrder
    external_website?: SortOrder
    cellName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CompetitionAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
    endMonth?: SortOrder
    endDay?: SortOrder
    cancelled?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CompetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityName?: SortOrder
    countryId?: SortOrder
    information?: SortOrder
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
    endMonth?: SortOrder
    endDay?: SortOrder
    cancelled?: SortOrder
    eventSpecs?: SortOrder
    wcaDelegate?: SortOrder
    organiser?: SortOrder
    venue?: SortOrder
    venueAddress?: SortOrder
    venueDetails?: SortOrder
    external_website?: SortOrder
    cellName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CompetitionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityName?: SortOrder
    countryId?: SortOrder
    information?: SortOrder
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
    endMonth?: SortOrder
    endDay?: SortOrder
    cancelled?: SortOrder
    eventSpecs?: SortOrder
    wcaDelegate?: SortOrder
    organiser?: SortOrder
    venue?: SortOrder
    venueAddress?: SortOrder
    venueDetails?: SortOrder
    external_website?: SortOrder
    cellName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type CompetitionSumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    day?: SortOrder
    endMonth?: SortOrder
    endDay?: SortOrder
    cancelled?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type ContinentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recordName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    zoom?: SortOrder
  }

  export type ContinentsAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    zoom?: SortOrder
  }

  export type ContinentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recordName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    zoom?: SortOrder
  }

  export type ContinentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    recordName?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    zoom?: SortOrder
  }

  export type ContinentsSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
    zoom?: SortOrder
  }

  export type CountriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    continentId?: SortOrder
    iso2?: SortOrder
  }

  export type CountriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    continentId?: SortOrder
    iso2?: SortOrder
  }

  export type CountriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    continentId?: SortOrder
    iso2?: SortOrder
  }

  export type EventsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    format?: SortOrder
    cellName?: SortOrder
  }

  export type EventsAvgOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type EventsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    format?: SortOrder
    cellName?: SortOrder
  }

  export type EventsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    rank?: SortOrder
    format?: SortOrder
    cellName?: SortOrder
  }

  export type EventsSumOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type FormatsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sort_by?: SortOrder
    sort_by_second?: SortOrder
    expected_solve_count?: SortOrder
    trim_fastest_n?: SortOrder
    trim_slowest_n?: SortOrder
  }

  export type FormatsAvgOrderByAggregateInput = {
    expected_solve_count?: SortOrder
    trim_fastest_n?: SortOrder
    trim_slowest_n?: SortOrder
  }

  export type FormatsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sort_by?: SortOrder
    sort_by_second?: SortOrder
    expected_solve_count?: SortOrder
    trim_fastest_n?: SortOrder
    trim_slowest_n?: SortOrder
  }

  export type FormatsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sort_by?: SortOrder
    sort_by_second?: SortOrder
    expected_solve_count?: SortOrder
    trim_fastest_n?: SortOrder
    trim_slowest_n?: SortOrder
  }

  export type FormatsSumOrderByAggregateInput = {
    expected_solve_count?: SortOrder
    trim_fastest_n?: SortOrder
    trim_slowest_n?: SortOrder
  }

  export type RanksAverageListRelationFilter = {
    every?: RanksAverageWhereInput
    some?: RanksAverageWhereInput
    none?: RanksAverageWhereInput
  }

  export type RanksSingleListRelationFilter = {
    every?: RanksSingleWhereInput
    some?: RanksSingleWhereInput
    none?: RanksSingleWhereInput
  }

  export type RanksAverageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RanksSingleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonIdSubidCompoundUniqueInput = {
    id: string
    subid: number
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    subid?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    gender?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    subid?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    subid?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    gender?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    subid?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    gender?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    subid?: SortOrder
  }

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type RanksAveragePersonIdEventIdCompoundUniqueInput = {
    personId: string
    eventId: string
  }

  export type RanksAverageCountOrderByAggregateInput = {
    personId?: SortOrder
    eventId?: SortOrder
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
  }

  export type RanksAverageAvgOrderByAggregateInput = {
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
  }

  export type RanksAverageMaxOrderByAggregateInput = {
    personId?: SortOrder
    eventId?: SortOrder
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
  }

  export type RanksAverageMinOrderByAggregateInput = {
    personId?: SortOrder
    eventId?: SortOrder
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
  }

  export type RanksAverageSumOrderByAggregateInput = {
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
  }

  export type RanksSinglePersonIdEventIdCompoundUniqueInput = {
    personId: string
    eventId: string
  }

  export type RanksSingleCountOrderByAggregateInput = {
    personId?: SortOrder
    eventId?: SortOrder
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
  }

  export type RanksSingleAvgOrderByAggregateInput = {
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
  }

  export type RanksSingleMaxOrderByAggregateInput = {
    personId?: SortOrder
    eventId?: SortOrder
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
  }

  export type RanksSingleMinOrderByAggregateInput = {
    personId?: SortOrder
    eventId?: SortOrder
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
  }

  export type RanksSingleSumOrderByAggregateInput = {
    best?: SortOrder
    worldRank?: SortOrder
    continentRank?: SortOrder
    countryRank?: SortOrder
    personSubId?: SortOrder
  }

  export type CompetitionRelationFilter = {
    is?: CompetitionWhereInput
    isNot?: CompetitionWhereInput
  }

  export type ResultsCompetitionIdEventIdRoundTypeIdPersonIdCompoundUniqueInput = {
    competitionId: string
    eventId: string
    roundTypeId: string
    personId: string
  }

  export type ResultsCountOrderByAggregateInput = {
    competitionId?: SortOrder
    eventId?: SortOrder
    roundTypeId?: SortOrder
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    personName?: SortOrder
    personId?: SortOrder
    personCountryId?: SortOrder
    formatId?: SortOrder
    value1?: SortOrder
    value2?: SortOrder
    value3?: SortOrder
    value4?: SortOrder
    value5?: SortOrder
    regionalSingleRecord?: SortOrder
    regionalAverageRecord?: SortOrder
    personsSubid?: SortOrder
  }

  export type ResultsAvgOrderByAggregateInput = {
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    value1?: SortOrder
    value2?: SortOrder
    value3?: SortOrder
    value4?: SortOrder
    value5?: SortOrder
    personsSubid?: SortOrder
  }

  export type ResultsMaxOrderByAggregateInput = {
    competitionId?: SortOrder
    eventId?: SortOrder
    roundTypeId?: SortOrder
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    personName?: SortOrder
    personId?: SortOrder
    personCountryId?: SortOrder
    formatId?: SortOrder
    value1?: SortOrder
    value2?: SortOrder
    value3?: SortOrder
    value4?: SortOrder
    value5?: SortOrder
    regionalSingleRecord?: SortOrder
    regionalAverageRecord?: SortOrder
    personsSubid?: SortOrder
  }

  export type ResultsMinOrderByAggregateInput = {
    competitionId?: SortOrder
    eventId?: SortOrder
    roundTypeId?: SortOrder
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    personName?: SortOrder
    personId?: SortOrder
    personCountryId?: SortOrder
    formatId?: SortOrder
    value1?: SortOrder
    value2?: SortOrder
    value3?: SortOrder
    value4?: SortOrder
    value5?: SortOrder
    regionalSingleRecord?: SortOrder
    regionalAverageRecord?: SortOrder
    personsSubid?: SortOrder
  }

  export type ResultsSumOrderByAggregateInput = {
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    value1?: SortOrder
    value2?: SortOrder
    value3?: SortOrder
    value4?: SortOrder
    value5?: SortOrder
    personsSubid?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type RoundTypesCountOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    name?: SortOrder
    cellName?: SortOrder
    final?: SortOrder
  }

  export type RoundTypesAvgOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type RoundTypesMaxOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    name?: SortOrder
    cellName?: SortOrder
    final?: SortOrder
  }

  export type RoundTypesMinOrderByAggregateInput = {
    id?: SortOrder
    rank?: SortOrder
    name?: SortOrder
    cellName?: SortOrder
    final?: SortOrder
  }

  export type RoundTypesSumOrderByAggregateInput = {
    rank?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type championshipsCountOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    championship_type?: SortOrder
  }

  export type championshipsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type championshipsMaxOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    championship_type?: SortOrder
  }

  export type championshipsMinOrderByAggregateInput = {
    id?: SortOrder
    competition_id?: SortOrder
    championship_type?: SortOrder
  }

  export type championshipsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type eligible_country_iso2s_for_championshipCountOrderByAggregateInput = {
    id?: SortOrder
    championship_type?: SortOrder
    eligible_country_iso2?: SortOrder
  }

  export type eligible_country_iso2s_for_championshipAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type eligible_country_iso2s_for_championshipMaxOrderByAggregateInput = {
    id?: SortOrder
    championship_type?: SortOrder
    eligible_country_iso2?: SortOrder
  }

  export type eligible_country_iso2s_for_championshipMinOrderByAggregateInput = {
    id?: SortOrder
    championship_type?: SortOrder
    eligible_country_iso2?: SortOrder
  }

  export type eligible_country_iso2s_for_championshipSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sid?: SortOrder
    data?: SortOrder
    expiresAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type TeamRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    avatar?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PicksListRelationFilter = {
    every?: PicksWhereInput
    some?: PicksWhereInput
    none?: PicksWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PicksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PicksCountOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    teamId?: SortOrder
    week?: SortOrder
    year?: SortOrder
    wcaId?: SortOrder
    eventId?: SortOrder
    points?: SortOrder
  }

  export type PicksAvgOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    teamId?: SortOrder
    week?: SortOrder
    year?: SortOrder
    points?: SortOrder
  }

  export type PicksMaxOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    teamId?: SortOrder
    week?: SortOrder
    year?: SortOrder
    wcaId?: SortOrder
    eventId?: SortOrder
    points?: SortOrder
  }

  export type PicksMinOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    teamId?: SortOrder
    week?: SortOrder
    year?: SortOrder
    wcaId?: SortOrder
    eventId?: SortOrder
    points?: SortOrder
  }

  export type PicksSumOrderByAggregateInput = {
    id?: SortOrder
    slot?: SortOrder
    teamId?: SortOrder
    week?: SortOrder
    year?: SortOrder
    points?: SortOrder
  }

  export type ResultsCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<Enumerable<ResultsCreateWithoutCompetitionInput>, Enumerable<ResultsUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<ResultsCreateOrConnectWithoutCompetitionInput>
    createMany?: ResultsCreateManyCompetitionInputEnvelope
    connect?: Enumerable<ResultsWhereUniqueInput>
  }

  export type ResultsUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<Enumerable<ResultsCreateWithoutCompetitionInput>, Enumerable<ResultsUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<ResultsCreateOrConnectWithoutCompetitionInput>
    createMany?: ResultsCreateManyCompetitionInputEnvelope
    connect?: Enumerable<ResultsWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ResultsUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<Enumerable<ResultsCreateWithoutCompetitionInput>, Enumerable<ResultsUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<ResultsCreateOrConnectWithoutCompetitionInput>
    upsert?: Enumerable<ResultsUpsertWithWhereUniqueWithoutCompetitionInput>
    createMany?: ResultsCreateManyCompetitionInputEnvelope
    set?: Enumerable<ResultsWhereUniqueInput>
    disconnect?: Enumerable<ResultsWhereUniqueInput>
    delete?: Enumerable<ResultsWhereUniqueInput>
    connect?: Enumerable<ResultsWhereUniqueInput>
    update?: Enumerable<ResultsUpdateWithWhereUniqueWithoutCompetitionInput>
    updateMany?: Enumerable<ResultsUpdateManyWithWhereWithoutCompetitionInput>
    deleteMany?: Enumerable<ResultsScalarWhereInput>
  }

  export type ResultsUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<Enumerable<ResultsCreateWithoutCompetitionInput>, Enumerable<ResultsUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<ResultsCreateOrConnectWithoutCompetitionInput>
    upsert?: Enumerable<ResultsUpsertWithWhereUniqueWithoutCompetitionInput>
    createMany?: ResultsCreateManyCompetitionInputEnvelope
    set?: Enumerable<ResultsWhereUniqueInput>
    disconnect?: Enumerable<ResultsWhereUniqueInput>
    delete?: Enumerable<ResultsWhereUniqueInput>
    connect?: Enumerable<ResultsWhereUniqueInput>
    update?: Enumerable<ResultsUpdateWithWhereUniqueWithoutCompetitionInput>
    updateMany?: Enumerable<ResultsUpdateManyWithWhereWithoutCompetitionInput>
    deleteMany?: Enumerable<ResultsScalarWhereInput>
  }

  export type ResultsCreateNestedManyWithoutResultsInput = {
    create?: XOR<Enumerable<ResultsCreateWithoutResultsInput>, Enumerable<ResultsUncheckedCreateWithoutResultsInput>>
    connectOrCreate?: Enumerable<ResultsCreateOrConnectWithoutResultsInput>
    createMany?: ResultsCreateManyResultsInputEnvelope
    connect?: Enumerable<ResultsWhereUniqueInput>
  }

  export type RanksAverageCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<RanksAverageCreateWithoutPersonInput>, Enumerable<RanksAverageUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RanksAverageCreateOrConnectWithoutPersonInput>
    createMany?: RanksAverageCreateManyPersonInputEnvelope
    connect?: Enumerable<RanksAverageWhereUniqueInput>
  }

  export type RanksSingleCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<RanksSingleCreateWithoutPersonInput>, Enumerable<RanksSingleUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RanksSingleCreateOrConnectWithoutPersonInput>
    createMany?: RanksSingleCreateManyPersonInputEnvelope
    connect?: Enumerable<RanksSingleWhereUniqueInput>
  }

  export type ResultsUncheckedCreateNestedManyWithoutResultsInput = {
    create?: XOR<Enumerable<ResultsCreateWithoutResultsInput>, Enumerable<ResultsUncheckedCreateWithoutResultsInput>>
    connectOrCreate?: Enumerable<ResultsCreateOrConnectWithoutResultsInput>
    createMany?: ResultsCreateManyResultsInputEnvelope
    connect?: Enumerable<ResultsWhereUniqueInput>
  }

  export type RanksAverageUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<RanksAverageCreateWithoutPersonInput>, Enumerable<RanksAverageUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RanksAverageCreateOrConnectWithoutPersonInput>
    createMany?: RanksAverageCreateManyPersonInputEnvelope
    connect?: Enumerable<RanksAverageWhereUniqueInput>
  }

  export type RanksSingleUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<RanksSingleCreateWithoutPersonInput>, Enumerable<RanksSingleUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RanksSingleCreateOrConnectWithoutPersonInput>
    createMany?: RanksSingleCreateManyPersonInputEnvelope
    connect?: Enumerable<RanksSingleWhereUniqueInput>
  }

  export type ResultsUpdateManyWithoutResultsNestedInput = {
    create?: XOR<Enumerable<ResultsCreateWithoutResultsInput>, Enumerable<ResultsUncheckedCreateWithoutResultsInput>>
    connectOrCreate?: Enumerable<ResultsCreateOrConnectWithoutResultsInput>
    upsert?: Enumerable<ResultsUpsertWithWhereUniqueWithoutResultsInput>
    createMany?: ResultsCreateManyResultsInputEnvelope
    set?: Enumerable<ResultsWhereUniqueInput>
    disconnect?: Enumerable<ResultsWhereUniqueInput>
    delete?: Enumerable<ResultsWhereUniqueInput>
    connect?: Enumerable<ResultsWhereUniqueInput>
    update?: Enumerable<ResultsUpdateWithWhereUniqueWithoutResultsInput>
    updateMany?: Enumerable<ResultsUpdateManyWithWhereWithoutResultsInput>
    deleteMany?: Enumerable<ResultsScalarWhereInput>
  }

  export type RanksAverageUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<RanksAverageCreateWithoutPersonInput>, Enumerable<RanksAverageUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RanksAverageCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<RanksAverageUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: RanksAverageCreateManyPersonInputEnvelope
    set?: Enumerable<RanksAverageWhereUniqueInput>
    disconnect?: Enumerable<RanksAverageWhereUniqueInput>
    delete?: Enumerable<RanksAverageWhereUniqueInput>
    connect?: Enumerable<RanksAverageWhereUniqueInput>
    update?: Enumerable<RanksAverageUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<RanksAverageUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<RanksAverageScalarWhereInput>
  }

  export type RanksSingleUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<RanksSingleCreateWithoutPersonInput>, Enumerable<RanksSingleUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RanksSingleCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<RanksSingleUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: RanksSingleCreateManyPersonInputEnvelope
    set?: Enumerable<RanksSingleWhereUniqueInput>
    disconnect?: Enumerable<RanksSingleWhereUniqueInput>
    delete?: Enumerable<RanksSingleWhereUniqueInput>
    connect?: Enumerable<RanksSingleWhereUniqueInput>
    update?: Enumerable<RanksSingleUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<RanksSingleUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<RanksSingleScalarWhereInput>
  }

  export type ResultsUncheckedUpdateManyWithoutResultsNestedInput = {
    create?: XOR<Enumerable<ResultsCreateWithoutResultsInput>, Enumerable<ResultsUncheckedCreateWithoutResultsInput>>
    connectOrCreate?: Enumerable<ResultsCreateOrConnectWithoutResultsInput>
    upsert?: Enumerable<ResultsUpsertWithWhereUniqueWithoutResultsInput>
    createMany?: ResultsCreateManyResultsInputEnvelope
    set?: Enumerable<ResultsWhereUniqueInput>
    disconnect?: Enumerable<ResultsWhereUniqueInput>
    delete?: Enumerable<ResultsWhereUniqueInput>
    connect?: Enumerable<ResultsWhereUniqueInput>
    update?: Enumerable<ResultsUpdateWithWhereUniqueWithoutResultsInput>
    updateMany?: Enumerable<ResultsUpdateManyWithWhereWithoutResultsInput>
    deleteMany?: Enumerable<ResultsScalarWhereInput>
  }

  export type RanksAverageUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<RanksAverageCreateWithoutPersonInput>, Enumerable<RanksAverageUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RanksAverageCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<RanksAverageUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: RanksAverageCreateManyPersonInputEnvelope
    set?: Enumerable<RanksAverageWhereUniqueInput>
    disconnect?: Enumerable<RanksAverageWhereUniqueInput>
    delete?: Enumerable<RanksAverageWhereUniqueInput>
    connect?: Enumerable<RanksAverageWhereUniqueInput>
    update?: Enumerable<RanksAverageUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<RanksAverageUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<RanksAverageScalarWhereInput>
  }

  export type RanksSingleUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<RanksSingleCreateWithoutPersonInput>, Enumerable<RanksSingleUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<RanksSingleCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<RanksSingleUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: RanksSingleCreateManyPersonInputEnvelope
    set?: Enumerable<RanksSingleWhereUniqueInput>
    disconnect?: Enumerable<RanksSingleWhereUniqueInput>
    delete?: Enumerable<RanksSingleWhereUniqueInput>
    connect?: Enumerable<RanksSingleWhereUniqueInput>
    update?: Enumerable<RanksSingleUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<RanksSingleUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<RanksSingleScalarWhereInput>
  }

  export type PersonCreateNestedOneWithoutRanksAverageInput = {
    create?: XOR<PersonCreateWithoutRanksAverageInput, PersonUncheckedCreateWithoutRanksAverageInput>
    connectOrCreate?: PersonCreateOrConnectWithoutRanksAverageInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutRanksAverageNestedInput = {
    create?: XOR<PersonCreateWithoutRanksAverageInput, PersonUncheckedCreateWithoutRanksAverageInput>
    connectOrCreate?: PersonCreateOrConnectWithoutRanksAverageInput
    upsert?: PersonUpsertWithoutRanksAverageInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutRanksAverageInput, PersonUncheckedUpdateWithoutRanksAverageInput>
  }

  export type PersonCreateNestedOneWithoutRanksSingleInput = {
    create?: XOR<PersonCreateWithoutRanksSingleInput, PersonUncheckedCreateWithoutRanksSingleInput>
    connectOrCreate?: PersonCreateOrConnectWithoutRanksSingleInput
    connect?: PersonWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutRanksSingleNestedInput = {
    create?: XOR<PersonCreateWithoutRanksSingleInput, PersonUncheckedCreateWithoutRanksSingleInput>
    connectOrCreate?: PersonCreateOrConnectWithoutRanksSingleInput
    upsert?: PersonUpsertWithoutRanksSingleInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutRanksSingleInput, PersonUncheckedUpdateWithoutRanksSingleInput>
  }

  export type PersonCreateNestedOneWithoutResultsInput = {
    create?: XOR<PersonCreateWithoutResultsInput, PersonUncheckedCreateWithoutResultsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutResultsInput
    connect?: PersonWhereUniqueInput
  }

  export type CompetitionCreateNestedOneWithoutResultsInput = {
    create?: XOR<CompetitionCreateWithoutResultsInput, CompetitionUncheckedCreateWithoutResultsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutResultsInput
    connect?: CompetitionWhereUniqueInput
  }

  export type PersonUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<PersonCreateWithoutResultsInput, PersonUncheckedCreateWithoutResultsInput>
    connectOrCreate?: PersonCreateOrConnectWithoutResultsInput
    upsert?: PersonUpsertWithoutResultsInput
    connect?: PersonWhereUniqueInput
    update?: XOR<PersonUpdateWithoutResultsInput, PersonUncheckedUpdateWithoutResultsInput>
  }

  export type CompetitionUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<CompetitionCreateWithoutResultsInput, CompetitionUncheckedCreateWithoutResultsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutResultsInput
    upsert?: CompetitionUpsertWithoutResultsInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<CompetitionUpdateWithoutResultsInput, CompetitionUncheckedUpdateWithoutResultsInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TeamCreateNestedOneWithoutUserInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput
    upsert?: TeamUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
  }

  export type TeamUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput
    upsert?: TeamUpsertWithoutUserInput
    disconnect?: boolean
    delete?: boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
  }

  export type PicksCreateNestedManyWithoutTeamInput = {
    create?: XOR<Enumerable<PicksCreateWithoutTeamInput>, Enumerable<PicksUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<PicksCreateOrConnectWithoutTeamInput>
    createMany?: PicksCreateManyTeamInputEnvelope
    connect?: Enumerable<PicksWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput
    connect?: UserWhereUniqueInput
  }

  export type PicksUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<Enumerable<PicksCreateWithoutTeamInput>, Enumerable<PicksUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<PicksCreateOrConnectWithoutTeamInput>
    createMany?: PicksCreateManyTeamInputEnvelope
    connect?: Enumerable<PicksWhereUniqueInput>
  }

  export type PicksUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Enumerable<PicksCreateWithoutTeamInput>, Enumerable<PicksUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<PicksCreateOrConnectWithoutTeamInput>
    upsert?: Enumerable<PicksUpsertWithWhereUniqueWithoutTeamInput>
    createMany?: PicksCreateManyTeamInputEnvelope
    set?: Enumerable<PicksWhereUniqueInput>
    disconnect?: Enumerable<PicksWhereUniqueInput>
    delete?: Enumerable<PicksWhereUniqueInput>
    connect?: Enumerable<PicksWhereUniqueInput>
    update?: Enumerable<PicksUpdateWithWhereUniqueWithoutTeamInput>
    updateMany?: Enumerable<PicksUpdateManyWithWhereWithoutTeamInput>
    deleteMany?: Enumerable<PicksScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput
    upsert?: UserUpsertWithoutTeamInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type PicksUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<Enumerable<PicksCreateWithoutTeamInput>, Enumerable<PicksUncheckedCreateWithoutTeamInput>>
    connectOrCreate?: Enumerable<PicksCreateOrConnectWithoutTeamInput>
    upsert?: Enumerable<PicksUpsertWithWhereUniqueWithoutTeamInput>
    createMany?: PicksCreateManyTeamInputEnvelope
    set?: Enumerable<PicksWhereUniqueInput>
    disconnect?: Enumerable<PicksWhereUniqueInput>
    delete?: Enumerable<PicksWhereUniqueInput>
    connect?: Enumerable<PicksWhereUniqueInput>
    update?: Enumerable<PicksUpdateWithWhereUniqueWithoutTeamInput>
    updateMany?: Enumerable<PicksUpdateManyWithWhereWithoutTeamInput>
    deleteMany?: Enumerable<PicksScalarWhereInput>
  }

  export type TeamCreateNestedOneWithoutPicksInput = {
    create?: XOR<TeamCreateWithoutPicksInput, TeamUncheckedCreateWithoutPicksInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPicksInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutPicksNestedInput = {
    create?: XOR<TeamCreateWithoutPicksInput, TeamUncheckedCreateWithoutPicksInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPicksInput
    upsert?: TeamUpsertWithoutPicksInput
    connect?: TeamWhereUniqueInput
    update?: XOR<TeamUpdateWithoutPicksInput, TeamUncheckedUpdateWithoutPicksInput>
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedBigIntFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntFilter | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter = {
    equals?: bigint | number
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number
    lte?: bigint | number
    gt?: bigint | number
    gte?: bigint | number
    not?: NestedBigIntWithAggregatesFilter | bigint | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedBigIntFilter
    _min?: NestedBigIntFilter
    _max?: NestedBigIntFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type ResultsCreateWithoutCompetitionInput = {
    eventId?: string
    roundTypeId?: string
    pos?: number
    best?: number
    average?: number
    personName?: string | null
    personCountryId?: string | null
    formatId?: string
    value1?: number
    value2?: number
    value3?: number
    value4?: number
    value5?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    results?: PersonCreateNestedOneWithoutResultsInput
  }

  export type ResultsUncheckedCreateWithoutCompetitionInput = {
    eventId?: string
    roundTypeId?: string
    pos?: number
    best?: number
    average?: number
    personName?: string | null
    personId?: string
    personCountryId?: string | null
    formatId?: string
    value1?: number
    value2?: number
    value3?: number
    value4?: number
    value5?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    personsSubid?: number
  }

  export type ResultsCreateOrConnectWithoutCompetitionInput = {
    where: ResultsWhereUniqueInput
    create: XOR<ResultsCreateWithoutCompetitionInput, ResultsUncheckedCreateWithoutCompetitionInput>
  }

  export type ResultsCreateManyCompetitionInputEnvelope = {
    data: Enumerable<ResultsCreateManyCompetitionInput>
    skipDuplicates?: boolean
  }

  export type ResultsUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: ResultsWhereUniqueInput
    update: XOR<ResultsUpdateWithoutCompetitionInput, ResultsUncheckedUpdateWithoutCompetitionInput>
    create: XOR<ResultsCreateWithoutCompetitionInput, ResultsUncheckedCreateWithoutCompetitionInput>
  }

  export type ResultsUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: ResultsWhereUniqueInput
    data: XOR<ResultsUpdateWithoutCompetitionInput, ResultsUncheckedUpdateWithoutCompetitionInput>
  }

  export type ResultsUpdateManyWithWhereWithoutCompetitionInput = {
    where: ResultsScalarWhereInput
    data: XOR<ResultsUpdateManyMutationInput, ResultsUncheckedUpdateManyWithoutResultsInput>
  }

  export type ResultsScalarWhereInput = {
    AND?: Enumerable<ResultsScalarWhereInput>
    OR?: Enumerable<ResultsScalarWhereInput>
    NOT?: Enumerable<ResultsScalarWhereInput>
    competitionId?: StringFilter | string
    eventId?: StringFilter | string
    roundTypeId?: StringFilter | string
    pos?: IntFilter | number
    best?: IntFilter | number
    average?: IntFilter | number
    personName?: StringNullableFilter | string | null
    personId?: StringFilter | string
    personCountryId?: StringNullableFilter | string | null
    formatId?: StringFilter | string
    value1?: IntFilter | number
    value2?: IntFilter | number
    value3?: IntFilter | number
    value4?: IntFilter | number
    value5?: IntFilter | number
    regionalSingleRecord?: StringNullableFilter | string | null
    regionalAverageRecord?: StringNullableFilter | string | null
    personsSubid?: IntFilter | number
  }

  export type ResultsCreateWithoutResultsInput = {
    eventId?: string
    roundTypeId?: string
    pos?: number
    best?: number
    average?: number
    personName?: string | null
    personCountryId?: string | null
    formatId?: string
    value1?: number
    value2?: number
    value3?: number
    value4?: number
    value5?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    competition?: CompetitionCreateNestedOneWithoutResultsInput
  }

  export type ResultsUncheckedCreateWithoutResultsInput = {
    competitionId?: string
    eventId?: string
    roundTypeId?: string
    pos?: number
    best?: number
    average?: number
    personName?: string | null
    personCountryId?: string | null
    formatId?: string
    value1?: number
    value2?: number
    value3?: number
    value4?: number
    value5?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
  }

  export type ResultsCreateOrConnectWithoutResultsInput = {
    where: ResultsWhereUniqueInput
    create: XOR<ResultsCreateWithoutResultsInput, ResultsUncheckedCreateWithoutResultsInput>
  }

  export type ResultsCreateManyResultsInputEnvelope = {
    data: Enumerable<ResultsCreateManyResultsInput>
    skipDuplicates?: boolean
  }

  export type RanksAverageCreateWithoutPersonInput = {
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
  }

  export type RanksAverageUncheckedCreateWithoutPersonInput = {
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
  }

  export type RanksAverageCreateOrConnectWithoutPersonInput = {
    where: RanksAverageWhereUniqueInput
    create: XOR<RanksAverageCreateWithoutPersonInput, RanksAverageUncheckedCreateWithoutPersonInput>
  }

  export type RanksAverageCreateManyPersonInputEnvelope = {
    data: Enumerable<RanksAverageCreateManyPersonInput>
    skipDuplicates?: boolean
  }

  export type RanksSingleCreateWithoutPersonInput = {
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
  }

  export type RanksSingleUncheckedCreateWithoutPersonInput = {
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
  }

  export type RanksSingleCreateOrConnectWithoutPersonInput = {
    where: RanksSingleWhereUniqueInput
    create: XOR<RanksSingleCreateWithoutPersonInput, RanksSingleUncheckedCreateWithoutPersonInput>
  }

  export type RanksSingleCreateManyPersonInputEnvelope = {
    data: Enumerable<RanksSingleCreateManyPersonInput>
    skipDuplicates?: boolean
  }

  export type ResultsUpsertWithWhereUniqueWithoutResultsInput = {
    where: ResultsWhereUniqueInput
    update: XOR<ResultsUpdateWithoutResultsInput, ResultsUncheckedUpdateWithoutResultsInput>
    create: XOR<ResultsCreateWithoutResultsInput, ResultsUncheckedCreateWithoutResultsInput>
  }

  export type ResultsUpdateWithWhereUniqueWithoutResultsInput = {
    where: ResultsWhereUniqueInput
    data: XOR<ResultsUpdateWithoutResultsInput, ResultsUncheckedUpdateWithoutResultsInput>
  }

  export type ResultsUpdateManyWithWhereWithoutResultsInput = {
    where: ResultsScalarWhereInput
    data: XOR<ResultsUpdateManyMutationInput, ResultsUncheckedUpdateManyWithoutResultsInput>
  }

  export type RanksAverageUpsertWithWhereUniqueWithoutPersonInput = {
    where: RanksAverageWhereUniqueInput
    update: XOR<RanksAverageUpdateWithoutPersonInput, RanksAverageUncheckedUpdateWithoutPersonInput>
    create: XOR<RanksAverageCreateWithoutPersonInput, RanksAverageUncheckedCreateWithoutPersonInput>
  }

  export type RanksAverageUpdateWithWhereUniqueWithoutPersonInput = {
    where: RanksAverageWhereUniqueInput
    data: XOR<RanksAverageUpdateWithoutPersonInput, RanksAverageUncheckedUpdateWithoutPersonInput>
  }

  export type RanksAverageUpdateManyWithWhereWithoutPersonInput = {
    where: RanksAverageScalarWhereInput
    data: XOR<RanksAverageUpdateManyMutationInput, RanksAverageUncheckedUpdateManyWithoutRanksAverageInput>
  }

  export type RanksAverageScalarWhereInput = {
    AND?: Enumerable<RanksAverageScalarWhereInput>
    OR?: Enumerable<RanksAverageScalarWhereInput>
    NOT?: Enumerable<RanksAverageScalarWhereInput>
    personId?: StringFilter | string
    eventId?: StringFilter | string
    best?: IntFilter | number
    worldRank?: IntFilter | number
    continentRank?: IntFilter | number
    countryRank?: IntFilter | number
    personSubId?: IntFilter | number
  }

  export type RanksSingleUpsertWithWhereUniqueWithoutPersonInput = {
    where: RanksSingleWhereUniqueInput
    update: XOR<RanksSingleUpdateWithoutPersonInput, RanksSingleUncheckedUpdateWithoutPersonInput>
    create: XOR<RanksSingleCreateWithoutPersonInput, RanksSingleUncheckedCreateWithoutPersonInput>
  }

  export type RanksSingleUpdateWithWhereUniqueWithoutPersonInput = {
    where: RanksSingleWhereUniqueInput
    data: XOR<RanksSingleUpdateWithoutPersonInput, RanksSingleUncheckedUpdateWithoutPersonInput>
  }

  export type RanksSingleUpdateManyWithWhereWithoutPersonInput = {
    where: RanksSingleScalarWhereInput
    data: XOR<RanksSingleUpdateManyMutationInput, RanksSingleUncheckedUpdateManyWithoutRanksSingleInput>
  }

  export type RanksSingleScalarWhereInput = {
    AND?: Enumerable<RanksSingleScalarWhereInput>
    OR?: Enumerable<RanksSingleScalarWhereInput>
    NOT?: Enumerable<RanksSingleScalarWhereInput>
    personId?: StringFilter | string
    eventId?: StringFilter | string
    best?: IntFilter | number
    worldRank?: IntFilter | number
    continentRank?: IntFilter | number
    countryRank?: IntFilter | number
    personSubId?: IntFilter | number
  }

  export type PersonCreateWithoutRanksAverageInput = {
    id?: string
    subid?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    Results?: ResultsCreateNestedManyWithoutResultsInput
    RanksSingle?: RanksSingleCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutRanksAverageInput = {
    id?: string
    subid?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    Results?: ResultsUncheckedCreateNestedManyWithoutResultsInput
    RanksSingle?: RanksSingleUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutRanksAverageInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutRanksAverageInput, PersonUncheckedCreateWithoutRanksAverageInput>
  }

  export type PersonUpsertWithoutRanksAverageInput = {
    update: XOR<PersonUpdateWithoutRanksAverageInput, PersonUncheckedUpdateWithoutRanksAverageInput>
    create: XOR<PersonCreateWithoutRanksAverageInput, PersonUncheckedCreateWithoutRanksAverageInput>
  }

  export type PersonUpdateWithoutRanksAverageInput = {
    id?: StringFieldUpdateOperationsInput | string
    subid?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Results?: ResultsUpdateManyWithoutResultsNestedInput
    RanksSingle?: RanksSingleUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutRanksAverageInput = {
    id?: StringFieldUpdateOperationsInput | string
    subid?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Results?: ResultsUncheckedUpdateManyWithoutResultsNestedInput
    RanksSingle?: RanksSingleUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutRanksSingleInput = {
    id?: string
    subid?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    Results?: ResultsCreateNestedManyWithoutResultsInput
    RanksAverage?: RanksAverageCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutRanksSingleInput = {
    id?: string
    subid?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    Results?: ResultsUncheckedCreateNestedManyWithoutResultsInput
    RanksAverage?: RanksAverageUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutRanksSingleInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutRanksSingleInput, PersonUncheckedCreateWithoutRanksSingleInput>
  }

  export type PersonUpsertWithoutRanksSingleInput = {
    update: XOR<PersonUpdateWithoutRanksSingleInput, PersonUncheckedUpdateWithoutRanksSingleInput>
    create: XOR<PersonCreateWithoutRanksSingleInput, PersonUncheckedCreateWithoutRanksSingleInput>
  }

  export type PersonUpdateWithoutRanksSingleInput = {
    id?: StringFieldUpdateOperationsInput | string
    subid?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Results?: ResultsUpdateManyWithoutResultsNestedInput
    RanksAverage?: RanksAverageUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutRanksSingleInput = {
    id?: StringFieldUpdateOperationsInput | string
    subid?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    Results?: ResultsUncheckedUpdateManyWithoutResultsNestedInput
    RanksAverage?: RanksAverageUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateWithoutResultsInput = {
    id?: string
    subid?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    RanksAverage?: RanksAverageCreateNestedManyWithoutPersonInput
    RanksSingle?: RanksSingleCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateWithoutResultsInput = {
    id?: string
    subid?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    RanksAverage?: RanksAverageUncheckedCreateNestedManyWithoutPersonInput
    RanksSingle?: RanksSingleUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonCreateOrConnectWithoutResultsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutResultsInput, PersonUncheckedCreateWithoutResultsInput>
  }

  export type CompetitionCreateWithoutResultsInput = {
    id?: string
    name?: string
    cityName?: string
    countryId?: string
    information?: string | null
    year?: number
    month?: number
    day?: number
    endMonth?: number
    endDay?: number
    cancelled?: number
    eventSpecs?: string | null
    wcaDelegate?: string | null
    organiser?: string | null
    venue?: string
    venueAddress?: string | null
    venueDetails?: string | null
    external_website?: string | null
    cellName?: string
    latitude?: number | null
    longitude?: number | null
  }

  export type CompetitionUncheckedCreateWithoutResultsInput = {
    id?: string
    name?: string
    cityName?: string
    countryId?: string
    information?: string | null
    year?: number
    month?: number
    day?: number
    endMonth?: number
    endDay?: number
    cancelled?: number
    eventSpecs?: string | null
    wcaDelegate?: string | null
    organiser?: string | null
    venue?: string
    venueAddress?: string | null
    venueDetails?: string | null
    external_website?: string | null
    cellName?: string
    latitude?: number | null
    longitude?: number | null
  }

  export type CompetitionCreateOrConnectWithoutResultsInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutResultsInput, CompetitionUncheckedCreateWithoutResultsInput>
  }

  export type PersonUpsertWithoutResultsInput = {
    update: XOR<PersonUpdateWithoutResultsInput, PersonUncheckedUpdateWithoutResultsInput>
    create: XOR<PersonCreateWithoutResultsInput, PersonUncheckedCreateWithoutResultsInput>
  }

  export type PersonUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subid?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    RanksAverage?: RanksAverageUpdateManyWithoutPersonNestedInput
    RanksSingle?: RanksSingleUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    subid?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    RanksAverage?: RanksAverageUncheckedUpdateManyWithoutPersonNestedInput
    RanksSingle?: RanksSingleUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type CompetitionUpsertWithoutResultsInput = {
    update: XOR<CompetitionUpdateWithoutResultsInput, CompetitionUncheckedUpdateWithoutResultsInput>
    create: XOR<CompetitionCreateWithoutResultsInput, CompetitionUncheckedCreateWithoutResultsInput>
  }

  export type CompetitionUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    information?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endDay?: IntFieldUpdateOperationsInput | number
    cancelled?: IntFieldUpdateOperationsInput | number
    eventSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    wcaDelegate?: NullableStringFieldUpdateOperationsInput | string | null
    organiser?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: StringFieldUpdateOperationsInput | string
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetails?: NullableStringFieldUpdateOperationsInput | string | null
    external_website?: NullableStringFieldUpdateOperationsInput | string | null
    cellName?: StringFieldUpdateOperationsInput | string
    latitude?: NullableIntFieldUpdateOperationsInput | number | null
    longitude?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type CompetitionUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityName?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    information?: NullableStringFieldUpdateOperationsInput | string | null
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    day?: IntFieldUpdateOperationsInput | number
    endMonth?: IntFieldUpdateOperationsInput | number
    endDay?: IntFieldUpdateOperationsInput | number
    cancelled?: IntFieldUpdateOperationsInput | number
    eventSpecs?: NullableStringFieldUpdateOperationsInput | string | null
    wcaDelegate?: NullableStringFieldUpdateOperationsInput | string | null
    organiser?: NullableStringFieldUpdateOperationsInput | string | null
    venue?: StringFieldUpdateOperationsInput | string
    venueAddress?: NullableStringFieldUpdateOperationsInput | string | null
    venueDetails?: NullableStringFieldUpdateOperationsInput | string | null
    external_website?: NullableStringFieldUpdateOperationsInput | string | null
    cellName?: StringFieldUpdateOperationsInput | string
    latitude?: NullableIntFieldUpdateOperationsInput | number | null
    longitude?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TeamCreateWithoutUserInput = {
    name: string
    Picks?: PicksCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    Picks?: PicksUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutUserInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
  }

  export type TeamUpsertWithoutUserInput = {
    update: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
    create: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
  }

  export type TeamUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    Picks?: PicksUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    Picks?: PicksUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PicksCreateWithoutTeamInput = {
    slot: number
    week: number
    year: number
    wcaId: string
    eventId: string
    points?: number | null
  }

  export type PicksUncheckedCreateWithoutTeamInput = {
    id?: number
    slot: number
    week: number
    year: number
    wcaId: string
    eventId: string
    points?: number | null
  }

  export type PicksCreateOrConnectWithoutTeamInput = {
    where: PicksWhereUniqueInput
    create: XOR<PicksCreateWithoutTeamInput, PicksUncheckedCreateWithoutTeamInput>
  }

  export type PicksCreateManyTeamInputEnvelope = {
    data: Enumerable<PicksCreateManyTeamInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutTeamInput = {
    name: string
    email: string
    avatar?: string | null
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: number
    name: string
    email: string
    avatar?: string | null
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type PicksUpsertWithWhereUniqueWithoutTeamInput = {
    where: PicksWhereUniqueInput
    update: XOR<PicksUpdateWithoutTeamInput, PicksUncheckedUpdateWithoutTeamInput>
    create: XOR<PicksCreateWithoutTeamInput, PicksUncheckedCreateWithoutTeamInput>
  }

  export type PicksUpdateWithWhereUniqueWithoutTeamInput = {
    where: PicksWhereUniqueInput
    data: XOR<PicksUpdateWithoutTeamInput, PicksUncheckedUpdateWithoutTeamInput>
  }

  export type PicksUpdateManyWithWhereWithoutTeamInput = {
    where: PicksScalarWhereInput
    data: XOR<PicksUpdateManyMutationInput, PicksUncheckedUpdateManyWithoutPicksInput>
  }

  export type PicksScalarWhereInput = {
    AND?: Enumerable<PicksScalarWhereInput>
    OR?: Enumerable<PicksScalarWhereInput>
    NOT?: Enumerable<PicksScalarWhereInput>
    id?: IntFilter | number
    slot?: IntFilter | number
    teamId?: IntFilter | number
    week?: IntFilter | number
    year?: IntFilter | number
    wcaId?: StringFilter | string
    eventId?: StringFilter | string
    points?: IntNullableFilter | number | null
  }

  export type UserUpsertWithoutTeamInput = {
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithoutTeamInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamCreateWithoutPicksInput = {
    name: string
    user: UserCreateNestedOneWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutPicksInput = {
    id?: number
    userId: number
    name: string
  }

  export type TeamCreateOrConnectWithoutPicksInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPicksInput, TeamUncheckedCreateWithoutPicksInput>
  }

  export type TeamUpsertWithoutPicksInput = {
    update: XOR<TeamUpdateWithoutPicksInput, TeamUncheckedUpdateWithoutPicksInput>
    create: XOR<TeamCreateWithoutPicksInput, TeamUncheckedCreateWithoutPicksInput>
  }

  export type TeamUpdateWithoutPicksInput = {
    name?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutPicksInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ResultsCreateManyCompetitionInput = {
    eventId?: string
    roundTypeId?: string
    pos?: number
    best?: number
    average?: number
    personName?: string | null
    personId?: string
    personCountryId?: string | null
    formatId?: string
    value1?: number
    value2?: number
    value3?: number
    value4?: number
    value5?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    personsSubid?: number
  }

  export type ResultsUpdateWithoutCompetitionInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    personName?: NullableStringFieldUpdateOperationsInput | string | null
    personCountryId?: NullableStringFieldUpdateOperationsInput | string | null
    formatId?: StringFieldUpdateOperationsInput | string
    value1?: IntFieldUpdateOperationsInput | number
    value2?: IntFieldUpdateOperationsInput | number
    value3?: IntFieldUpdateOperationsInput | number
    value4?: IntFieldUpdateOperationsInput | number
    value5?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    results?: PersonUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultsUncheckedUpdateWithoutCompetitionInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    personName?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: StringFieldUpdateOperationsInput | string
    personCountryId?: NullableStringFieldUpdateOperationsInput | string | null
    formatId?: StringFieldUpdateOperationsInput | string
    value1?: IntFieldUpdateOperationsInput | number
    value2?: IntFieldUpdateOperationsInput | number
    value3?: IntFieldUpdateOperationsInput | number
    value4?: IntFieldUpdateOperationsInput | number
    value5?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    personsSubid?: IntFieldUpdateOperationsInput | number
  }

  export type ResultsUncheckedUpdateManyWithoutResultsInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    personName?: NullableStringFieldUpdateOperationsInput | string | null
    personId?: StringFieldUpdateOperationsInput | string
    personCountryId?: NullableStringFieldUpdateOperationsInput | string | null
    formatId?: StringFieldUpdateOperationsInput | string
    value1?: IntFieldUpdateOperationsInput | number
    value2?: IntFieldUpdateOperationsInput | number
    value3?: IntFieldUpdateOperationsInput | number
    value4?: IntFieldUpdateOperationsInput | number
    value5?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    personsSubid?: IntFieldUpdateOperationsInput | number
  }

  export type ResultsCreateManyResultsInput = {
    competitionId?: string
    eventId?: string
    roundTypeId?: string
    pos?: number
    best?: number
    average?: number
    personName?: string | null
    personCountryId?: string | null
    formatId?: string
    value1?: number
    value2?: number
    value3?: number
    value4?: number
    value5?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
  }

  export type RanksAverageCreateManyPersonInput = {
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
  }

  export type RanksSingleCreateManyPersonInput = {
    eventId?: string
    best?: number
    worldRank?: number
    continentRank?: number
    countryRank?: number
  }

  export type ResultsUpdateWithoutResultsInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    personName?: NullableStringFieldUpdateOperationsInput | string | null
    personCountryId?: NullableStringFieldUpdateOperationsInput | string | null
    formatId?: StringFieldUpdateOperationsInput | string
    value1?: IntFieldUpdateOperationsInput | number
    value2?: IntFieldUpdateOperationsInput | number
    value3?: IntFieldUpdateOperationsInput | number
    value4?: IntFieldUpdateOperationsInput | number
    value5?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    competition?: CompetitionUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultsUncheckedUpdateWithoutResultsInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    personName?: NullableStringFieldUpdateOperationsInput | string | null
    personCountryId?: NullableStringFieldUpdateOperationsInput | string | null
    formatId?: StringFieldUpdateOperationsInput | string
    value1?: IntFieldUpdateOperationsInput | number
    value2?: IntFieldUpdateOperationsInput | number
    value3?: IntFieldUpdateOperationsInput | number
    value4?: IntFieldUpdateOperationsInput | number
    value5?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RanksAverageUpdateWithoutPersonInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
  }

  export type RanksAverageUncheckedUpdateWithoutPersonInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
  }

  export type RanksAverageUncheckedUpdateManyWithoutRanksAverageInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
  }

  export type RanksSingleUpdateWithoutPersonInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
  }

  export type RanksSingleUncheckedUpdateWithoutPersonInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
  }

  export type RanksSingleUncheckedUpdateManyWithoutRanksSingleInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    best?: IntFieldUpdateOperationsInput | number
    worldRank?: IntFieldUpdateOperationsInput | number
    continentRank?: IntFieldUpdateOperationsInput | number
    countryRank?: IntFieldUpdateOperationsInput | number
  }

  export type PicksCreateManyTeamInput = {
    id?: number
    slot: number
    week: number
    year: number
    wcaId: string
    eventId: string
    points?: number | null
  }

  export type PicksUpdateWithoutTeamInput = {
    slot?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    wcaId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PicksUncheckedUpdateWithoutTeamInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    wcaId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PicksUncheckedUpdateManyWithoutPicksInput = {
    id?: IntFieldUpdateOperationsInput | number
    slot?: IntFieldUpdateOperationsInput | number
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    wcaId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    points?: NullableIntFieldUpdateOperationsInput | number | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}