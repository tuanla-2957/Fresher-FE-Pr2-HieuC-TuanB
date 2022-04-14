import axios from "axios";
import { api } from "../urlConfig";
import store from "../store/index";
import { LOGOUT_SUCCESS } from "../actions/constant";

const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    ...(token && { Authorization: token }),
  },
});

axiosInstance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = auth.token;
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const { status } = error.response;
    if (status === 500) {
      localStorage.clear();
      store.dispatch({ type: LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
  }
);
console.log(api);

export default axiosInstance;
