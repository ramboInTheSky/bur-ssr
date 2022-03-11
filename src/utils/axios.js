import axios from "axios";
import { getAuthCookie } from "./cookie";

const axiosInstance = axios.create({
  baseURL: "https://account-dev-feature-andre-1n9kma.brb-labs.com/v1",
  // baseURL: 'http://localhost:3000/v1',
  timeout: 20000
});

axiosInstance.interceptors.request.use(
  config => {
    const token = getAuthCookie();
    const customConfig = { ...config };
    if (token) {
      customConfig.headers.Authorization = `Bearer ${token}`;
    }
    return customConfig;
  },
  error => {
    return error;
  }
);
export default axiosInstance;
