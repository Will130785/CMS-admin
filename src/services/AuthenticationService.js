import apiClient from "./api"

export default {
    register(credentials) {
        return apiClient().post("register", credentials)
    },
    login(credentials) {
        return apiClient().post("/login", credentials)
    }
}