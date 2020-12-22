<template>
    <div class="user">
        <div>
        <b-jumbotron>
        <template #header>Users</template>

        <template #lead>
            <div class="user-container">
                <div v-for="(user, index) in users" :key="index" class="user-entry">
                    <p>{{user.username}}</p>
                    <p>{{user.password}}</p>
                    <button v-on:click="onDelete($event, user._id)" type="button" class="btn btn-danger">Delete</button>
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
    <UserModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
import UserModal from "../components/modals/UserModal"
import UserService from "../services/UserService"
    export default {
        data(){
            return {
                users: []
            }
        },
        components: {
            UserModal
        },
        created(){
            UserService.getUsers()
            .then(response => {
                console.log(this.users)
                this.users = response.data
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`)
            })
        },
        methods: {
            onDelete(event, id){
                UserService.deleteUser(id)
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
    .user {
        width: 100%;
        height: 50rem;
        background-color: #fff;
    }

    .user-container {
        display: grid;
        grid-template-columns: 1fr;
    }

    .user-entry {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>