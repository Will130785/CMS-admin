<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="title"
        label="Job Title:"
        label-for="title"
      >
        <b-form-input
          id="title"
          v-model="form.title"
          type="text"
          placeholder="Enter job title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="duties" label="Duties:" label-for="duties">
        <b-form-input
          id="duties"
          v-model="form.duties"
          placeholder="Enter duties"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="contact" label="Contact Name:" label-for="contact">
        <b-form-input
          id="contact"
          v-model="form.contact"
          placeholder="Enter contact name"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import VacancyService from "../../services/VacancyService"
  export default {
    data() {
      return {
        form: {
          title: '',
          duties: '',
          contact: ""
        },
        show: true
      }
    },
    methods: {
      onSubmit() {
        const data = this.form;
        console.log(data)
        VacancyService.setVacancy(data)
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
        this.form.title = ''
        this.form.duties = ''
        this.form.contact = ""
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>