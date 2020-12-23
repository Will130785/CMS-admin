// import axios from "axios";
import apiClient from "./api"

export default {
    getEvents(){
        return apiClient().get("/events")
    },
    getEvent(id){
        return apiClient().get(`/events/${id}`)
    },
    setEvent(data){
        return apiClient().post("/events", data)
    },
    deleteEvent(id){
        return apiClient().delete(`/events/${id}`)
    }
}