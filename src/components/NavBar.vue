<template>
  <nav>
    <router-link :to="{ name: 'home' }">
      <div class="nav-left">
        <span>Ocho apellidos Catalanes</span>
      </div>
    </router-link>

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
  @apply flex justify-between items-stretch items-center;
}

.nav-right {
  @apply flex py-5 items-center;
}

.nav-right a,
.nav-left {
  @apply items-stretch py-4;
}

.nav-right a.router-link-exact-active {
  @apply text-white bg-red-400;
}

.nav-left {
  @apply bg-[url('../assets/icono.png')] bg-contain bg-no-repeat;
}

.nav-left span {
  @apply text-black text-2xl uppercase font-bold ml-10;

}
</style>