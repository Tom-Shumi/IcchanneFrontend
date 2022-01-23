import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  getNewThreadList?: Maybe<Array<Maybe<Thread>>>;
};


export type QueryGetNewThreadListArgs = {
  category?: InputMaybe<Scalars['String']>;
  next?: InputMaybe<Scalars['String']>;
  search?: InputMaybe<Scalars['String']>;
};

export type Thread = {
  __typename?: 'Thread';
  category?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  publishedDate?: Maybe<Scalars['String']>;
  siteName?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type GetNewThreadListQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  next?: InputMaybe<Scalars['String']>;
}>;


export type GetNewThreadListQuery = { __typename?: 'Query', getNewThreadList?: Array<{ __typename?: 'Thread', id?: string | null | undefined, title?: string | null | undefined, url?: string | null | undefined, siteName?: string | null | undefined, category?: string | null | undefined, publishedDate?: string | null | undefined } | null | undefined> | null | undefined };


export const GetNewThreadListDocument = gql`
    query getNewThreadList($search: String, $category: String, $next: String) {
  getNewThreadList(search: $search, category: $category, next: $next) {
    id
    title
    url
    siteName
    category
    publishedDate
  }
}
    `;

/**
 * __useGetNewThreadListQuery__
 *
 * To run a query within a React component, call `useGetNewThreadListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNewThreadListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNewThreadListQuery({
 *   variables: {
 *      search: // value for 'search'
 *      category: // value for 'category'
 *      next: // value for 'next'
 *   },
 * });
 */
export function useGetNewThreadListQuery(baseOptions?: Apollo.QueryHookOptions<GetNewThreadListQuery, GetNewThreadListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNewThreadListQuery, GetNewThreadListQueryVariables>(GetNewThreadListDocument, options);
      }
export function useGetNewThreadListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNewThreadListQuery, GetNewThreadListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNewThreadListQuery, GetNewThreadListQueryVariables>(GetNewThreadListDocument, options);
        }
export type GetNewThreadListQueryHookResult = ReturnType<typeof useGetNewThreadListQuery>;
export type GetNewThreadListLazyQueryHookResult = ReturnType<typeof useGetNewThreadListLazyQuery>;
export type GetNewThreadListQueryResult = Apollo.QueryResult<GetNewThreadListQuery, GetNewThreadListQueryVariables>;