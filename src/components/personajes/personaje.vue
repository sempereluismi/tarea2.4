<template>
    <div class="card">
        <h2>{{ nombre }}</h2>
        <div class="subcontainer">
            <img :src="img" />
            <p>
                {{  descripcion  }}
            </p>
        </div>
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

        descripcion: {
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
        @apply font-title text-4xl text-center;
    }

    .subcontainer {
        @apply items-center justify-center gap-10;
    }

    img {
        @apply w-[200px] h-[200px] rounded-xl mx-auto object-cover my-5;
    }
</style>