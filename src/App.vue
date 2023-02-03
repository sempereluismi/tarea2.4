<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main>
      <router-view v-slot="{ Component }">
      <transition name="fade" >
        <div :key="$route.name">
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
    </main>
    <Footer />
  </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
  components: {
    NavBar: defineAsyncComponent(() => import('@/components/NavBar.vue')),
    Footer: defineAsyncComponent(() => import('@/components/Footer.vue'))
  }
}

</script>

<style scoped>
main {
  @apply mt-16;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>