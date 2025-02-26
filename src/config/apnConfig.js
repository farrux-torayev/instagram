import axios from "axios";
import { API_BASE_URl } from "./envVariables";

export const apiClient = axios.create({
  baseURL: API_BASE_URl + "/api",
});
