<template>
    <div class="entries">
        <div>
        <b-jumbotron>
        <template #header>Menus</template>

        <template #lead>
            <div class="entry-container">
                <div v-for="(menu, index) in menus" :key="index" class="entry">
                    <p>{{menu.name}}</p>
                    <p>{{menu.menu}}</p>
                    <button v-on:click="onDelete($event, menu._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <div>
  <b-button v-b-modal.modal-1>Add Menu</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Add a new menu</p>
    <MenuModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
import MenuModal from "../components/modals/MenuModal"
import MenuService from "../services/MenuService"
    export default {
        data(){
            return {
                menus: []
            }
        },
        components: {
            MenuModal
        },
        created(){
            MenuService.getMenus()
            .then(response => {
                console.log(this.menus)
                this.menus = response.data
            })
            .catch(error => {
                console.log(`There was an error: ${error.response}`)
            })
        },
        methods: {
            onDelete(event, id){
                MenuService.deleteMenu(id)
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