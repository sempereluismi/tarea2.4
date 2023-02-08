<template>
    <div class="container"></div>
  
    <section>
  
      <h1>Dónde Ver</h1>

      <card class="animationCard" :img="img1" nombre="Netflix" precio="Subcripción" link="https://www.netflix.com/es/title/80093212?source=35"/>
      <card class="animationCard" :img="img2" nombre="hbo max" precio="Subcripción" link="https://play.hbomax.com/page/urn:hbo:page:GYXELTwy7GjeNogEAAASe:type:feature?source=googleHBOMAX&action=open"/>
      <card class="animationCard" :img="img3" nombre="Movistar+" precio="3,99 €" link="https://ver.movistarplus.es/ficha?id=1278461&origen=GGL"/>
      <card class="animationCard" :img="img4" nombre="Amazon prime" precio="Subcripción" link="https://www.primevideo.com/dp/amzn1.dv.gti.0eb51679-3e6d-8d93-e698-d9860fe6e122?autoplay=0&ref_=atv_cf_strg_wb"/>
    </section>
  </template>

  <script>
import { defineAsyncComponent } from '@vue/runtime-core'

import img1 from '@/assets/netflix.png'
import img2 from '@/assets/hbo.jpg'
import img3 from '@/assets/movistar.jpg'
import img4 from '@/assets/prime.jpg'

  export default {
    components: {
      Card: defineAsyncComponent( () => import('@/components/Card.vue'))
    },

    data () {
      return {
        img1,
        img2,
        img3,
        img4
      }
    }
  }
  </script>
  
  <style scoped>
  h1 {
    @apply text-6xl text-center font-title py-4 uppercase lg:col-span-2;
  }
  
  
  .container {
    @apply w-full h-[90vh] flex -z-50 bg-[url('@/assets/streaming.jpg')] bg-fixed bg-cover items-end;
  }
  
  section {
    @apply grid grid-cols-1 lg:grid-cols-2 -mt-32 z-50 bg-white rounded-t-[4rem];
  }
  
  .animationCard {
    @apply hover:-translate-y-4 transition-all ease-in-out duration-200;
  }
  
  .layout {
    @apply mx-10 grid grid-cols-2 gap-4 items-center;
  }
  </style>
  