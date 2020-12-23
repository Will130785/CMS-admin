import apiClient from "./api"

export default {
    getUsers(){
        return apiClient().get("/users")
    },
    getUser(id){
        return apiClient().get(`/users/${id}`)
    },
    setUser(data){
        return apiClient().post("/users", data)
    },
    deleteUser(id){
        return apiClient().delete(`/users/${id}`)
    }
}