<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="name"
        label="Name:"
        label-for="name"
      >
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="photo" label="Enter photo URL:" label-for="photo">
        <b-form-input
          id="photo"
          v-model="form.photo"
          placeholder="Enter photo URL"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import ProfileService from "../../services/ProfileService"
  export default {
    data() {
      return {
        form: {
          name: '',
          photo: ""
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        const data = this.form;
        console.log(data)
        ProfileService.setProfile(data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        }) 
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.photo = ""
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>