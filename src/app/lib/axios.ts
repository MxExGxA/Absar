import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.STRAPI_URI,
  headers: {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  },
});

export default axiosInstance;
