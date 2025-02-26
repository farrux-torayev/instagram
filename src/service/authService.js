import { apiClient } from "../config/apnConfig";

export async function register(body) {
  return (await apiClient.post("/auth/register", body))?.data;
}


export async function login(body) {
    return (await apiClient.post("/auth/login", body))?.data;
  }


 

