<template>
    <div>
        <b-modal id="modal-1" title="BootstrapVue">
            <b-form @submit="onSubmit"
                class="custom-form">
            <div class="text-center">
                <h4>Are you sure you want to delete?</h4>
            </div>

            <b-button block
                      type="danger"
                      variant="primary">Yes
            </b-button>
        </b-form>
        </b-modal>
    </div>
</template>

<script>
    export default {
        methods: {
            onSubmit() {
                console.log("You want to delete this entry")
            }
        }
    }
</script>