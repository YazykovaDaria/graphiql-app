import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://graphql.anilist.co';

type QueryArgs = {
  newQuery: string;
  newVariables?: string;
  type?: string;
};

export const graphQueryApi = createApi({
  reducerPath: 'graphQueryApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGraphQuery: builder.mutation({
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
