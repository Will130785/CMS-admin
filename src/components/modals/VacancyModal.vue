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
  export default {
    data() {
      return {
        form: {
          title: '',
          duties: '',
          contact: ""
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
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