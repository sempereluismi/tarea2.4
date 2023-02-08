<template>

    <div class="container"></div>

    <section>
        <h1>Personajes</h1>

        <Personaje class="personaje" :img="dani" nombre="Daniel Rovira de Rivas" descripcion="Daniel Rovira de Rivas, más conocido simplemente como Dani Rovira Almargen (Málaga, 1 de noviembre de 1980) es un
            actor, presentador, comediante, locutor y filántropo español. Ganó el Goya en 2015 a mejor actor revelación por
            la película Ocho apellidos vascos, dirigida por Emilio Martínez-Lázaro." />

        <Personaje class="personaje" :img="clara" nombre="Clara Lago Grau"
            descripcion="Clara Lago Grau (Torrelodones, Madrid; 6 de marzo de 1990) es una actriz española conocida principalmente por interpretar a Carol en El viaje de Carol (2002), Clara en Primos (2011), Gin en Tengo ganas de ti (2012), Amaia en Ocho apellidos vascos (2014) y en su secuela Ocho apellidos catalanes (2015)" />

        <Personaje class="personaje" :img="carmen" nombre="Carmen Machi"
            descripcion="María del Carmen Machi Arroyo (Madrid, 21 de septiembre de 1963), conocida como Carmen Machi, es una reconocida actriz española, con amplia trayectoria en cine, teatro." />

        <Personaje class="personaje" :img="karra" nombre="Karra Elejalde"
            descripcion="Carlos Elejalde Garay, más conocido como Karra Elejalde (Vitoria, Álava, 10 de octubre de 1960), es un actor, director de cine y guionista español." />

        <Personaje class="personaje" :img="rosa" nombre="Rosa María Sardà"
            descripcion="Rosa María Sardà Tàmaro (Barcelona, 30 de julio de 1941 - ib., 11 de junio de 2020) fue una actriz, humorista, presentadora y directora teatral española. Comenzó como actriz cómica, registro que en los últimos años combinó con el de intérprete dramática en español y en catalán." />
        <Personaje class="personaje" :img="img6" nombre="Judit Belén Cuesta"
            descripcion="Ha sido nominada en tres ocasiones a los Premios Goya, obteniendo el galardón como mejor actriz protagonista por su papel en La trinchera infinita (2019). Es conocida por su participación en películas y series de gran popularidad como Ocho apellidos catalanes (2015), Paquita Salas (2016-2019), La llamada (2017) y La casa de papel (2019-2021)."/>
    </section>

</template>

<script>
import { defineAsyncComponent } from 'vue'
//assets
import img1 from '@/assets/Dani.jpeg'
import img2 from '@/assets/clara.jpg'
import img3 from '@/assets/carmen.jpg'
import img4 from '@/assets/karra.jpg'
import img5 from '@/assets/rosa-maria-sarda.jpg'
import img6 from '@/assets/judit.jpg'



export default {

    data() {
        return {
            dani: img1,
            clara: img2,
            carmen: img3,
            karra: img4,
            rosa: img5,
            img6
        }
    },

    components: {
        Personaje: defineAsyncComponent(() => import('@/components/personajes/personaje.vue'))
    }
}
</script>


<style scoped>
h1 {
    @apply text-6xl text-center font-title py-4 col-span-1 lg:col-span-2 xl:col-span-3;
}

section {
    @apply  -mt-32 z-50 bg-white rounded-t-[4rem] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3;
}

.container {
    @apply w-full h-[90vh] flex -z-50 bg-[url('@/assets/personajes.webp')] bg-fixed bg-cover items-end;
}

.personaje {
    @apply hover:-translate-y-2 transition-all duration-200;
}

</style>
