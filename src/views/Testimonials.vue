<template>
    <div class="entries">
        <div>
        <b-jumbotron>
        <template #header>Testimonials</template>

        <template #lead>
            <div class="entry-container">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="entry">
                    <p>{{testimonial.name}}</p>
                    <p>{{testimonial.date}}</p>
                    <button v-on:click="onDelete($event, testimonial._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <div>
  <b-button v-b-modal.modal-1>Add Testimonial</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Add a new testimonial</p>
    <TestimonialModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
import TestimonialModal from "../components/modals/TestimonialModal"
import TestimonialService from "../services/TestimonialService"
    export default {
        data(){
            return {
                testimonials: []
            }
        },
        components: {
            TestimonialModal
        },
        created(){
            TestimonialService.getTestimonials()
            .then(response => {
                console.log(this.testimonials)
                this.testimonials = response.data
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`)
            })
        },
        methods: {
            onDelete(event, id){
                TestimonialService.deleteTestimonial(id)
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
    

</style>