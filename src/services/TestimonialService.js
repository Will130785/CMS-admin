import apiClient from "./api"

export default {
    getTestimonials(){
        return apiClient().get("/testimonials")
    },
    getTestimonial(id){
        return apiClient().get(`/testimonials/${id}`)
    },
    setTestimonial(data){
        return apiClient().post("/testimonials", data)
    },
    deleteTestimonial(id){
        return apiClient().delete(`/testimonials/${id}`)
    }
}