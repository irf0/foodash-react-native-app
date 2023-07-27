import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const baseUrl = "http://localhost:3000/";

export const apiSlice = createApi({
  //This redux-toolkit library command will make the fetching of the backend API easier
  //So we will use this method fetch(call) the api otherwise other method is also there.
  //This 'query' will fetch our backend API and send the client_secret to create a new order

  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    //Payments
    createPaymentIntent: builder.mutation({
      query: (data) => ({
        url: "payments/intents",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreatePaymentIntentMutation } = apiSlice;
