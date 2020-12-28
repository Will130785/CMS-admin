<template>
    <div class="entries">
        <div>
        <b-jumbotron>
        <template #header>Events</template>

        <template #lead>
            <div class="entry-container">
                <div v-for="(event, index) in events" :key="index" class="entry">
                    <p>{{event.title}}</p>
                    <p>{{event.date}}</p>
                    <p>{{event.time}}</p>
                    <button v-on:click="onDelete($event, event._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <div>
  <b-button v-b-modal.modal-1>Add Event</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Add a new event</p>
    <EventModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
    import EventModal from "../components/modals/EventModal"
    import EventService from "../services/EventService"
    import router from "../router"
    export default {
        data(){
            return {
                events: []
            }
        },
        components: {
            EventModal
        },
        created(){
            EventService.getEvents()
            .then(response => {
                console.log(this.events)
                this.events = response.data
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`)
            })
        },
        methods: {
            onDelete(event, id){
                EventService.deleteEvent(id)
                .then(response => {
                    router.push("/events")
                    console.log(id, response)
                })
                .catch(error => {
                    console.log(error.response)
                })
            }
        }
    }
</script>

<style scoped lang="scss">
   

</style>