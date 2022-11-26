<template>
    <h1>Dejanos tu opinión sobre la película</h1>

    <FormOpinion/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        FormOpinion: defineAsyncComponent(() => import("@/components/opinion/Opinion.vue"))
    }
}
</script>