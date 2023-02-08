<template>

    <div class="principal">
        <div>

            <span>Hecho por Luis Miguel Sempere Gómez 1ºDAW</span>
        </div>

        <div>
            <p>Más informaión de la película</p>
            <div class="links">
                <a target="_blank" href="https://es.wikipedia.org/wiki/Ocho_apellidos_catalanes">Wikipedia</a>
                <a target="_blank" href="https://www.filmaffinity.com/es/film264280.html">filmaffinity</a>
                <a target="_blank" href="https://www.sensacine.com/peliculas/pelicula-231483/">Sensacine</a>
            </div>
        </div>
    </div>
</template>


<style scoped>
.principal {
    @apply w-full mt-12 grid gap-y-10 lg:grid-cols-2 justify-center py-6 px-10 text-3xl bg-background rounded-t-xl font-title;
}

.principal div {
    @apply mx-auto;
}

.links {
    @apply text-xl font-sans gap-6 flex;
}

.links a {
    @apply relative;
}

.links a::before {
    @apply content-[''] absolute left-0 bottom-0 w-full h-[2px] bg-black rounded-[4px];
    scale: 0 1;
    transform-origin: left;
    transition: scale 0.25s;
}

.links a:hover::before {
    scale: 1;
}
</style>