<template>
    <div class="venues">
        <div>
        <b-jumbotron>
        <template #header>Venues</template>

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
  <b-button v-b-modal.modal-1>Add Venue</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
    <VenueModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
    import VenueModal from "../components/modals/VenueModal"
    export default {
        components: {
            VenueModal
        }
    
    }
</script>

<style scoped lang="scss">
    .venues {
        width: 100%;
        height: 50rem;
        background-color: #fff;
    }
</style>