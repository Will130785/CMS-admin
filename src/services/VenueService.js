import apiClient from "./api"

export default {
    getVenues(){
        return apiClient().get("/venues")
    },
    getVenue(id){
        return apiClient().get(`/venues/${id}`)
    },
    setVenue(data){
        return apiClient().post("/venues", data)
    },
    deleteVenue(id){
        return apiClient().delete(`/venues/${id}`)
    }
}