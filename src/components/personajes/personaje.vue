<template>
    <h2>{{ nombre }}</h2>
    <img :src="img" />
    <p>
        {{  descripcion  }}
    </p>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            required: true
        },

        nombre: {
            type: String,
            required: true
        },

        descripcion: {
            type: String,
            required: true
        }
    }
}
</script>