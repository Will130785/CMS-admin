<template>
    <div class="users">
        <div>
        <b-jumbotron>
        <template #header>Users</template>

        <template #lead>
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
            featured content or information.
        </template>

        <hr class="my-4">

        <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
        </p>

        <div>
  <b-button v-b-modal.modal-1>Add User</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
    <UserModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
    import UserModal from "../components/modals/UserModal"
    export default {
        components: {
            UserModal
        }
        }
</script>

<style scoped lang="scss">
    .users {
        width: 100%;
        height: 50rem;
        background-color: #fff;
    }
</style>