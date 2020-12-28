<template>
    <div class="entries">
        <div>
        <b-jumbotron>
        <template #header>Gallery</template>

        <template #lead>
            <div class="entry-container">
                <div v-for="(photo, index) in photos" :key="index" class="entry">
                    <p>{{photo.image}}</p>
                    <p>{{photo.description}}</p>
                    <button v-on:click="onDelete($event, photo._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <div>
  <b-button v-b-modal.modal-1>Add Photo</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Add a new photo</p>
    <GalleryModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
import GalleryModal from "../components/modals/GalleryModal"
import GalleryService from "../services/GalleryService"
    export default {
        data(){
            return {
                photos: []
            }
        },
        components: {
            GalleryModal
        },
        created(){
            GalleryService.getPhotos()
            .then(response => {
                console.log(this.photos)
                this.photos = response.data
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`)
            })
        },
        methods: {
            onDelete(event, id){
                GalleryService.deletePhoto(id)
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