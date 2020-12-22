<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="name"
        label="Venue Name:"
        label-for="name"
      >
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Enter name of venue"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="sub" label="Sub Heading:" label-for="sub">
        <b-form-input
          id="sub"
          v-model="form.subHeading"
          placeholder="Enter sub heading"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="description" label="Venue Description:" label-for="description">
        <b-form-input
          id="description"
          v-model="form.description"
          placeholder="Enter venue description"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import VenueService from "../../services/VenueService"
  export default {
    data() {
      return {
        form: {
          name: '',
          sub: "",
          description: ""
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        const data = this.form;
        console.log(data)
        VenueService.setVenue(data)
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
        this.form.subHeading = ''
        this.form.description = ""
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>