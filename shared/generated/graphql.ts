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

export type Competition = {
  __typename?: 'Competition';
  countryId?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Result>>;
  startDate?: Maybe<Scalars['String']>;
  wcaLiveId?: Maybe<Scalars['Int']>;
};


export type CompetitionResultsArgs = {
  eventId?: InputMaybe<Scalars['String']>;
  personId?: InputMaybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  avatar?: Maybe<Scalars['String']>;
  countryId?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Result>>;
  wcaUserId?: Maybe<Scalars['Int']>;
};


export type PersonResultsArgs = {
  competitionId?: InputMaybe<Scalars['String']>;
  eventId?: InputMaybe<Scalars['String']>;
  weekYear?: InputMaybe<WeekYear>;
};

export type Pick = {
  __typename?: 'Pick';
  eventId: Scalars['String'];
  id: Scalars['Int'];
  points?: Maybe<Scalars['Int']>;
  slot: Scalars['Int'];
  teamId: Scalars['Int'];
  wcaId: Scalars['String'];
  week: Scalars['Int'];
  year: Scalars['Int'];
};

export type Query = {
  __typename?: 'Query';
  competition?: Maybe<Competition>;
  competitions: Array<Competition>;
  person?: Maybe<Person>;
  results?: Maybe<Array<Result>>;
};


export type QueryCompetitionArgs = {
  id: Scalars['String'];
};


export type QueryCompetitionsArgs = {
  endDate?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
  week?: InputMaybe<Scalars['Int']>;
};


export type QueryPersonArgs = {
  wcaId: Scalars['String'];
};


export type QueryResultsArgs = {
  eventId?: InputMaybe<Scalars['String']>;
  weekYear?: InputMaybe<WeekYear>;
};

export type Result = {
  __typename?: 'Result';
  average: Scalars['Int'];
  best: Scalars['Int'];
  competition: Competition;
  date: Scalars['String'];
  eventId: Scalars['String'];
  formatId: Scalars['String'];
  person: Person;
  personCountryId?: Maybe<Scalars['String']>;
  points?: Maybe<Scalars['Int']>;
  pos?: Maybe<Scalars['Int']>;
  regionalAverageRecord?: Maybe<Scalars['String']>;
  regionalSingleRecord?: Maybe<Scalars['String']>;
  roundTypeId: Scalars['String'];
  week: Scalars['Int'];
  year: Scalars['Int'];
};

export type Team = {
  __typename?: 'Team';
  id: Scalars['Int'];
  name: Scalars['String'];
  picks?: Maybe<Array<Pick>>;
  userId: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  team?: Maybe<Team>;
};

export type WeekYear = {
  week: Scalars['Int'];
  year: Scalars['Int'];
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
  Competition: ResolverTypeWrapper<Competition>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Person: ResolverTypeWrapper<Person>;
  Pick: ResolverTypeWrapper<Pick>;
  Query: ResolverTypeWrapper<{}>;
  Result: ResolverTypeWrapper<Result>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Team: ResolverTypeWrapper<Team>;
  User: ResolverTypeWrapper<User>;
  weekYear: WeekYear;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Competition: Competition;
  Int: Scalars['Int'];
  Person: Person;
  Pick: Pick;
  Query: {};
  Result: Result;
  String: Scalars['String'];
  Team: Team;
  User: User;
  weekYear: WeekYear;
};

export type CompetitionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Competition'] = ResolversParentTypes['Competition']> = {
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  endDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<ResolversTypes['Result']>>, ParentType, ContextType, Partial<CompetitionResultsArgs>>;
  startDate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  wcaLiveId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PersonResolvers<ContextType = any, ParentType extends ResolversParentTypes['Person'] = ResolversParentTypes['Person']> = {
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  countryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  results?: Resolver<Maybe<Array<ResolversTypes['Result']>>, ParentType, ContextType, Partial<PersonResultsArgs>>;
  wcaUserId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PickResolvers<ContextType = any, ParentType extends ResolversParentTypes['Pick'] = ResolversParentTypes['Pick']> = {
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  slot?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  teamId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  wcaId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  competition?: Resolver<Maybe<ResolversTypes['Competition']>, ParentType, ContextType, RequireFields<QueryCompetitionArgs, 'id'>>;
  competitions?: Resolver<Array<ResolversTypes['Competition']>, ParentType, ContextType, Partial<QueryCompetitionsArgs>>;
  person?: Resolver<Maybe<ResolversTypes['Person']>, ParentType, ContextType, RequireFields<QueryPersonArgs, 'wcaId'>>;
  results?: Resolver<Maybe<Array<ResolversTypes['Result']>>, ParentType, ContextType, Partial<QueryResultsArgs>>;
};

export type ResultResolvers<ContextType = any, ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']> = {
  average?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  best?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  competition?: Resolver<ResolversTypes['Competition'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  eventId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  formatId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  person?: Resolver<ResolversTypes['Person'], ParentType, ContextType>;
  personCountryId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  points?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  pos?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  regionalAverageRecord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  regionalSingleRecord?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roundTypeId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  week?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  year?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TeamResolvers<ContextType = any, ParentType extends ResolversParentTypes['Team'] = ResolversParentTypes['Team']> = {
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  picks?: Resolver<Maybe<Array<ResolversTypes['Pick']>>, ParentType, ContextType>;
  userId?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  team?: Resolver<Maybe<ResolversTypes['Team']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Competition?: CompetitionResolvers<ContextType>;
  Person?: PersonResolvers<ContextType>;
  Pick?: PickResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Team?: TeamResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
};

