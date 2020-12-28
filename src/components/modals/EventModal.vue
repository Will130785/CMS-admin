<template>
  <div>
    <b-form @submit.prevent="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="title"
        label="Event Title:"
        label-for="name"
      >
        <b-form-input
          id="title"
          v-model="form.title"
          type="text"
          placeholder="Enter name of event"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="date" label="Event Date:" label-for="date">
        <b-form-input
          id="date"
          type="date"
          v-model="form.date"
          placeholder="Enter event date"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="time" label="Time of Event:" label-for="time">
        <b-form-input
          id="time"
          type="time"
          v-model="form.time"
          placeholder="Enter event time"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="image" label="Event image:" label-for="image">
        <b-form-input
          v-model="form.imageLink"
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

      <b-form-group id="link" label="Event link:" label-for="link">
        <b-form-input
          v-model="form.link"
          id="link"
          placeholder="Enter event link"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="status" label="Event status:" label-for="status">
        <b-form-input
          v-model="form.status"
          id="status"
          placeholder="Enter event status"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import router from "../../router"
import EventService from "../../services/EventService"
  export default {
    data() {
      return {
        form: {
          title: "",
          date: "",
          time: "",
          imageLink: "",
          description: "",
          link: "",
          status: ""
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
          router.push("/events")
        })
        .catch(error => {
          console.log(error.response)
        }) 
      },
      onReset() {
        // event.preventDefault()
        // Reset our form values
          this.form.title = ""
          this.form.date = ""
          this.form.time = ""
          this.form.imageLink = ""
          this.form.description = ""
          this.form.link = ""
          this.form.status = ""
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>