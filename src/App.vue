<template>
<header>
  <nav>
    <router-link :to="{name: 'home'}">inicio</router-link> |
    <router-link :to="{name: 'director'}">Director</router-link> | 
    <router-link :to="{name: 'personaje'}">Personajes</router-link> | 
    <router-link :to="{name: 'streaming'}">Dónde ver</router-link> | 
    <router-link :to="{name: 'media'}">Media</router-link> | 
    <router-link :to="{name: 'opinion'}">Opinión</router-link> | 
    <router-link :to="{name: 'bibliografia'}">Más Info</router-link> 
  </nav>

  </header>
  <router-view/>
  <footer>
    Hecho por Luis Miguel Sempere Gómez 1ºDAW
  </footer>
</template>

<style>
/*
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #000;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
