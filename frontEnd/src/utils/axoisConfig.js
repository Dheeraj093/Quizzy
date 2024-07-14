import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:8000",
  baseURL: "https://quizzy-shja.onrender.com",
});