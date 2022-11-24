<template>
  <div>

    <Intro/>
    <Argumento/>

  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  name: 'HomeView',
  components: {
    Intro: defineAsyncComponent(() => import('@/components/inicio/Intro.vue')),
    Argumento: defineAsyncComponent(() => import('@/components/inicio/argumento.vue'))
  }
}
</script>
