<template>
    <div class="card">
            <a :href="link" target="_blank">
                <h2>{{ nombre }}</h2>
                    <img :src="img" />
                    <p>
                        Precio: {{ precio }}
                    </p>
            </a>
    </div>
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

        precio: {
            type: String,
            required: true
        },

        link: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped>
.card {
    @apply shadow-xl rounded-xl bg-white my-10 py-10 px-6 mx-6;
}


h2 {
    @apply font-title text-5xl tracking-[1rem] uppercase;
}

img {
    @apply w-[200px] h-[200px] rounded-xl;
}

p {
    @apply text-3xl mt-10;
}

a {
    @apply flex flex-col justify-center items-center;
}
</style>