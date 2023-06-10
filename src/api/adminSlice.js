import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const adminApi = createApi({
  reducerPath: "admin",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/" }),
  endpoints: (builder) => ({
    getAccounts: builder.query({
      query: () => `account`,
      transformResponse: (response) =>
        response.sort((a, b) => b.amount - a.amount),
      providesTags: ["account"],
    }),
    addAccount: builder.mutation({
      query: (amount, id) => ({
        url: "account",
        method: "POST",
        body: { amount, id },
      }),
      invalidatesTags: ["account"],
    }),
    deleteAccount: builder.mutation({
      query: (id) => ({ url: `account/${id}`, method: "DELETE" }),
      invalidatesTags: ["account"],
    }),
    updateAccount: builder.mutation({
      query: ({ id, amount }) => ({
        url: `account/${id}`,
        method: "PATCH",
        body: { amount },
      }),
      invalidatesTags: ["account"],
    }),
  }),
});

export const {
  useGetAccountsQuery,
  useAddAccountMutation,
  useDeleteAccountMutation,
  useUpdateAccountMutation,
} = adminApi;
