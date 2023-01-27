<template>

    <div class="principal">
        <div>

            <span>Hecho por Luis Miguel Sempere Gómez 1ºDAW</span>
        </div>
      
        <div class="links">
            <p>Más informaión de la película</p>
            <a href="https://es.wikipedia.org/wiki/Ocho_apellidos_catalanes">Wikipedia</a> 
            <a href="https://www.filmaffinity.com/es/film264280.html">filmaffinity</a> 
            <a href="https://www.sensacine.com/peliculas/pelicula-231483/">Sensacine</a>
        </div>
    </div>
</template>


<style scoped>
    .principal {
        @apply grid sm:grid-cols-2 justify-center py-6 px-10 text-xl bg-red-700;
    }

    .principal div {
        @apply mx-auto;
    }


</style>