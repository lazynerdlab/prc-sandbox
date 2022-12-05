import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:7000/api",
  credentials: "include",
  prepareHeaders: (headers) => {
    // const token = getState().user.value.token;
    const token = sessionStorage.getItem("token");
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  console.log(result);
  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
    // send refresh token to get new access token
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      // const user = api.getState().user.value;
      // store the new token
      //   api.dispatch(setCredentials({ ...refreshResult.data, user }));get/store the response
      sessionStorage.setItem("token", refreshResult.data.token);

      // retry the original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // api.dispatch(logOut())
      // dispatch logout
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
