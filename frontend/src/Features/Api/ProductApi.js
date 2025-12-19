import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    GetAllProduct: builder.query({
      query: () => "products",
    }),

    GetCart: builder.query({
      query: () => "cart",
    }),

    addToCart: builder.mutation({
      query: (product) => ({
        url: "cart",
        method: "POST",
        body: product,
      }),
    }),
  }),
});

export const { useGetAllProductQuery, useGetCartQuery, useAddToCartMutation } =
  productApi;
