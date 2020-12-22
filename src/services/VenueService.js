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
    getVenues(){
        return apiClient.get("/venues")
    },
    getVenue(id){
        return apiClient.get(`/venues/${id}`)
    },
    setVenue(data){
        return apiClient.post("/venues", data)
    },
    deleteVenue(id){
        return apiClient.delete(`/venues/${id}`)
    }
}