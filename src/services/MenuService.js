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
    getMenus(){
        return apiClient.get("/menus")
    },
    getMenu(id){
        return apiClient.get(`/menus/${id}`)
    },
    setMenu(data){
        return apiClient.post("/menus", data)
    },
    deleteMenu(id){
        return apiClient.delete(`/menus/${id}`)
    }
}