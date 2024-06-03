import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["projects"],
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => ({
        url: "/all-projects",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),
  }),
});

export const { useGetProjectsQuery } = baseApi;
