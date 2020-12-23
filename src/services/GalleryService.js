import apiClient from "./api"

export default {
    getPhotos(){
        return apiClient().get("/gallery")
    },
    getPhoto(id){
        return apiClient().get(`/gallery/${id}`)
    },
    setPhoto(data){
        return apiClient().post("/gallery", data)
    },
    deletePhoto(id){
        return apiClient().delete(`/gallery/${id}`)
    }
}