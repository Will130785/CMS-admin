import apiClient from "./api"

export default {
    getVacancies(){
        return apiClient().get("/vacancies")
    },
    getVacancy(id){
        return apiClient().get(`/vacancies/${id}`)
    },
    setVacancy(data){
        return apiClient().post("/vacancies", data)
    },
    deleteVacancy(id){
        return apiClient().delete(`/vacancies/${id}`)
    }
}