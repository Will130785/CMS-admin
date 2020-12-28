<template>
    <div class="entries">
        <div>
        <b-jumbotron>
        <template #header>Venues</template>

        <template #lead>
            <div class="entry-container">
                <div v-for="(venue, index) in venues" :key="index" class="entry">
                    <p>{{venue.name}}</p>
                    <p>{{venue.subHeading}}</p>
                    <button v-on:click="onDelete($event, venue._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <div>
  <b-button v-b-modal.modal-1>Add Venue</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Add a new venue</p>
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
    

</style>