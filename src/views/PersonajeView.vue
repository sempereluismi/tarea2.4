<template>
    <h1>Personajes</h1>

    <Personaje
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Dani_Rovira_en_%C3%93xido_Nitroso_en_2011.JPG/220px-Dani_Rovira_en_%C3%93xido_Nitroso_en_2011.JPG"

        nombre="Daniel Rovira de Rivas"

        descripcion="Daniel Rovira de Rivas, más conocido simplemente como Dani Rovira Almargen (Málaga, 1 de noviembre de 1980) es un
        actor, presentador, comediante, locutor y filántropo español. Ganó el Goya en 2015 a mejor actor revelación por
        la película Ocho apellidos vascos, dirigida por Emilio Martínez-Lázaro." />
    
    <Personaje
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Premios_Goya_2020_-_Clara_Lago_%28cropped%29.jpg/220px-Premios_Goya_2020_-_Clara_Lago_%28cropped%29.jpg"

        nombre="Clara Lago Grau"

        descripcion ="Clara Lago Grau (Torrelodones, Madrid; 6 de marzo de 1990) es una actriz española conocida principalmente por interpretar a Carol en El viaje de Carol (2002), Clara en Primos (2011), Gin en Tengo ganas de ti (2012), Amaia en Ocho apellidos vascos (2014) y en su secuela Ocho apellidos catalanes (2015) y Eva en la película estadounidense El pasajero (2018), así como por su participación en series de televisión como Compañeros (2000-2002), Los hombres de Paco (2007-2008), El vecino (2019-2021) en Netflix y Limbo (2021)."
    />

    <Personaje
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Carmen_Machi%2C_Festival_de_Sitges_2017.jpg/220px-Carmen_Machi%2C_Festival_de_Sitges_2017.jpg"

        nombre="Carmen Machi"

        descripcion="María del Carmen Machi Arroyo (Madrid, 21 de septiembre de 1963), conocida como Carmen Machi, es una reconocida actriz española, con amplia trayectoria en cine, teatro."
    />

    <Personaje
        img="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Karra_Elejalde%2C_XIII_Premis_Gaud%C3%AD_%282021%29.jpg/250px-Karra_Elejalde%2C_XIII_Premis_Gaud%C3%AD_%282021%29.jpg"

        nombre="Karra Elejalde"

        descripcion="Carlos Elejalde Garay, más conocido como Karra Elejalde (Vitoria, Álava, 10 de octubre de 1960), es un actor, director de cine y guionista español."
    />    
    
    <Personaje
        img="https://cdn.diariodeavisos.com/wp-content/uploads/2020/06/rosa-maria-sarda.jpg"

        nombre="Rosa María Sardà"

        descripcion="Rosa María Sardà Tàmaro (Barcelona, 30 de julio de 1941 - ib., 11 de junio de 2020) fue una actriz, humorista, presentadora y directora teatral española. Comenzó como actriz cómica, registro que en los últimos años combinó con el de intérprete dramática en español y en catalán."
    />

</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
    components: {
        Personaje: defineAsyncComponent(() => import('@/components/personajes/personaje.vue'))
    }
}
</script>

