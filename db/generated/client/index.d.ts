
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
  countryId: string
  startDate: string
  endDate: string
}

/**
 * Model Person
 * 
 */
export type Person = {
  id: string
  wcaUserId: number
  name: string | null
  countryId: string
  gender: string | null
  avatar: string | null
}

/**
 * Model Result
 * 
 */
export type Result = {
  competitionId: string
  personId: string
  eventId: string
  roundTypeId: string
  formatId: string
  pos: number
  best: number
  average: number
  regionalSingleRecord: string | null
  regionalAverageRecord: string | null
  date: string
  week: number
  year: number
  points: number | null
  updatedAt: Date
  createdAt: Date
}

/**
 * Model WcaLiveCompetition
 * 
 */
export type WcaLiveCompetition = {
  wcaId: string
  wcaLiveId: number
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
   * `prisma.person`: Exposes CRUD operations for the **Person** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more People
    * const people = await prisma.person.findMany()
    * ```
    */
  get person(): Prisma.PersonDelegate<GlobalReject>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<GlobalReject>;

  /**
   * `prisma.wcaLiveCompetition`: Exposes CRUD operations for the **WcaLiveCompetition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WcaLiveCompetitions
    * const wcaLiveCompetitions = await prisma.wcaLiveCompetition.findMany()
    * ```
    */
  get wcaLiveCompetition(): Prisma.WcaLiveCompetitionDelegate<GlobalReject>;

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
    Person: 'Person',
    Result: 'Result',
    WcaLiveCompetition: 'WcaLiveCompetition',
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
  }

  export type PersonCountOutputTypeSelect = {
    Results?: boolean
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
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: string | null
    name: string | null
    countryId: string | null
    startDate: string | null
    endDate: string | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    countryId: string | null
    startDate: string | null
    endDate: string | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    name: number
    countryId: number
    startDate: number
    endDate: number
    _all: number
  }


  export type CompetitionMinAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    startDate?: true
    endDate?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    startDate?: true
    endDate?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    name?: true
    countryId?: true
    startDate?: true
    endDate?: true
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
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }


  export type CompetitionGroupByOutputType = {
    id: string
    name: string
    countryId: string
    startDate: string
    endDate: string
    _count: CompetitionCountAggregateOutputType | null
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
    countryId?: boolean
    startDate?: boolean
    endDate?: boolean
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
        P extends 'Results' ? Array < ResultGetPayload<S['include'][P]>>  :
        P extends '_count' ? CompetitionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (CompetitionArgs | CompetitionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Results' ? Array < ResultGetPayload<S['select'][P]>>  :
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

    Results<T extends Competition$ResultsArgs= {}>(args?: Subset<T, Competition$ResultsArgs>): Prisma.PrismaPromise<Array<ResultGetPayload<T>>| Null>;

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
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    where?: ResultWhereInput
    orderBy?: Enumerable<ResultOrderByWithRelationInput>
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResultScalarFieldEnum>
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
    wcaUserId: number | null
  }

  export type PersonSumAggregateOutputType = {
    wcaUserId: number | null
  }

  export type PersonMinAggregateOutputType = {
    id: string | null
    wcaUserId: number | null
    name: string | null
    countryId: string | null
    gender: string | null
    avatar: string | null
  }

  export type PersonMaxAggregateOutputType = {
    id: string | null
    wcaUserId: number | null
    name: string | null
    countryId: string | null
    gender: string | null
    avatar: string | null
  }

  export type PersonCountAggregateOutputType = {
    id: number
    wcaUserId: number
    name: number
    countryId: number
    gender: number
    avatar: number
    _all: number
  }


  export type PersonAvgAggregateInputType = {
    wcaUserId?: true
  }

  export type PersonSumAggregateInputType = {
    wcaUserId?: true
  }

  export type PersonMinAggregateInputType = {
    id?: true
    wcaUserId?: true
    name?: true
    countryId?: true
    gender?: true
    avatar?: true
  }

  export type PersonMaxAggregateInputType = {
    id?: true
    wcaUserId?: true
    name?: true
    countryId?: true
    gender?: true
    avatar?: true
  }

  export type PersonCountAggregateInputType = {
    id?: true
    wcaUserId?: true
    name?: true
    countryId?: true
    gender?: true
    avatar?: true
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
    wcaUserId: number
    name: string | null
    countryId: string
    gender: string | null
    avatar: string | null
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
    wcaUserId?: boolean
    name?: boolean
    countryId?: boolean
    gender?: boolean
    avatar?: boolean
    Results?: boolean | Person$ResultsArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }


  export type PersonInclude = {
    Results?: boolean | Person$ResultsArgs
    _count?: boolean | PersonCountOutputTypeArgs
  }

  export type PersonGetPayload<S extends boolean | null | undefined | PersonArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Person :
    S extends undefined ? never :
    S extends { include: any } & (PersonArgs | PersonFindManyArgs)
    ? Person  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Results' ? Array < ResultGetPayload<S['include'][P]>>  :
        P extends '_count' ? PersonCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PersonArgs | PersonFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Results' ? Array < ResultGetPayload<S['select'][P]>>  :
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

    Results<T extends Person$ResultsArgs= {}>(args?: Subset<T, Person$ResultsArgs>): Prisma.PrismaPromise<Array<ResultGetPayload<T>>| Null>;

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
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    where?: ResultWhereInput
    orderBy?: Enumerable<ResultOrderByWithRelationInput>
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ResultScalarFieldEnum>
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
   * Model Result
   */


  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    pos: number | null
    best: number | null
    average: number | null
    week: number | null
    year: number | null
    points: number | null
  }

  export type ResultSumAggregateOutputType = {
    pos: number | null
    best: number | null
    average: number | null
    week: number | null
    year: number | null
    points: number | null
  }

  export type ResultMinAggregateOutputType = {
    competitionId: string | null
    personId: string | null
    eventId: string | null
    roundTypeId: string | null
    formatId: string | null
    pos: number | null
    best: number | null
    average: number | null
    regionalSingleRecord: string | null
    regionalAverageRecord: string | null
    date: string | null
    week: number | null
    year: number | null
    points: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ResultMaxAggregateOutputType = {
    competitionId: string | null
    personId: string | null
    eventId: string | null
    roundTypeId: string | null
    formatId: string | null
    pos: number | null
    best: number | null
    average: number | null
    regionalSingleRecord: string | null
    regionalAverageRecord: string | null
    date: string | null
    week: number | null
    year: number | null
    points: number | null
    updatedAt: Date | null
    createdAt: Date | null
  }

  export type ResultCountAggregateOutputType = {
    competitionId: number
    personId: number
    eventId: number
    roundTypeId: number
    formatId: number
    pos: number
    best: number
    average: number
    regionalSingleRecord: number
    regionalAverageRecord: number
    date: number
    week: number
    year: number
    points: number
    updatedAt: number
    createdAt: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    pos?: true
    best?: true
    average?: true
    week?: true
    year?: true
    points?: true
  }

  export type ResultSumAggregateInputType = {
    pos?: true
    best?: true
    average?: true
    week?: true
    year?: true
    points?: true
  }

  export type ResultMinAggregateInputType = {
    competitionId?: true
    personId?: true
    eventId?: true
    roundTypeId?: true
    formatId?: true
    pos?: true
    best?: true
    average?: true
    regionalSingleRecord?: true
    regionalAverageRecord?: true
    date?: true
    week?: true
    year?: true
    points?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ResultMaxAggregateInputType = {
    competitionId?: true
    personId?: true
    eventId?: true
    roundTypeId?: true
    formatId?: true
    pos?: true
    best?: true
    average?: true
    regionalSingleRecord?: true
    regionalAverageRecord?: true
    date?: true
    week?: true
    year?: true
    points?: true
    updatedAt?: true
    createdAt?: true
  }

  export type ResultCountAggregateInputType = {
    competitionId?: true
    personId?: true
    eventId?: true
    roundTypeId?: true
    formatId?: true
    pos?: true
    best?: true
    average?: true
    regionalSingleRecord?: true
    regionalAverageRecord?: true
    date?: true
    week?: true
    year?: true
    points?: true
    updatedAt?: true
    createdAt?: true
    _all?: true
  }

  export type ResultAggregateArgs = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: Enumerable<ResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
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
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs = {
    where?: ResultWhereInput
    orderBy?: Enumerable<ResultOrderByWithAggregationInput>
    by: ResultScalarFieldEnum[]
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }


  export type ResultGroupByOutputType = {
    competitionId: string
    personId: string
    eventId: string
    roundTypeId: string
    formatId: string
    pos: number
    best: number
    average: number
    regionalSingleRecord: string | null
    regionalAverageRecord: string | null
    date: string
    week: number
    year: number
    points: number | null
    updatedAt: Date
    createdAt: Date
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect = {
    competitionId?: boolean
    personId?: boolean
    eventId?: boolean
    roundTypeId?: boolean
    formatId?: boolean
    pos?: boolean
    best?: boolean
    average?: boolean
    regionalSingleRecord?: boolean
    regionalAverageRecord?: boolean
    date?: boolean
    week?: boolean
    year?: boolean
    points?: boolean
    updatedAt?: boolean
    createdAt?: boolean
    person?: boolean | PersonArgs
    competition?: boolean | CompetitionArgs
  }


  export type ResultInclude = {
    person?: boolean | PersonArgs
    competition?: boolean | CompetitionArgs
  }

  export type ResultGetPayload<S extends boolean | null | undefined | ResultArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Result :
    S extends undefined ? never :
    S extends { include: any } & (ResultArgs | ResultFindManyArgs)
    ? Result  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'person' ? PersonGetPayload<S['include'][P]> :
        P extends 'competition' ? CompetitionGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ResultArgs | ResultFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'person' ? PersonGetPayload<S['select'][P]> :
        P extends 'competition' ? CompetitionGetPayload<S['select'][P]> :  P extends keyof Result ? Result[P] : never
  } 
      : Result


  type ResultCountArgs = 
    Omit<ResultFindManyArgs, 'select' | 'include'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ResultFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ResultFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Result'> extends True ? Prisma__ResultClient<ResultGetPayload<T>> : Prisma__ResultClient<ResultGetPayload<T> | null, null>

    /**
     * Find one Result that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ResultFindUniqueOrThrowArgs>
    ): Prisma__ResultClient<ResultGetPayload<T>>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ResultFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ResultFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Result'> extends True ? Prisma__ResultClient<ResultGetPayload<T>> : Prisma__ResultClient<ResultGetPayload<T> | null, null>

    /**
     * Find the first Result that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ResultFindFirstOrThrowArgs>
    ): Prisma__ResultClient<ResultGetPayload<T>>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `competitionId`
     * const resultWithCompetitionIdOnly = await prisma.result.findMany({ select: { competitionId: true } })
     * 
    **/
    findMany<T extends ResultFindManyArgs>(
      args?: SelectSubset<T, ResultFindManyArgs>
    ): Prisma.PrismaPromise<Array<ResultGetPayload<T>>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
    **/
    create<T extends ResultCreateArgs>(
      args: SelectSubset<T, ResultCreateArgs>
    ): Prisma__ResultClient<ResultGetPayload<T>>

    /**
     * Create many Results.
     *     @param {ResultCreateManyArgs} args - Arguments to create many Results.
     *     @example
     *     // Create many Results
     *     const result = await prisma.result.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ResultCreateManyArgs>(
      args?: SelectSubset<T, ResultCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
    **/
    delete<T extends ResultDeleteArgs>(
      args: SelectSubset<T, ResultDeleteArgs>
    ): Prisma__ResultClient<ResultGetPayload<T>>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ResultUpdateArgs>(
      args: SelectSubset<T, ResultUpdateArgs>
    ): Prisma__ResultClient<ResultGetPayload<T>>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ResultDeleteManyArgs>(
      args?: SelectSubset<T, ResultDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ResultUpdateManyArgs>(
      args: SelectSubset<T, ResultUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
    **/
    upsert<T extends ResultUpsertArgs>(
      args: SelectSubset<T, ResultUpsertArgs>
    ): Prisma__ResultClient<ResultGetPayload<T>>

    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
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
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ResultClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * Result base type for findUnique actions
   */
  export type ResultFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUnique
   */
  export interface ResultFindUniqueArgs extends ResultFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }


  /**
   * Result base type for findFirst actions
   */
  export type ResultFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: Enumerable<ResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
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
    distinct?: Enumerable<ResultScalarFieldEnum>
  }

  /**
   * Result findFirst
   */
  export interface ResultFindFirstArgs extends ResultFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: Enumerable<ResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
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
    distinct?: Enumerable<ResultScalarFieldEnum>
  }


  /**
   * Result findMany
   */
  export type ResultFindManyArgs = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: Enumerable<ResultOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
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
    distinct?: Enumerable<ResultScalarFieldEnum>
  }


  /**
   * Result create
   */
  export type ResultCreateArgs = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }


  /**
   * Result createMany
   */
  export type ResultCreateManyArgs = {
    /**
     * The data used to create many Results.
     */
    data: Enumerable<ResultCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Result update
   */
  export type ResultUpdateArgs = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }


  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
  }


  /**
   * Result upsert
   */
  export type ResultUpsertArgs = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }


  /**
   * Result delete
   */
  export type ResultDeleteArgs = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }


  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
  }


  /**
   * Result without action
   */
  export type ResultArgs = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ResultInclude | null
  }



  /**
   * Model WcaLiveCompetition
   */


  export type AggregateWcaLiveCompetition = {
    _count: WcaLiveCompetitionCountAggregateOutputType | null
    _avg: WcaLiveCompetitionAvgAggregateOutputType | null
    _sum: WcaLiveCompetitionSumAggregateOutputType | null
    _min: WcaLiveCompetitionMinAggregateOutputType | null
    _max: WcaLiveCompetitionMaxAggregateOutputType | null
  }

  export type WcaLiveCompetitionAvgAggregateOutputType = {
    wcaLiveId: number | null
  }

  export type WcaLiveCompetitionSumAggregateOutputType = {
    wcaLiveId: number | null
  }

  export type WcaLiveCompetitionMinAggregateOutputType = {
    wcaId: string | null
    wcaLiveId: number | null
  }

  export type WcaLiveCompetitionMaxAggregateOutputType = {
    wcaId: string | null
    wcaLiveId: number | null
  }

  export type WcaLiveCompetitionCountAggregateOutputType = {
    wcaId: number
    wcaLiveId: number
    _all: number
  }


  export type WcaLiveCompetitionAvgAggregateInputType = {
    wcaLiveId?: true
  }

  export type WcaLiveCompetitionSumAggregateInputType = {
    wcaLiveId?: true
  }

  export type WcaLiveCompetitionMinAggregateInputType = {
    wcaId?: true
    wcaLiveId?: true
  }

  export type WcaLiveCompetitionMaxAggregateInputType = {
    wcaId?: true
    wcaLiveId?: true
  }

  export type WcaLiveCompetitionCountAggregateInputType = {
    wcaId?: true
    wcaLiveId?: true
    _all?: true
  }

  export type WcaLiveCompetitionAggregateArgs = {
    /**
     * Filter which WcaLiveCompetition to aggregate.
     */
    where?: WcaLiveCompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WcaLiveCompetitions to fetch.
     */
    orderBy?: Enumerable<WcaLiveCompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WcaLiveCompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WcaLiveCompetitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WcaLiveCompetitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WcaLiveCompetitions
    **/
    _count?: true | WcaLiveCompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WcaLiveCompetitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WcaLiveCompetitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WcaLiveCompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WcaLiveCompetitionMaxAggregateInputType
  }

  export type GetWcaLiveCompetitionAggregateType<T extends WcaLiveCompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateWcaLiveCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWcaLiveCompetition[P]>
      : GetScalarType<T[P], AggregateWcaLiveCompetition[P]>
  }




  export type WcaLiveCompetitionGroupByArgs = {
    where?: WcaLiveCompetitionWhereInput
    orderBy?: Enumerable<WcaLiveCompetitionOrderByWithAggregationInput>
    by: WcaLiveCompetitionScalarFieldEnum[]
    having?: WcaLiveCompetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WcaLiveCompetitionCountAggregateInputType | true
    _avg?: WcaLiveCompetitionAvgAggregateInputType
    _sum?: WcaLiveCompetitionSumAggregateInputType
    _min?: WcaLiveCompetitionMinAggregateInputType
    _max?: WcaLiveCompetitionMaxAggregateInputType
  }


  export type WcaLiveCompetitionGroupByOutputType = {
    wcaId: string
    wcaLiveId: number
    _count: WcaLiveCompetitionCountAggregateOutputType | null
    _avg: WcaLiveCompetitionAvgAggregateOutputType | null
    _sum: WcaLiveCompetitionSumAggregateOutputType | null
    _min: WcaLiveCompetitionMinAggregateOutputType | null
    _max: WcaLiveCompetitionMaxAggregateOutputType | null
  }

  type GetWcaLiveCompetitionGroupByPayload<T extends WcaLiveCompetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WcaLiveCompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WcaLiveCompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WcaLiveCompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], WcaLiveCompetitionGroupByOutputType[P]>
        }
      >
    >


  export type WcaLiveCompetitionSelect = {
    wcaId?: boolean
    wcaLiveId?: boolean
  }


  export type WcaLiveCompetitionGetPayload<S extends boolean | null | undefined | WcaLiveCompetitionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WcaLiveCompetition :
    S extends undefined ? never :
    S extends { include: any } & (WcaLiveCompetitionArgs | WcaLiveCompetitionFindManyArgs)
    ? WcaLiveCompetition 
    : S extends { select: any } & (WcaLiveCompetitionArgs | WcaLiveCompetitionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WcaLiveCompetition ? WcaLiveCompetition[P] : never
  } 
      : WcaLiveCompetition


  type WcaLiveCompetitionCountArgs = 
    Omit<WcaLiveCompetitionFindManyArgs, 'select' | 'include'> & {
      select?: WcaLiveCompetitionCountAggregateInputType | true
    }

  export interface WcaLiveCompetitionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WcaLiveCompetition that matches the filter.
     * @param {WcaLiveCompetitionFindUniqueArgs} args - Arguments to find a WcaLiveCompetition
     * @example
     * // Get one WcaLiveCompetition
     * const wcaLiveCompetition = await prisma.wcaLiveCompetition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WcaLiveCompetitionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WcaLiveCompetitionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WcaLiveCompetition'> extends True ? Prisma__WcaLiveCompetitionClient<WcaLiveCompetitionGetPayload<T>> : Prisma__WcaLiveCompetitionClient<WcaLiveCompetitionGetPayload<T> | null, null>

    /**
     * Find one WcaLiveCompetition that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WcaLiveCompetitionFindUniqueOrThrowArgs} args - Arguments to find a WcaLiveCompetition
     * @example
     * // Get one WcaLiveCompetition
     * const wcaLiveCompetition = await prisma.wcaLiveCompetition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WcaLiveCompetitionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WcaLiveCompetitionFindUniqueOrThrowArgs>
    ): Prisma__WcaLiveCompetitionClient<WcaLiveCompetitionGetPayload<T>>

    /**
     * Find the first WcaLiveCompetition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WcaLiveCompetitionFindFirstArgs} args - Arguments to find a WcaLiveCompetition
     * @example
     * // Get one WcaLiveCompetition
     * const wcaLiveCompetition = await prisma.wcaLiveCompetition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WcaLiveCompetitionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WcaLiveCompetitionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WcaLiveCompetition'> extends True ? Prisma__WcaLiveCompetitionClient<WcaLiveCompetitionGetPayload<T>> : Prisma__WcaLiveCompetitionClient<WcaLiveCompetitionGetPayload<T> | null, null>

    /**
     * Find the first WcaLiveCompetition that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WcaLiveCompetitionFindFirstOrThrowArgs} args - Arguments to find a WcaLiveCompetition
     * @example
     * // Get one WcaLiveCompetition
     * const wcaLiveCompetition = await prisma.wcaLiveCompetition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WcaLiveCompetitionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WcaLiveCompetitionFindFirstOrThrowArgs>
    ): Prisma__WcaLiveCompetitionClient<WcaLiveCompetitionGetPayload<T>>

    /**
     * Find zero or more WcaLiveCompetitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WcaLiveCompetitionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WcaLiveCompetitions
     * const wcaLiveCompetitions = await prisma.wcaLiveCompetition.findMany()
     * 
     * // Get first 10 WcaLiveCompetitions
     * const wcaLiveCompetitions = await prisma.wcaLiveCompetition.findMany({ take: 10 })
     * 
     * // Only select the `wcaId`
     * const wcaLiveCompetitionWithWcaIdOnly = await prisma.wcaLiveCompetition.findMany({ select: { wcaId: true } })
     * 
    **/
    findMany<T extends WcaLiveCompetitionFindManyArgs>(
      args?: SelectSubset<T, WcaLiveCompetitionFindManyArgs>
    ): Prisma.PrismaPromise<Array<WcaLiveCompetitionGetPayload<T>>>

    /**
     * Create a WcaLiveCompetition.
     * @param {WcaLiveCompetitionCreateArgs} args - Arguments to create a WcaLiveCompetition.
     * @example
     * // Create one WcaLiveCompetition
     * const WcaLiveCompetition = await prisma.wcaLiveCompetition.create({
     *   data: {
     *     // ... data to create a WcaLiveCompetition
     *   }
     * })
     * 
    **/
    create<T extends WcaLiveCompetitionCreateArgs>(
      args: SelectSubset<T, WcaLiveCompetitionCreateArgs>
    ): Prisma__WcaLiveCompetitionClient<WcaLiveCompetitionGetPayload<T>>

    /**
     * Create many WcaLiveCompetitions.
     *     @param {WcaLiveCompetitionCreateManyArgs} args - Arguments to create many WcaLiveCompetitions.
     *     @example
     *     // Create many WcaLiveCompetitions
     *     const wcaLiveCompetition = await prisma.wcaLiveCompetition.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WcaLiveCompetitionCreateManyArgs>(
      args?: SelectSubset<T, WcaLiveCompetitionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WcaLiveCompetition.
     * @param {WcaLiveCompetitionDeleteArgs} args - Arguments to delete one WcaLiveCompetition.
     * @example
     * // Delete one WcaLiveCompetition
     * const WcaLiveCompetition = await prisma.wcaLiveCompetition.delete({
     *   where: {
     *     // ... filter to delete one WcaLiveCompetition
     *   }
     * })
     * 
    **/
    delete<T extends WcaLiveCompetitionDeleteArgs>(
      args: SelectSubset<T, WcaLiveCompetitionDeleteArgs>
    ): Prisma__WcaLiveCompetitionClient<WcaLiveCompetitionGetPayload<T>>

    /**
     * Update one WcaLiveCompetition.
     * @param {WcaLiveCompetitionUpdateArgs} args - Arguments to update one WcaLiveCompetition.
     * @example
     * // Update one WcaLiveCompetition
     * const wcaLiveCompetition = await prisma.wcaLiveCompetition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WcaLiveCompetitionUpdateArgs>(
      args: SelectSubset<T, WcaLiveCompetitionUpdateArgs>
    ): Prisma__WcaLiveCompetitionClient<WcaLiveCompetitionGetPayload<T>>

    /**
     * Delete zero or more WcaLiveCompetitions.
     * @param {WcaLiveCompetitionDeleteManyArgs} args - Arguments to filter WcaLiveCompetitions to delete.
     * @example
     * // Delete a few WcaLiveCompetitions
     * const { count } = await prisma.wcaLiveCompetition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WcaLiveCompetitionDeleteManyArgs>(
      args?: SelectSubset<T, WcaLiveCompetitionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WcaLiveCompetitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WcaLiveCompetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WcaLiveCompetitions
     * const wcaLiveCompetition = await prisma.wcaLiveCompetition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WcaLiveCompetitionUpdateManyArgs>(
      args: SelectSubset<T, WcaLiveCompetitionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WcaLiveCompetition.
     * @param {WcaLiveCompetitionUpsertArgs} args - Arguments to update or create a WcaLiveCompetition.
     * @example
     * // Update or create a WcaLiveCompetition
     * const wcaLiveCompetition = await prisma.wcaLiveCompetition.upsert({
     *   create: {
     *     // ... data to create a WcaLiveCompetition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WcaLiveCompetition we want to update
     *   }
     * })
    **/
    upsert<T extends WcaLiveCompetitionUpsertArgs>(
      args: SelectSubset<T, WcaLiveCompetitionUpsertArgs>
    ): Prisma__WcaLiveCompetitionClient<WcaLiveCompetitionGetPayload<T>>

    /**
     * Count the number of WcaLiveCompetitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WcaLiveCompetitionCountArgs} args - Arguments to filter WcaLiveCompetitions to count.
     * @example
     * // Count the number of WcaLiveCompetitions
     * const count = await prisma.wcaLiveCompetition.count({
     *   where: {
     *     // ... the filter for the WcaLiveCompetitions we want to count
     *   }
     * })
    **/
    count<T extends WcaLiveCompetitionCountArgs>(
      args?: Subset<T, WcaLiveCompetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WcaLiveCompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WcaLiveCompetition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WcaLiveCompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WcaLiveCompetitionAggregateArgs>(args: Subset<T, WcaLiveCompetitionAggregateArgs>): Prisma.PrismaPromise<GetWcaLiveCompetitionAggregateType<T>>

    /**
     * Group by WcaLiveCompetition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WcaLiveCompetitionGroupByArgs} args - Group by arguments.
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
      T extends WcaLiveCompetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WcaLiveCompetitionGroupByArgs['orderBy'] }
        : { orderBy?: WcaLiveCompetitionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WcaLiveCompetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWcaLiveCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WcaLiveCompetition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WcaLiveCompetitionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * WcaLiveCompetition base type for findUnique actions
   */
  export type WcaLiveCompetitionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WcaLiveCompetition
     */
    select?: WcaLiveCompetitionSelect | null
    /**
     * Filter, which WcaLiveCompetition to fetch.
     */
    where: WcaLiveCompetitionWhereUniqueInput
  }

  /**
   * WcaLiveCompetition findUnique
   */
  export interface WcaLiveCompetitionFindUniqueArgs extends WcaLiveCompetitionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WcaLiveCompetition findUniqueOrThrow
   */
  export type WcaLiveCompetitionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WcaLiveCompetition
     */
    select?: WcaLiveCompetitionSelect | null
    /**
     * Filter, which WcaLiveCompetition to fetch.
     */
    where: WcaLiveCompetitionWhereUniqueInput
  }


  /**
   * WcaLiveCompetition base type for findFirst actions
   */
  export type WcaLiveCompetitionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WcaLiveCompetition
     */
    select?: WcaLiveCompetitionSelect | null
    /**
     * Filter, which WcaLiveCompetition to fetch.
     */
    where?: WcaLiveCompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WcaLiveCompetitions to fetch.
     */
    orderBy?: Enumerable<WcaLiveCompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WcaLiveCompetitions.
     */
    cursor?: WcaLiveCompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WcaLiveCompetitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WcaLiveCompetitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WcaLiveCompetitions.
     */
    distinct?: Enumerable<WcaLiveCompetitionScalarFieldEnum>
  }

  /**
   * WcaLiveCompetition findFirst
   */
  export interface WcaLiveCompetitionFindFirstArgs extends WcaLiveCompetitionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WcaLiveCompetition findFirstOrThrow
   */
  export type WcaLiveCompetitionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WcaLiveCompetition
     */
    select?: WcaLiveCompetitionSelect | null
    /**
     * Filter, which WcaLiveCompetition to fetch.
     */
    where?: WcaLiveCompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WcaLiveCompetitions to fetch.
     */
    orderBy?: Enumerable<WcaLiveCompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WcaLiveCompetitions.
     */
    cursor?: WcaLiveCompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WcaLiveCompetitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WcaLiveCompetitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WcaLiveCompetitions.
     */
    distinct?: Enumerable<WcaLiveCompetitionScalarFieldEnum>
  }


  /**
   * WcaLiveCompetition findMany
   */
  export type WcaLiveCompetitionFindManyArgs = {
    /**
     * Select specific fields to fetch from the WcaLiveCompetition
     */
    select?: WcaLiveCompetitionSelect | null
    /**
     * Filter, which WcaLiveCompetitions to fetch.
     */
    where?: WcaLiveCompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WcaLiveCompetitions to fetch.
     */
    orderBy?: Enumerable<WcaLiveCompetitionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WcaLiveCompetitions.
     */
    cursor?: WcaLiveCompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WcaLiveCompetitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WcaLiveCompetitions.
     */
    skip?: number
    distinct?: Enumerable<WcaLiveCompetitionScalarFieldEnum>
  }


  /**
   * WcaLiveCompetition create
   */
  export type WcaLiveCompetitionCreateArgs = {
    /**
     * Select specific fields to fetch from the WcaLiveCompetition
     */
    select?: WcaLiveCompetitionSelect | null
    /**
     * The data needed to create a WcaLiveCompetition.
     */
    data: XOR<WcaLiveCompetitionCreateInput, WcaLiveCompetitionUncheckedCreateInput>
  }


  /**
   * WcaLiveCompetition createMany
   */
  export type WcaLiveCompetitionCreateManyArgs = {
    /**
     * The data used to create many WcaLiveCompetitions.
     */
    data: Enumerable<WcaLiveCompetitionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WcaLiveCompetition update
   */
  export type WcaLiveCompetitionUpdateArgs = {
    /**
     * Select specific fields to fetch from the WcaLiveCompetition
     */
    select?: WcaLiveCompetitionSelect | null
    /**
     * The data needed to update a WcaLiveCompetition.
     */
    data: XOR<WcaLiveCompetitionUpdateInput, WcaLiveCompetitionUncheckedUpdateInput>
    /**
     * Choose, which WcaLiveCompetition to update.
     */
    where: WcaLiveCompetitionWhereUniqueInput
  }


  /**
   * WcaLiveCompetition updateMany
   */
  export type WcaLiveCompetitionUpdateManyArgs = {
    /**
     * The data used to update WcaLiveCompetitions.
     */
    data: XOR<WcaLiveCompetitionUpdateManyMutationInput, WcaLiveCompetitionUncheckedUpdateManyInput>
    /**
     * Filter which WcaLiveCompetitions to update
     */
    where?: WcaLiveCompetitionWhereInput
  }


  /**
   * WcaLiveCompetition upsert
   */
  export type WcaLiveCompetitionUpsertArgs = {
    /**
     * Select specific fields to fetch from the WcaLiveCompetition
     */
    select?: WcaLiveCompetitionSelect | null
    /**
     * The filter to search for the WcaLiveCompetition to update in case it exists.
     */
    where: WcaLiveCompetitionWhereUniqueInput
    /**
     * In case the WcaLiveCompetition found by the `where` argument doesn't exist, create a new WcaLiveCompetition with this data.
     */
    create: XOR<WcaLiveCompetitionCreateInput, WcaLiveCompetitionUncheckedCreateInput>
    /**
     * In case the WcaLiveCompetition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WcaLiveCompetitionUpdateInput, WcaLiveCompetitionUncheckedUpdateInput>
  }


  /**
   * WcaLiveCompetition delete
   */
  export type WcaLiveCompetitionDeleteArgs = {
    /**
     * Select specific fields to fetch from the WcaLiveCompetition
     */
    select?: WcaLiveCompetitionSelect | null
    /**
     * Filter which WcaLiveCompetition to delete.
     */
    where: WcaLiveCompetitionWhereUniqueInput
  }


  /**
   * WcaLiveCompetition deleteMany
   */
  export type WcaLiveCompetitionDeleteManyArgs = {
    /**
     * Filter which WcaLiveCompetitions to delete
     */
    where?: WcaLiveCompetitionWhereInput
  }


  /**
   * WcaLiveCompetition without action
   */
  export type WcaLiveCompetitionArgs = {
    /**
     * Select specific fields to fetch from the WcaLiveCompetition
     */
    select?: WcaLiveCompetitionSelect | null
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

  export const CompetitionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    countryId: 'countryId',
    startDate: 'startDate',
    endDate: 'endDate'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const PersonScalarFieldEnum: {
    id: 'id',
    wcaUserId: 'wcaUserId',
    name: 'name',
    countryId: 'countryId',
    gender: 'gender',
    avatar: 'avatar'
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


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ResultScalarFieldEnum: {
    competitionId: 'competitionId',
    personId: 'personId',
    eventId: 'eventId',
    roundTypeId: 'roundTypeId',
    formatId: 'formatId',
    pos: 'pos',
    best: 'best',
    average: 'average',
    regionalSingleRecord: 'regionalSingleRecord',
    regionalAverageRecord: 'regionalAverageRecord',
    date: 'date',
    week: 'week',
    year: 'year',
    points: 'points',
    updatedAt: 'updatedAt',
    createdAt: 'createdAt'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


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


  export const WcaLiveCompetitionScalarFieldEnum: {
    wcaId: 'wcaId',
    wcaLiveId: 'wcaLiveId'
  };

  export type WcaLiveCompetitionScalarFieldEnum = (typeof WcaLiveCompetitionScalarFieldEnum)[keyof typeof WcaLiveCompetitionScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type CompetitionWhereInput = {
    AND?: Enumerable<CompetitionWhereInput>
    OR?: Enumerable<CompetitionWhereInput>
    NOT?: Enumerable<CompetitionWhereInput>
    id?: StringFilter | string
    name?: StringFilter | string
    countryId?: StringFilter | string
    startDate?: StringFilter | string
    endDate?: StringFilter | string
    Results?: ResultListRelationFilter
  }

  export type CompetitionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    Results?: ResultOrderByRelationAggregateInput
  }

  export type CompetitionWhereUniqueInput = {
    id?: string
  }

  export type CompetitionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    _count?: CompetitionCountOrderByAggregateInput
    _max?: CompetitionMaxOrderByAggregateInput
    _min?: CompetitionMinOrderByAggregateInput
  }

  export type CompetitionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CompetitionScalarWhereWithAggregatesInput>
    OR?: Enumerable<CompetitionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CompetitionScalarWhereWithAggregatesInput>
    id?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    countryId?: StringWithAggregatesFilter | string
    startDate?: StringWithAggregatesFilter | string
    endDate?: StringWithAggregatesFilter | string
  }

  export type PersonWhereInput = {
    AND?: Enumerable<PersonWhereInput>
    OR?: Enumerable<PersonWhereInput>
    NOT?: Enumerable<PersonWhereInput>
    id?: StringFilter | string
    wcaUserId?: IntFilter | number
    name?: StringNullableFilter | string | null
    countryId?: StringFilter | string
    gender?: StringNullableFilter | string | null
    avatar?: StringNullableFilter | string | null
    Results?: ResultListRelationFilter
  }

  export type PersonOrderByWithRelationInput = {
    id?: SortOrder
    wcaUserId?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    gender?: SortOrder
    avatar?: SortOrder
    Results?: ResultOrderByRelationAggregateInput
  }

  export type PersonWhereUniqueInput = {
    id?: string
  }

  export type PersonOrderByWithAggregationInput = {
    id?: SortOrder
    wcaUserId?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    gender?: SortOrder
    avatar?: SortOrder
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
    wcaUserId?: IntWithAggregatesFilter | number
    name?: StringNullableWithAggregatesFilter | string | null
    countryId?: StringWithAggregatesFilter | string
    gender?: StringNullableWithAggregatesFilter | string | null
    avatar?: StringNullableWithAggregatesFilter | string | null
  }

  export type ResultWhereInput = {
    AND?: Enumerable<ResultWhereInput>
    OR?: Enumerable<ResultWhereInput>
    NOT?: Enumerable<ResultWhereInput>
    competitionId?: StringFilter | string
    personId?: StringFilter | string
    eventId?: StringFilter | string
    roundTypeId?: StringFilter | string
    formatId?: StringFilter | string
    pos?: IntFilter | number
    best?: IntFilter | number
    average?: IntFilter | number
    regionalSingleRecord?: StringNullableFilter | string | null
    regionalAverageRecord?: StringNullableFilter | string | null
    date?: StringFilter | string
    week?: IntFilter | number
    year?: IntFilter | number
    points?: IntNullableFilter | number | null
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
    person?: XOR<PersonRelationFilter, PersonWhereInput>
    competition?: XOR<CompetitionRelationFilter, CompetitionWhereInput>
  }

  export type ResultOrderByWithRelationInput = {
    competitionId?: SortOrder
    personId?: SortOrder
    eventId?: SortOrder
    roundTypeId?: SortOrder
    formatId?: SortOrder
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    regionalSingleRecord?: SortOrder
    regionalAverageRecord?: SortOrder
    date?: SortOrder
    week?: SortOrder
    year?: SortOrder
    points?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    person?: PersonOrderByWithRelationInput
    competition?: CompetitionOrderByWithRelationInput
  }

  export type ResultWhereUniqueInput = {
    competitionId_eventId_roundTypeId_personId?: ResultCompetitionIdEventIdRoundTypeIdPersonIdCompoundUniqueInput
  }

  export type ResultOrderByWithAggregationInput = {
    competitionId?: SortOrder
    personId?: SortOrder
    eventId?: SortOrder
    roundTypeId?: SortOrder
    formatId?: SortOrder
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    regionalSingleRecord?: SortOrder
    regionalAverageRecord?: SortOrder
    date?: SortOrder
    week?: SortOrder
    year?: SortOrder
    points?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ResultScalarWhereWithAggregatesInput>
    OR?: Enumerable<ResultScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ResultScalarWhereWithAggregatesInput>
    competitionId?: StringWithAggregatesFilter | string
    personId?: StringWithAggregatesFilter | string
    eventId?: StringWithAggregatesFilter | string
    roundTypeId?: StringWithAggregatesFilter | string
    formatId?: StringWithAggregatesFilter | string
    pos?: IntWithAggregatesFilter | number
    best?: IntWithAggregatesFilter | number
    average?: IntWithAggregatesFilter | number
    regionalSingleRecord?: StringNullableWithAggregatesFilter | string | null
    regionalAverageRecord?: StringNullableWithAggregatesFilter | string | null
    date?: StringWithAggregatesFilter | string
    week?: IntWithAggregatesFilter | number
    year?: IntWithAggregatesFilter | number
    points?: IntNullableWithAggregatesFilter | number | null
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type WcaLiveCompetitionWhereInput = {
    AND?: Enumerable<WcaLiveCompetitionWhereInput>
    OR?: Enumerable<WcaLiveCompetitionWhereInput>
    NOT?: Enumerable<WcaLiveCompetitionWhereInput>
    wcaId?: StringFilter | string
    wcaLiveId?: IntFilter | number
  }

  export type WcaLiveCompetitionOrderByWithRelationInput = {
    wcaId?: SortOrder
    wcaLiveId?: SortOrder
  }

  export type WcaLiveCompetitionWhereUniqueInput = {
    wcaId_wcaLiveId?: WcaLiveCompetitionWcaIdWcaLiveIdCompoundUniqueInput
  }

  export type WcaLiveCompetitionOrderByWithAggregationInput = {
    wcaId?: SortOrder
    wcaLiveId?: SortOrder
    _count?: WcaLiveCompetitionCountOrderByAggregateInput
    _avg?: WcaLiveCompetitionAvgOrderByAggregateInput
    _max?: WcaLiveCompetitionMaxOrderByAggregateInput
    _min?: WcaLiveCompetitionMinOrderByAggregateInput
    _sum?: WcaLiveCompetitionSumOrderByAggregateInput
  }

  export type WcaLiveCompetitionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WcaLiveCompetitionScalarWhereWithAggregatesInput>
    OR?: Enumerable<WcaLiveCompetitionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WcaLiveCompetitionScalarWhereWithAggregatesInput>
    wcaId?: StringWithAggregatesFilter | string
    wcaLiveId?: IntWithAggregatesFilter | number
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
    countryId?: string
    startDate: string
    endDate: string
    Results?: ResultCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateInput = {
    id?: string
    name?: string
    countryId?: string
    startDate: string
    endDate: string
    Results?: ResultUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    Results?: ResultUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    Results?: ResultUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionCreateManyInput = {
    id?: string
    name?: string
    countryId?: string
    startDate: string
    endDate: string
  }

  export type CompetitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type CompetitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type PersonCreateInput = {
    id?: string
    wcaUserId?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    avatar?: string | null
    Results?: ResultCreateNestedManyWithoutPersonInput
  }

  export type PersonUncheckedCreateInput = {
    id?: string
    wcaUserId?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    avatar?: string | null
    Results?: ResultUncheckedCreateNestedManyWithoutPersonInput
  }

  export type PersonUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wcaUserId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Results?: ResultUpdateManyWithoutPersonNestedInput
  }

  export type PersonUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    wcaUserId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    Results?: ResultUncheckedUpdateManyWithoutPersonNestedInput
  }

  export type PersonCreateManyInput = {
    id?: string
    wcaUserId?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    avatar?: string | null
  }

  export type PersonUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    wcaUserId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    wcaUserId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResultCreateInput = {
    eventId?: string
    roundTypeId?: string
    formatId?: string
    pos?: number
    best?: number
    average?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    date: string
    week: number
    year: number
    points?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
    person?: PersonCreateNestedOneWithoutResultsInput
    competition?: CompetitionCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateInput = {
    competitionId?: string
    personId?: string
    eventId?: string
    roundTypeId?: string
    formatId?: string
    pos?: number
    best?: number
    average?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    date: string
    week: number
    year: number
    points?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ResultUpdateInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    formatId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutResultsNestedInput
    competition?: CompetitionUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    formatId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateManyInput = {
    competitionId?: string
    personId?: string
    eventId?: string
    roundTypeId?: string
    formatId?: string
    pos?: number
    best?: number
    average?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    date: string
    week: number
    year: number
    points?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ResultUpdateManyMutationInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    formatId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    personId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    formatId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WcaLiveCompetitionCreateInput = {
    wcaId: string
    wcaLiveId: number
  }

  export type WcaLiveCompetitionUncheckedCreateInput = {
    wcaId: string
    wcaLiveId: number
  }

  export type WcaLiveCompetitionUpdateInput = {
    wcaId?: StringFieldUpdateOperationsInput | string
    wcaLiveId?: IntFieldUpdateOperationsInput | number
  }

  export type WcaLiveCompetitionUncheckedUpdateInput = {
    wcaId?: StringFieldUpdateOperationsInput | string
    wcaLiveId?: IntFieldUpdateOperationsInput | number
  }

  export type WcaLiveCompetitionCreateManyInput = {
    wcaId: string
    wcaLiveId: number
  }

  export type WcaLiveCompetitionUpdateManyMutationInput = {
    wcaId?: StringFieldUpdateOperationsInput | string
    wcaLiveId?: IntFieldUpdateOperationsInput | number
  }

  export type WcaLiveCompetitionUncheckedUpdateManyInput = {
    wcaId?: StringFieldUpdateOperationsInput | string
    wcaLiveId?: IntFieldUpdateOperationsInput | number
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
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type ResultListRelationFilter = {
    every?: ResultWhereInput
    some?: ResultWhereInput
    none?: ResultWhereInput
  }

  export type ResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type CompetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
  }

  export type CompetitionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
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
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type PersonCountOrderByAggregateInput = {
    id?: SortOrder
    wcaUserId?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    gender?: SortOrder
    avatar?: SortOrder
  }

  export type PersonAvgOrderByAggregateInput = {
    wcaUserId?: SortOrder
  }

  export type PersonMaxOrderByAggregateInput = {
    id?: SortOrder
    wcaUserId?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    gender?: SortOrder
    avatar?: SortOrder
  }

  export type PersonMinOrderByAggregateInput = {
    id?: SortOrder
    wcaUserId?: SortOrder
    name?: SortOrder
    countryId?: SortOrder
    gender?: SortOrder
    avatar?: SortOrder
  }

  export type PersonSumOrderByAggregateInput = {
    wcaUserId?: SortOrder
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
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
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

  export type PersonRelationFilter = {
    is?: PersonWhereInput
    isNot?: PersonWhereInput
  }

  export type CompetitionRelationFilter = {
    is?: CompetitionWhereInput
    isNot?: CompetitionWhereInput
  }

  export type ResultCompetitionIdEventIdRoundTypeIdPersonIdCompoundUniqueInput = {
    competitionId: string
    eventId: string
    roundTypeId: string
    personId: string
  }

  export type ResultCountOrderByAggregateInput = {
    competitionId?: SortOrder
    personId?: SortOrder
    eventId?: SortOrder
    roundTypeId?: SortOrder
    formatId?: SortOrder
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    regionalSingleRecord?: SortOrder
    regionalAverageRecord?: SortOrder
    date?: SortOrder
    week?: SortOrder
    year?: SortOrder
    points?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    week?: SortOrder
    year?: SortOrder
    points?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    competitionId?: SortOrder
    personId?: SortOrder
    eventId?: SortOrder
    roundTypeId?: SortOrder
    formatId?: SortOrder
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    regionalSingleRecord?: SortOrder
    regionalAverageRecord?: SortOrder
    date?: SortOrder
    week?: SortOrder
    year?: SortOrder
    points?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    competitionId?: SortOrder
    personId?: SortOrder
    eventId?: SortOrder
    roundTypeId?: SortOrder
    formatId?: SortOrder
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    regionalSingleRecord?: SortOrder
    regionalAverageRecord?: SortOrder
    date?: SortOrder
    week?: SortOrder
    year?: SortOrder
    points?: SortOrder
    updatedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    pos?: SortOrder
    best?: SortOrder
    average?: SortOrder
    week?: SortOrder
    year?: SortOrder
    points?: SortOrder
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

  export type WcaLiveCompetitionWcaIdWcaLiveIdCompoundUniqueInput = {
    wcaId: string
    wcaLiveId: number
  }

  export type WcaLiveCompetitionCountOrderByAggregateInput = {
    wcaId?: SortOrder
    wcaLiveId?: SortOrder
  }

  export type WcaLiveCompetitionAvgOrderByAggregateInput = {
    wcaLiveId?: SortOrder
  }

  export type WcaLiveCompetitionMaxOrderByAggregateInput = {
    wcaId?: SortOrder
    wcaLiveId?: SortOrder
  }

  export type WcaLiveCompetitionMinOrderByAggregateInput = {
    wcaId?: SortOrder
    wcaLiveId?: SortOrder
  }

  export type WcaLiveCompetitionSumOrderByAggregateInput = {
    wcaLiveId?: SortOrder
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

  export type ResultCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<Enumerable<ResultCreateWithoutCompetitionInput>, Enumerable<ResultUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<ResultCreateOrConnectWithoutCompetitionInput>
    createMany?: ResultCreateManyCompetitionInputEnvelope
    connect?: Enumerable<ResultWhereUniqueInput>
  }

  export type ResultUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<Enumerable<ResultCreateWithoutCompetitionInput>, Enumerable<ResultUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<ResultCreateOrConnectWithoutCompetitionInput>
    createMany?: ResultCreateManyCompetitionInputEnvelope
    connect?: Enumerable<ResultWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ResultUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<Enumerable<ResultCreateWithoutCompetitionInput>, Enumerable<ResultUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<ResultCreateOrConnectWithoutCompetitionInput>
    upsert?: Enumerable<ResultUpsertWithWhereUniqueWithoutCompetitionInput>
    createMany?: ResultCreateManyCompetitionInputEnvelope
    set?: Enumerable<ResultWhereUniqueInput>
    disconnect?: Enumerable<ResultWhereUniqueInput>
    delete?: Enumerable<ResultWhereUniqueInput>
    connect?: Enumerable<ResultWhereUniqueInput>
    update?: Enumerable<ResultUpdateWithWhereUniqueWithoutCompetitionInput>
    updateMany?: Enumerable<ResultUpdateManyWithWhereWithoutCompetitionInput>
    deleteMany?: Enumerable<ResultScalarWhereInput>
  }

  export type ResultUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<Enumerable<ResultCreateWithoutCompetitionInput>, Enumerable<ResultUncheckedCreateWithoutCompetitionInput>>
    connectOrCreate?: Enumerable<ResultCreateOrConnectWithoutCompetitionInput>
    upsert?: Enumerable<ResultUpsertWithWhereUniqueWithoutCompetitionInput>
    createMany?: ResultCreateManyCompetitionInputEnvelope
    set?: Enumerable<ResultWhereUniqueInput>
    disconnect?: Enumerable<ResultWhereUniqueInput>
    delete?: Enumerable<ResultWhereUniqueInput>
    connect?: Enumerable<ResultWhereUniqueInput>
    update?: Enumerable<ResultUpdateWithWhereUniqueWithoutCompetitionInput>
    updateMany?: Enumerable<ResultUpdateManyWithWhereWithoutCompetitionInput>
    deleteMany?: Enumerable<ResultScalarWhereInput>
  }

  export type ResultCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<ResultCreateWithoutPersonInput>, Enumerable<ResultUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ResultCreateOrConnectWithoutPersonInput>
    createMany?: ResultCreateManyPersonInputEnvelope
    connect?: Enumerable<ResultWhereUniqueInput>
  }

  export type ResultUncheckedCreateNestedManyWithoutPersonInput = {
    create?: XOR<Enumerable<ResultCreateWithoutPersonInput>, Enumerable<ResultUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ResultCreateOrConnectWithoutPersonInput>
    createMany?: ResultCreateManyPersonInputEnvelope
    connect?: Enumerable<ResultWhereUniqueInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ResultUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<ResultCreateWithoutPersonInput>, Enumerable<ResultUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ResultCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<ResultUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: ResultCreateManyPersonInputEnvelope
    set?: Enumerable<ResultWhereUniqueInput>
    disconnect?: Enumerable<ResultWhereUniqueInput>
    delete?: Enumerable<ResultWhereUniqueInput>
    connect?: Enumerable<ResultWhereUniqueInput>
    update?: Enumerable<ResultUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<ResultUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<ResultScalarWhereInput>
  }

  export type ResultUncheckedUpdateManyWithoutPersonNestedInput = {
    create?: XOR<Enumerable<ResultCreateWithoutPersonInput>, Enumerable<ResultUncheckedCreateWithoutPersonInput>>
    connectOrCreate?: Enumerable<ResultCreateOrConnectWithoutPersonInput>
    upsert?: Enumerable<ResultUpsertWithWhereUniqueWithoutPersonInput>
    createMany?: ResultCreateManyPersonInputEnvelope
    set?: Enumerable<ResultWhereUniqueInput>
    disconnect?: Enumerable<ResultWhereUniqueInput>
    delete?: Enumerable<ResultWhereUniqueInput>
    connect?: Enumerable<ResultWhereUniqueInput>
    update?: Enumerable<ResultUpdateWithWhereUniqueWithoutPersonInput>
    updateMany?: Enumerable<ResultUpdateManyWithWhereWithoutPersonInput>
    deleteMany?: Enumerable<ResultScalarWhereInput>
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type ResultCreateWithoutCompetitionInput = {
    eventId?: string
    roundTypeId?: string
    formatId?: string
    pos?: number
    best?: number
    average?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    date: string
    week: number
    year: number
    points?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
    person?: PersonCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutCompetitionInput = {
    personId?: string
    eventId?: string
    roundTypeId?: string
    formatId?: string
    pos?: number
    best?: number
    average?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    date: string
    week: number
    year: number
    points?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ResultCreateOrConnectWithoutCompetitionInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutCompetitionInput, ResultUncheckedCreateWithoutCompetitionInput>
  }

  export type ResultCreateManyCompetitionInputEnvelope = {
    data: Enumerable<ResultCreateManyCompetitionInput>
    skipDuplicates?: boolean
  }

  export type ResultUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutCompetitionInput, ResultUncheckedUpdateWithoutCompetitionInput>
    create: XOR<ResultCreateWithoutCompetitionInput, ResultUncheckedCreateWithoutCompetitionInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutCompetitionInput, ResultUncheckedUpdateWithoutCompetitionInput>
  }

  export type ResultUpdateManyWithWhereWithoutCompetitionInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutResultsInput>
  }

  export type ResultScalarWhereInput = {
    AND?: Enumerable<ResultScalarWhereInput>
    OR?: Enumerable<ResultScalarWhereInput>
    NOT?: Enumerable<ResultScalarWhereInput>
    competitionId?: StringFilter | string
    personId?: StringFilter | string
    eventId?: StringFilter | string
    roundTypeId?: StringFilter | string
    formatId?: StringFilter | string
    pos?: IntFilter | number
    best?: IntFilter | number
    average?: IntFilter | number
    regionalSingleRecord?: StringNullableFilter | string | null
    regionalAverageRecord?: StringNullableFilter | string | null
    date?: StringFilter | string
    week?: IntFilter | number
    year?: IntFilter | number
    points?: IntNullableFilter | number | null
    updatedAt?: DateTimeFilter | Date | string
    createdAt?: DateTimeFilter | Date | string
  }

  export type ResultCreateWithoutPersonInput = {
    eventId?: string
    roundTypeId?: string
    formatId?: string
    pos?: number
    best?: number
    average?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    date: string
    week: number
    year: number
    points?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
    competition?: CompetitionCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutPersonInput = {
    competitionId?: string
    eventId?: string
    roundTypeId?: string
    formatId?: string
    pos?: number
    best?: number
    average?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    date: string
    week: number
    year: number
    points?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ResultCreateOrConnectWithoutPersonInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutPersonInput, ResultUncheckedCreateWithoutPersonInput>
  }

  export type ResultCreateManyPersonInputEnvelope = {
    data: Enumerable<ResultCreateManyPersonInput>
    skipDuplicates?: boolean
  }

  export type ResultUpsertWithWhereUniqueWithoutPersonInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutPersonInput, ResultUncheckedUpdateWithoutPersonInput>
    create: XOR<ResultCreateWithoutPersonInput, ResultUncheckedCreateWithoutPersonInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutPersonInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutPersonInput, ResultUncheckedUpdateWithoutPersonInput>
  }

  export type ResultUpdateManyWithWhereWithoutPersonInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutResultsInput>
  }

  export type PersonCreateWithoutResultsInput = {
    id?: string
    wcaUserId?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    avatar?: string | null
  }

  export type PersonUncheckedCreateWithoutResultsInput = {
    id?: string
    wcaUserId?: number
    name?: string | null
    countryId?: string
    gender?: string | null
    avatar?: string | null
  }

  export type PersonCreateOrConnectWithoutResultsInput = {
    where: PersonWhereUniqueInput
    create: XOR<PersonCreateWithoutResultsInput, PersonUncheckedCreateWithoutResultsInput>
  }

  export type CompetitionCreateWithoutResultsInput = {
    id?: string
    name?: string
    countryId?: string
    startDate: string
    endDate: string
  }

  export type CompetitionUncheckedCreateWithoutResultsInput = {
    id?: string
    name?: string
    countryId?: string
    startDate: string
    endDate: string
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
    wcaUserId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    wcaUserId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    countryId?: StringFieldUpdateOperationsInput | string
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompetitionUpsertWithoutResultsInput = {
    update: XOR<CompetitionUpdateWithoutResultsInput, CompetitionUncheckedUpdateWithoutResultsInput>
    create: XOR<CompetitionCreateWithoutResultsInput, CompetitionUncheckedCreateWithoutResultsInput>
  }

  export type CompetitionUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
  }

  export type CompetitionUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    countryId?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
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

  export type ResultCreateManyCompetitionInput = {
    personId?: string
    eventId?: string
    roundTypeId?: string
    formatId?: string
    pos?: number
    best?: number
    average?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    date: string
    week: number
    year: number
    points?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ResultUpdateWithoutCompetitionInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    formatId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    person?: PersonUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutCompetitionInput = {
    personId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    formatId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyWithoutResultsInput = {
    personId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    formatId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateManyPersonInput = {
    competitionId?: string
    eventId?: string
    roundTypeId?: string
    formatId?: string
    pos?: number
    best?: number
    average?: number
    regionalSingleRecord?: string | null
    regionalAverageRecord?: string | null
    date: string
    week: number
    year: number
    points?: number | null
    updatedAt?: Date | string
    createdAt?: Date | string
  }

  export type ResultUpdateWithoutPersonInput = {
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    formatId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutPersonInput = {
    competitionId?: StringFieldUpdateOperationsInput | string
    eventId?: StringFieldUpdateOperationsInput | string
    roundTypeId?: StringFieldUpdateOperationsInput | string
    formatId?: StringFieldUpdateOperationsInput | string
    pos?: IntFieldUpdateOperationsInput | number
    best?: IntFieldUpdateOperationsInput | number
    average?: IntFieldUpdateOperationsInput | number
    regionalSingleRecord?: NullableStringFieldUpdateOperationsInput | string | null
    regionalAverageRecord?: NullableStringFieldUpdateOperationsInput | string | null
    date?: StringFieldUpdateOperationsInput | string
    week?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    points?: NullableIntFieldUpdateOperationsInput | number | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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