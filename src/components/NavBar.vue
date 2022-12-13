<template>
  <nav>
    <div class="nav-left">
      <span class="gradient"
        ><h1 class="logo">Ocho apellidos catalanes
        </h1></span>
    </div>

    <div class="nav-right">
      <router-link :to="{ name: 'home' }">inicio</router-link>
      <router-link :to="{ name: 'director' }">Director</router-link>
      <router-link :to="{ name: 'personaje' }">Personajes</router-link>
      <router-link :to="{ name: 'streaming' }">Dónde ver</router-link>
      <router-link :to="{ name: 'media' }">Media</router-link>
      <router-link :to="{ name: 'opinion' }">Opinión</router-link>
      <router-link :to="{ name: 'bibliografia' }">Más Info</router-link>
    </div>
  </nav>
</template>


<style scoped>

    nav {
        @apply flex justify-between py-4;
        @apply shadow-sm;
    }

    nav a {
        @apply  px-3 py-4 text-center justify-center items-center;
    }
    nav a.router-link-exact-active {
        @apply text-white bg-red-400;
    }

</style>