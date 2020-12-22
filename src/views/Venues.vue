<template>
    <div class="venue">
        <div>
        <b-jumbotron>
        <template #header>Venues</template>

        <template #lead>
            <div class="venue-container">
                <div v-for="(venue, index) in venues" :key="index" class="venue-entry">
                    <p>{{venue.name}}</p>
                    <p>{{venue.subHeading}}</p>
                    <button v-on:click="onDelete($event, venue._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
        </p>

        <div>
  <b-button v-b-modal.modal-1>Add Venue</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
    <VenueModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
import VenueModal from "../components/modals/VenueModal"
import VenueService from "../services/VenueService"
    export default {
        data(){
            return {
                venues: []
            }
        },
        components: {
            VenueModal
        },
        created(){
            VenueService.getVenues()
            .then(response => {
                console.log(this.venues)
                this.venues = response.data
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`)
            })
        },
        methods: {
            onDelete(event, id){
                VenueService.deleteVenue(id)
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
    .venue {
        width: 100%;
        height: 50rem;
        background-color: #fff;
    }

    .venue-container {
        display: grid;
        grid-template-columns: 1fr;
    }

    .venue-entry {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>