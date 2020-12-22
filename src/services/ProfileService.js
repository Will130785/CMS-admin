import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: false,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export default {
    getProfiles(){
        return apiClient.get("/profile")
    },
    getProfile(id){
        return apiClient.get(`/profile/${id}`)
    },
    setProfile(data){
        return apiClient.post("/profile", data)
    },
    deleteProfile(id){
        return apiClient.delete(`/profile/${id}`)
    }
}