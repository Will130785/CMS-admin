<template>
    <div class="menu">
        <div>
        <b-jumbotron>
        <template #header>Menus</template>

        <template #lead>
            <div class="menu-container">
                <div v-for="(menu, index) in menus" :key="index" class="menu-entry">
                    <p>{{menu.name}}</p>
                    <p>{{menu.menu}}</p>
                    <button v-on:click="onDelete($event, menu._id)" type="button" class="btn btn-danger">Delete</button>
                </div>
            </div>
        </template>

        <hr class="my-4">

        <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
        </p>

        <div>
  <b-button v-b-modal.modal-1>Add Menu</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
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
    .menu {
        width: 100%;
        height: 50rem;
        background-color: #fff;
    }

    .menu-container {
        display: grid;
        grid-template-columns: 1fr;
    }

    .menu-entry {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }
</style>