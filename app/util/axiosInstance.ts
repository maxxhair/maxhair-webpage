import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL, // Set your API base URL in environment variables
  headers: {
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
