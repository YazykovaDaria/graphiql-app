import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IGraphQlSchema } from 'src/types/scheema';

const baseUrl = 'https://rickandmortyapi.com/graphql';

type QueryArgs = {
  newQuery: string;
  newVariables?: string;
  type?: string;
};

type GraphQueryResult = {
  data: {
    error?: Record<string, unknown>;
    data: Record<string, unknown>;
  };
};

export const graphQueryApi = createApi({
  reducerPath: 'graphQueryApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGraphQuery: builder.mutation<GraphQueryResult | IGraphQlSchema, QueryArgs>({
      query: ({ newQuery, newVariables = '{}', type = 'query' }: QueryArgs) => ({
        url: '',
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          [type]: newQuery,
          variables: newVariables,
        }),
      }),
    }),
  }),
});

export const { useGetGraphQueryMutation } = graphQueryApi;
