import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/user", // Replace with your user-service API URL
});

export const loginUser = async (email: string, password: string) => {
  return API.post("/login", { email, password });
};

export const registerUser = async (email: string, password: string) => {
  return API.post("/register", { email, password });
};
