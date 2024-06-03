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
    addProjects: builder.mutation({
      query: (data) => ({
        url: "/all-projects",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["projects"],
    }),
    updateProjects: builder.mutation({
      query: (options) => ({
        url: `/all-projects/${options.id}`,
        method: "PUT",
        body: options.data,
      }),
      invalidatesTags: ["projects"],
    }),
    deleteProjects: builder.mutation({
      query: (id) => ({
        url: `/all-projects/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["projects"],
    }),
  }),
});

export const {
  useGetProjectsQuery,
  useAddProjectsMutation,
  useUpdateProjectsMutation,
  useDeleteProjectsMutation,
} = baseApi;
