<!--<template>
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
</style>-->

<template>
  <div class="login">
    <b-form class="login-form" v-if="show">
      <b-form-group
        id="username"
        label="Username:"
        label-for="username"
      >
        <b-form-input
          id="username"
          v-model="form.username"
          type="text"
          placeholder="Enter username"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="password" label="Password:" label-for="password">
        <b-form-input
          id="password"
          v-model="form.password"
          type="password"
          placeholder="Enter password"
          required
        ></b-form-input>
        
      </b-form-group>

      <b-form-group id="confirm-password" label="Confirm Password:" label-for="confirm-password">
        <b-form-input
          id="confirm-password"
          v-model="form.confirmPassword"
          type="password"
          placeholder="Confirm password"
          required
        ></b-form-input>
        
      </b-form-group>

      <b-button v-on:click="registerUser" type="submit" variant="primary">Register User</b-button>
      <b-button  type="reset" variant="danger">Clear</b-button>
    </b-form>
  </div>
</template>

<script>
import UserService from "../services/UserService"
  export default {
    data() {
      return {
        form: {
          username: '',
          password: '',
          confirmPassword: ""
        },
        show: true
      }
    },
    methods: {
      registerUser(event) {
        event.preventDefault()
        console.log("You registered a new user", this.form.username, this.form.password)
        const data = this.form
        UserService.setUser(data)
        .then(response => {
            console.log(response.data)
            
        })
        .catch(error => {
            console.log(error.response)
        })
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.username = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>

<style scoped lang="scss">
    .login {
        width: 100% !important;
        display: flex;
        justify-content: center;
    }

    .login-form {
        width: 25%;
    }
    
</style>