<template>
  <nav>
    <router-link :to="{ name: 'home' }">
      <div class="nav-left">
        <span>Ocho apellidos Catalanes</span>
      </div>
    </router-link>

    <div class="nav-right">
      <router-link :to="{ name: 'home' }">Inicio</router-link>
      <router-link :to="{ name: 'director' }">Director</router-link>
      <router-link :to="{ name: 'personaje' }">Personajes</router-link>
      <router-link :to="{ name: 'streaming' }">Dónde ver</router-link>
      <router-link :to="{ name: 'media' }">Media</router-link>
      <router-link :to="{ name: 'opinion' }">Opinión</router-link>
      <span @click="showDropdown = !showDropdown">Sections</span>
    </div>


    <div class="icon" @click="showMenu = !showMenu">
      <i class="fa-solid fa-bars"></i>
    </div>
  </nav>
  <transition name="bounce">
    <div class="mobile" v-if="showMenu">
        <router-link @click="ocultarDropdown" :to="{ name: 'home' }">Inicio</router-link>
        <router-link @click="ocultarDropdown" :to="{ name: 'director' }">Director</router-link>
        <router-link @click="ocultarDropdown" :to="{ name: 'personaje' }">Personajes</router-link>
        <router-link @click="ocultarDropdown" :to="{ name: 'streaming' }">Dónde ver</router-link>
        <router-link @click="ocultarDropdown" :to="{ name: 'media' }">Media</router-link>
        <router-link @click="ocultarDropdown" :to="{ name: 'opinion' }">Opinión</router-link>
      </div>
  </transition>
  <transition name="bounce">
    <div v-if="showDropdown" class="dropDown">
      <router-link :to="{name: 'section1'}">Sección 1</router-link>
      <router-link :to="{name: 'section2'}">Sección 2</router-link>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
      showDropdown: false
    }
  },

  methods: {
    ocultarDropdown() {
      if ( this.showDropdown ) {
        this.showDropdown = false;
      }
    }
  }
}
</script>


<style scoped>
nav {
  @apply flex justify-between fixed top-0 left-0 right-0 bg-white max-h-max z-50;
}

span {
  @apply cursor-pointer;
}

.icon {
  @apply flex justify-center items-center w-[100px] text-2xl cursor-pointer xl:hidden;
}

.nav-right {
  @apply hidden xl:flex items-center text-lg;
}

.mobile {
  @apply z-50 fixed py-4 bg-white w-full flex flex-col justify-center items-center text-lg gap-10;
}

.nav-left {
  @apply items-stretch py-4 px-4 flex;
}
.nav-right a, .mobile a, span, .dropDown a  {
  @apply relative mx-4;
}

.nav-right a::before, .mobile a::before, span::before, .dropDown a::before {
  @apply content-[''] absolute left-0 bottom-0 w-full h-[2px] bg-background rounded-[4px];
  scale: 0 1;
  transform-origin: left;
  transition: scale 0.25s;
}

.nav-right a:hover::before, .mobile a:hover::before, span:hover::before, .dropDown a:hover::before{
  scale: 1;
}

.nav-right a:hover, .mobile a:hover, span:hover, .dropDown a:hover {
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

.dropDown {
  @apply z-50 rounded-lg fixed py-4 px-4 bg-white flex flex-col justify-center items-center text-lg gap-10 right-0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>