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
    getTestimonials(){
        return apiClient.get("/testimonials")
    },
    getTestimonial(id){
        return apiClient.get(`/testimonials/${id}`)
    },
    setTestimonial(data){
        return apiClient.post("/testimonials", data)
    },
    deleteTestimonial(id){
        return apiClient.delete(`/testimonials/${id}`)
    }
}