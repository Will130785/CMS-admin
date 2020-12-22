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

      <b-form-group id="date" label="Testimonial Date:" label-for="date">
        <b-form-input
          id="date"
          v-model="form.date"
          placeholder="Enter testimonial date"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="testimonial" label="Testimonial:" label-for="testimonial">
        <b-form-input
          id="testimonial"
          v-model="form.testimonial"
          placeholder="Enter testimonial"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import TestimonialService from "../../services/TestimonialService"
  export default {
    data() {
      return {
        form: {
          name: "",
          date: "",
          testimonial: ""
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        const data = this.form;
        console.log(data)
        TestimonialService.setTestimonial(data)
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
        this.form.date = ""
        this.form.testimonial = ""
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>