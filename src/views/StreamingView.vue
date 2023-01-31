<template>
    <h1>Dónde ver</h1>

    <div>
        <card/>
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        card: defineAsyncComponent( () => import("@/components/Card.vue"))
    }
}
</script>

<style scoped>

    

</style>