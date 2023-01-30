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

    </div>
  </nav>
</template>


<style scoped>
nav {
  @apply flex justify-between fixed top-0 left-0 right-0 bg-white max-h-max;
}

.nav-right {
  @apply flex items-center text-lg;
}


.nav-left {
  @apply items-stretch py-4 px-4 flex;
}
.nav-right a  {
  @apply relative px-4;
}

.nav-right a::before {
  @apply content-[''] absolute left-0 bottom-0 w-full h-[2px] bg-background rounded-[4px];
  scale: 0 1;
  transform-origin: left;
  transition: scale 0.25s;
}

.nav-right a:hover::before {
  scale: 1;
}

.nav-right a:hover {
  @apply text-background;
}

.nav-right a.router-link-exact-active::before {
  @apply content-[''] absolute left-0 bottom-0 w-full h-[2px] bg-background rounded-[4px];
  scale: 1;
}

.nav-left {
  @apply bg-[url('../assets/icono.png')] bg-contain bg-no-repeat;
}

.nav-left span {
  @apply text-black text-2xl uppercase font-bold ml-10;

}
</style>