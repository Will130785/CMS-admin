<template>
    <div class="events">
        <div>
        <b-jumbotron>
        <template #header>Events</template>

        <template #lead>
            <div class="events-container">
                <div v-for="(event, index) in events" :key="index" class="event-entry">
                    <p>{{event.name}}</p>
                    <p>{{event.date}}</p>
                    <p>{{event.time}}</p>
                    <button v-on:click="onDelete($event, event._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
        </p>

        <div>
  <b-button v-b-modal.modal-1>Add Event</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
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
    .events {
        width: 100%;
        height: 50rem;
        background-color: #fff;
    }

    .events-container {
        display: grid;
        grid-template-columns: 1fr;
    }

    .event-entry {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>