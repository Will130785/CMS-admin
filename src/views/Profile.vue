<template>
    <div class="profile">
        <div>
        <b-jumbotron>
        <template #header>Profiles</template>

        <template #lead>
            <div class="profile-container">
                <div v-for="(profile, index) in profiles" :key="index" class="profile-entry">
                    <p>{{profile.name}}</p>
                    <p>{{profile.photo}}</p>
                    <button v-on:click="onDelete($event, profile._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
        </p>

        <div>
  <b-button v-b-modal.modal-1>Add Profile</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
    <ProfileModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
import ProfileModal from "../components/modals/ProfileModal"
import ProfileService from "../services/ProfileService"
    export default {
        data(){
            return {
                profiles: []
            }
        },
        components: {
            ProfileModal
        },
        created(){
            ProfileService.getProfiles()
            .then(response => {
                console.log(this.profiles)
                this.profiles = response.data
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`)
            })
        },
        methods: {
            onDelete(event, id){
                ProfileService.deleteProfile(id)
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
    .profile {
        width: 100%;
        height: 50rem;
        background-color: #fff;
    }

    .profile-container {
        display: grid;
        grid-template-columns: 1fr;
    }

    .profile-entry {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>