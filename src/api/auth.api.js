import api from "./api";

// ✅ NO /api here (already included in baseURL)

export const loginUser = (data) => {
  return api.post("auth/login", data);
};

export const registerUser = (data) => {
  return api.post("auth/signup", data);
};