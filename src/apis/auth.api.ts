import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./index.api";

export const authApi = createApi({
  baseQuery,
  reducerPath: "authApi",
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),

    signup: builder.mutation<any, any>({
      query: (body) => ({
        url: "",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
