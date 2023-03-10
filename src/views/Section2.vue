<template>
    <div class="container"></div>
  
    <section>
      <h1>Sección 2 Ocho apellidos catalanes</h1>
      <a href="src/rss/section2.xml">noticias de la pelicula</a>
    </section>
  </template>
  
  <script>
  
  
  export default {
  }
  </script>
  
  <style scoped>
  h1 {
    @apply text-6xl text-center font-title py-4;
  }
  
  section img {
    @apply w-[800px] rounded;
  }
  .container {
    @apply w-full h-[90vh] flex -z-50 bg-[url('@/assets/portada.jpg')] bg-fixed bg-cover items-end;
  }
  
  section {
    @apply -mt-32 z-50 bg-white rounded-t-[4rem];
  }
  
  </style>