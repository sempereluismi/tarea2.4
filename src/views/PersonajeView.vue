<template>
    <h1>Personajes</h1>

    <Personaje
        :img="dani"

        nombre="Daniel Rovira de Rivas"

        descripcion="Daniel Rovira de Rivas, más conocido simplemente como Dani Rovira Almargen (Málaga, 1 de noviembre de 1980) es un
        actor, presentador, comediante, locutor y filántropo español. Ganó el Goya en 2015 a mejor actor revelación por
        la película Ocho apellidos vascos, dirigida por Emilio Martínez-Lázaro." />
    
    <Personaje
        :img="clara"

        nombre="Clara Lago Grau"

        descripcion ="Clara Lago Grau (Torrelodones, Madrid; 6 de marzo de 1990) es una actriz española conocida principalmente por interpretar a Carol en El viaje de Carol (2002), Clara en Primos (2011), Gin en Tengo ganas de ti (2012), Amaia en Ocho apellidos vascos (2014) y en su secuela Ocho apellidos catalanes (2015) y Eva en la película estadounidense El pasajero (2018), así como por su participación en series de televisión como Compañeros (2000-2002), Los hombres de Paco (2007-2008), El vecino (2019-2021) en Netflix y Limbo (2021)."
    />

    <Personaje
        :img="carmen"

        nombre="Carmen Machi"

        descripcion="María del Carmen Machi Arroyo (Madrid, 21 de septiembre de 1963), conocida como Carmen Machi, es una reconocida actriz española, con amplia trayectoria en cine, teatro."
    />

    <Personaje
        :img="karra"

        nombre="Karra Elejalde"

        descripcion="Carlos Elejalde Garay, más conocido como Karra Elejalde (Vitoria, Álava, 10 de octubre de 1960), es un actor, director de cine y guionista español."
    />    
    
    <Personaje
        :img="rosa"

        nombre="Rosa María Sardà"

        descripcion="Rosa María Sardà Tàmaro (Barcelona, 30 de julio de 1941 - ib., 11 de junio de 2020) fue una actriz, humorista, presentadora y directora teatral española. Comenzó como actriz cómica, registro que en los últimos años combinó con el de intérprete dramática en español y en catalán."
    />

</template>

<script>
import { defineAsyncComponent } from 'vue'
//assets
import img1 from '@/assets/Dani.jpeg'
import img2 from '@/assets/clara.jpg'
import img3 from '@/assets/carmen.jpg'
import img4 from '@/assets/karra.jpg'
import img5 from '@/assets/rosa-maria-sarda.jpg'



export default {

    data() {
        return {
            dani: img1,
            clara: img2,
            carmen: img3,
            karra: img4,
            rosa: img5
        }
    },

    components: {
        Personaje: defineAsyncComponent(() => import('@/components/personajes/personaje.vue'))
    }
}
</script>

