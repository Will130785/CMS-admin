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
    getVacancies(){
        return apiClient.get("/vacancies")
    },
    getVacancy(id){
        return apiClient.get(`/vacancies/${id}`)
    },
    setVacancy(data){
        return apiClient.post("/vacancies", data)
    },
    deleteVacancy(id){
        return apiClient.delete(`/vacancies/${id}`)
    }
}