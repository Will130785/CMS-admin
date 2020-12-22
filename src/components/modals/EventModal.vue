<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="name"
        label="Event Title:"
        label-for="name"
      >
        <b-form-input
          id="name"
          v-model="form.name"
          type="text"
          placeholder="Enter name of event"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="date" label="Event Date:" label-for="date">
        <b-form-input
          id="date"
          v-model="form.date"
          placeholder="Enter event date"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="time" label="Time of Event:" label-for="time">
        <b-form-input
          id="time"
          v-model="form.time"
          placeholder="Enter event time"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="image" label="Event image:" label-for="image">
        <b-form-input
          v-model="form.image"
          id="image"
          placeholder="Enter image URL"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="description" label="Event description:" label-for="description">
        <b-form-input
          v-model="form.description"
          id="description"
          placeholder="Enter event description"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import EventService from "../../services/EventService"
  export default {
    data() {
      return {
        form: {
          name: "",
          date: "",
          time: "",
          image: "",
          description: ""
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        const data = this.form;
        console.log(data)
        EventService.setEvent(data)
        .then(response => {
          console.log(response)
        })
        .catch(error => {
          console.log(error.response)
        }) 
      },
      onReset() {
        // event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>