import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setToken } from "../reducers/userSlice";
// "https://purscliq-sandbox.onrender.com/api"
const baseQuery = fetchBaseQuery({
  baseUrl: "https://purscliq-sandbox.onrender.com/api",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().user.value.accessToken;
    console.log(token);
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
    setToken(sessionStorage.getItem("token"));
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log(refreshResult);
    if (refreshResult?.data) {
      setToken(refreshResult?.data?.token);
      result = await baseQuery(args, api, extraOptions);
    } else {
      //dispatch logout
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
