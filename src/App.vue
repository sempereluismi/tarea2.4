<template>
  <header>
    <NavBar/>
  </header>
  <main>
    <router-view/>
  </main>
  <Footer/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: {
    NavBar: defineAsyncComponent(() => import('@/components/NavBar.vue')),
    Footer: defineAsyncComponent( () => import('@/components/Footer.vue'))
  }  
}

</script>

<style scoped>
  main {
    @apply mt-16;
  }
</style>