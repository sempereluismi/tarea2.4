<template>
    <h1>Imagenes y videos de la pelicula</h1>

    <Imagenes/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
    export default{
        components: {
            Imagenes: defineAsyncComponent(() => import('@/components/media/images.vue'))
        }
    }
</script>