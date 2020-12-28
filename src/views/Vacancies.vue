<template>
    <div class="entries">
        <div>
        <b-jumbotron>
        <template #header>Job Vacancies</template>

        <template #lead>
            <div class="entry-container">
                <div v-for="(vacancy, index) in vacancies" :key="index" class="entry">
                    <p>{{vacancy.title}}</p>
                    <p>{{vacancy.contact}}</p>
                    <button v-on:click="onDelete($event, vacancy._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <div>
  <b-button v-b-modal.modal-1>Add Vacancy</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Add a new job vacancy</p>
    <VacancyModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
import VacancyModal from "../components/modals/VacancyModal"
import VacancyService from "../services/VacancyService"
    export default {
        data(){
            return {
                vacancies: []
            }
        },
        components: {
            VacancyModal
        },
        created(){
            VacancyService.getVacancies()
            .then(response => {
                console.log(this.vacancies)
                this.vacancies = response.data
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`)
            })
        },
        methods: {
            onDelete(event, id){
                VacancyService.deleteVacancy(id)
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