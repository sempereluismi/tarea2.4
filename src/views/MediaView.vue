<template>
    <div class="container"></div>
    <section>

        <h1>Imágenes de la película</h1>
       
        <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/ebyALRLNdpA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </section>
</template>

<style scoped>
.container {
  @apply w-full h-[90vh] flex -z-50 bg-[url('@/assets/media3.jpg')] bg-fixed bg-cover items-end;
}

section {
  @apply -mt-32 z-50 bg-white rounded-t-[4rem];
}

h1 {
  @apply text-6xl text-center font-title py-4;
}

.video {
    @apply flex justify-center my-10;
}


</style>