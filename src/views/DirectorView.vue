<template>
  <Intro/>
  <Biografia/>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  name: "Director",
  components: {
    Intro: defineAsyncComponent(() => import("@/components/director/Intro.vue")),
    Biografia: defineAsyncComponent(() => import("@/components/director/Biografia.vue")),
  }
}
</script>

