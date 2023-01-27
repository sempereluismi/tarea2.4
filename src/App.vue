<template>
  <header>
    <NavBar/>
  </header>
  <router-view/>
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
