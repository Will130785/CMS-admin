<template>
    <div class="gallery">
        <div>
        <b-jumbotron>
        <template #header>Gallery</template>

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
  <b-button v-b-modal.modal-1>Add Photo</b-button>

  <b-modal id="modal-1" title="BootstrapVue">
    <p class="my-4">Hello from modal!</p>
    <GalleryModal />
  </b-modal>
</div>
    </b-jumbotron>
    </div>
    </div>
</template>

<script>
import GalleryModal from "../components/modals/GalleryModal"
    export default {
        components: {
            GalleryModal
        }
    }
</script>

<style scoped lang="scss">
    .gallery {
        width: 100%;
        height: 50rem;
        background-color: #fff;
    }
</style>