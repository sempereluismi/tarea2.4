<template>
  <header>
    
    <NavBar/>

  </header>
  <router-view/>
  <footer>
    Hecho por Luis Miguel Sempere Gómez 1ºDAW
  </footer>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: {
    NavBar: defineAsyncComponent(() => import('@/components/NavBar.vue'))
  }  
}

</script>


