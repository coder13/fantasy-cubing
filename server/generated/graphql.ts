import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comp = {
  __typename?: 'Comp';
  id: Scalars['String'];
  name: Scalars['String'];
  startDate: Scalars['String'];
};

export type Competition = {
  __typename?: 'Competition';
  city: Scalars['String'];
  competitor_limit: Scalars['Int'];
  country_iso2: Scalars['String'];
  end_date: Scalars['String'];
  event_ids: Array<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  persons?: Maybe<Array<Person>>;
  start_date: Scalars['String'];
};

export type Person = {
  __typename?: 'Person';
  countryIso2: Scalars['String'];
  name: Scalars['String'];
  registration?: Maybe<Registration>;
  wcaId?: Maybe<Scalars['String']>;
  wcaUserId: Scalars['Int'];
};

export type PersonEventReg = {
  __typename?: 'PersonEventReg';
  average?: Maybe<Result>;
  competition: Comp;
  countryIso2: Scalars['String'];
  eventId: Scalars['String'];
  name: Scalars['String'];
  single?: Maybe<Result>;
  wcaId?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getCompetitions: Array<Competition>;
  getTopCubers: Array<PersonEventReg>;
};


export type QueryGetCompetitionsArgs = {
  endDate: Scalars['String'];
  startDate: Scalars['String'];
};


export type QueryGetTopCubersArgs = {
  endDate: Scalars['String'];
  rank: Scalars['Int'];
  startDate: Scalars['String'];
};

export type Registration = {
  __typename?: 'Registration';
  eventIds: Array<Scalars['String']>;
  status: Scalars['String'];
};

export type Result = {
  __typename?: 'Result';
  continentalRanking: Scalars['Int'];
  nationalRanking: Scalars['Int'];
  value: Scalars['Int'];
  worldRanking: Scalars['Int'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Comp: ResolverTypeWrapper<Comp>;
  Competition: ResolverTypeWrapper<Competition>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Person: ResolverTypeWrapper<Person>;
  PersonEventReg: ResolverTypeWrapper<PersonEventReg>;
  Query: ResolverTypeWrapper<{}>;
  Registration: ResolverTypeWrapper<Registration>;
  Result: ResolverTypeWrapper<Result>;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Comp: Comp;
  Competition: Competition;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  Person: Person;
  PersonEventReg: PersonEventReg;
  Query: {};
  Registration: Registration;
  Result: Result;
  String: Scalars['String'];
};

export type CompResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comp'] = ResolversParentTypes['Comp']> = {
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  startDate?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompetitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Competition'] = ResolversParentTypes['Competition']> = {
  city?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  competitor_limit?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  country_iso2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  end_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  event_ids?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  persons?: Resolver<Maybe<Array<ResolversTypes['Person']>>, ParentType, ContextType>;
  start_date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  countryIso2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  registration?: Resolver<Maybe<ResolversTypes['Registration']>, ParentType, ContextType>;
  wcaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wcaUserId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonEventRegResolvers<ContextType = any, ParentType extends ResolversParentTypes['PersonEventReg'] = ResolversParentTypes['PersonEventReg']> = {
  average?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  competition?: Resolver<ResolversTypes['Comp'], ParentType, ContextType>;
  countryIso2?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  single?: Resolver<Maybe<ResolversTypes['Result']>, ParentType, ContextType>;
  wcaId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getCompetitions?: Resolver<Array<ResolversTypes['Competition']>, ParentType, ContextType, RequireFields<QueryGetCompetitionsArgs, 'endDate' | 'startDate'>>;
  getTopCubers?: Resolver<Array<ResolversTypes['PersonEventReg']>, ParentType, ContextType, RequireFields<QueryGetTopCubersArgs, 'endDate' | 'rank' | 'startDate'>>;
};

export type RegistrationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Registration'] = ResolversParentTypes['Registration']> = {
  eventIds?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  continentalRanking?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  nationalRanking?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  worldRanking?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Comp?: CompResolvers<ContextType>;
  Competition?: CompetitionResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  PersonEventReg?: PersonEventRegResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Registration?: RegistrationResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
};

