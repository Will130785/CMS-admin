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
// import UserService from "../services/UserService"
import { mapActions } from "vuex"
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
      // registerUser(event) {
      //   event.preventDefault()
      //   console.log("You registered a new user", this.form.username, this.form.password)
      //   const data = this.form
      //   UserService.setUser(data)
      //   .then(response => {
      //       console.log(response.data)
            
      //   })
      //   .catch(error => {
      //       console.log(error.response)
      //   })
      // },
      ...mapActions(["register"]),
      registerUser(event){
        event.preventDefault()
        let user = this.form
        this.register(user).then(res => {
          if(res.data.success){
            this.$router.push("/")
          }
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