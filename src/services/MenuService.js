import apiClient from "./api"

export default {
    getMenus(){
        return apiClient().get("/menus")
    },
    getMenu(id){
        return apiClient().get(`/menus/${id}`)
    },
    setMenu(data){
        return apiClient().post("/menus", data)
    },
    deleteMenu(id){
        return apiClient().delete(`/menus/${id}`)
    }
}