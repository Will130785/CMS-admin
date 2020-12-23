import apiClient from "./api"

export default {
    getProfiles(){
        return apiClient().get("/profile")
    },
    getProfile(id){
        return apiClient().get(`/profile/${id}`)
    },
    setProfile(data){
        return apiClient().post("/profile", data)
    },
    deleteProfile(id){
        return apiClient().delete(`/profile/${id}`)
    }
}