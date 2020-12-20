<template>
    <div>
        <b-jumbotron>
        <template #header>{{title}}</template>

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
  <b-button v-b-modal.modal-1>Add {{record}}</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
    <Modal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
</template>

<script>
    // import EventModal from "./modals/EventModal"
    import modal from "./index"
    export default {
        components: {
            Modal: modal.page
            
        },
        props: {
            title: String,
            record: String,
            page: String
        }
    }
</script>

<style scoped>

</style>