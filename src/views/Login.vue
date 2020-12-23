<template>
  <div class="login">
    <b-form class="login-form" @submit="loginUser" @reset="onReset" v-if="show">
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

      <b-button type="submit" variant="primary">Login</b-button>
      <b-button type="reset" variant="danger">Clear</b-button>
    </b-form>
  </div>
</template>

<script>
  // import router from "../router"
  // import AuthenticationService from "../services/AuthenticationService"
  import { mapActions } from "vuex"
  export default {
    data() {
      return {
        form: {
          username: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      // loginUser(event) {
      //   event.preventDefault()
      //   const data = this.form
      //   AuthenticationService.login(data)
      //   .then(response => {
      //     console.log(response.data)
      //     router.push("/events")
      //   })
      //   .catch(error => {
      //     console.log(error.response)
      //     router.push("/profile")
      //   })
        
      // },
      ...mapActions(["login"]),
      loginUser(event){
        event.preventDefault()
          let user = this.form
          this.login(user)
          .then(res => {
            if(res.data.success){
              this.$router.push("/profile");
            }
          })
          .catch(err => {
            console.log(err)
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