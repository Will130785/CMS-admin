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
    getPhotos(){
        return apiClient.get("/gallery")
    },
    getPhoto(id){
        return apiClient.get(`/gallery/${id}`)
    },
    setPhoto(data){
        return apiClient.post("/gallery", data)
    },
    deletePhoto(id){
        return apiClient.delete(`/gallery/${id}`)
    }
}