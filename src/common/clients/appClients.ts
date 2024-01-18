import axios from "axios";

export const apiClient = (options?: { token?: string }) => {
  if (!process.env.REACT_APP_API_URL)
    console.warn("cannot find appConfig baseUrl");
  // console.log(process.env);

  const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
      "Content-Type": "application/json",
      ...(options?.token && { Authorization: `Bearer: ${options?.token}` }),
    },
  });

  return apiClient;
};
