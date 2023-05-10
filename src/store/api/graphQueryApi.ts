import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://graphqlzero.almansi.me/api';

export const graphQueryApi = createApi({
  reducerPath: 'graphQueryApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getGraphQuery: builder.mutation({
      query: () => ({
        url: '',
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          query: `query Todos {
          todos{
            data {
              id
              title
              completed
              user {
                name
              }
            }
          }
        }`,
        }),
      }),
    }),
  }),
});

export const { useGetGraphQueryMutation } = graphQueryApi;
