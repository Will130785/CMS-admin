<template>
    <div class="testimonial">
        <div>
        <b-jumbotron>
        <template #header>Testimonials</template>

        <template #lead>
            <div class="testimonial-container">
                <div v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-entry">
                    <p>{{testimonial.name}}</p>
                    <p>{{testimonial.date}}</p>
                    <button v-on:click="onDelete($event, testimonial._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
        </p>

        <div>
  <b-button v-b-modal.modal-1>Add Profile</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
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
    .testimonial {
        width: 100%;
        height: 50rem;
        background-color: #fff;
    }

    .testimonial-container {
        display: grid;
        grid-template-columns: 1fr;
    }

    .testimonial-entry {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>