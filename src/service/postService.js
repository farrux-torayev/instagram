import { apiClient } from "../config/apnConfig";

export async function getHomePosts(){
    return(await apiClient.get("/posts"))?.data
}