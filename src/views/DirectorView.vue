<template>
  <div class="bg"></div>

  <section>
    <h1>Director</h1>

    <div class="img">
      <img src="@/assets/director.jpeg" alt="director">
    </div>
    <div>
      <h2>Emilio Martínez-Lázaro</h2>
      <p>
        Emilio Martínez-Lázaro Torre (Madrid, 1945) es un director de cine,
        productor y guionista español ganador del Oso de Oro del Festival de
        Berlín y de la Biznaga de Oro del Festival de Málaga.
      </p>
      <h2>Biografía</h2>
      <p>
        Nació en Madrid en 1945. Estudió en un colegio de jesuitas y más tarde
        empezó los estudios de ingeniería industrial, que abandonaría para
        dedicarse al cine. Ejerció como crítico cinematográfico en revistas como
        Griffith y Nuestro cine hasta que decidió dirigir su primer trabajo, un
        cortometraje titulado Aspavientos (1969). Le siguieron otros cortos como
        Camino al cielo (1970) y Amo mi cama rica (1970) no debe confundirse con
        Amo tu cama rica de 1991. Tras codirigir junto a Francesc Bellmunt,
        Jaime Chávarri y José María Vallés su primer largometraje, Pasteles de
        sangre (1971), se estrenó en solitario con Las palabras de Max (1978)
        con la que obtuvo el Oso de Oro del Festival de Berlín.
      </p>
    </div>
  </section>
</template>


<style scoped>
.bg {
  @apply bg-[url('@/assets/director.jpg')] bg-no-repeat bg-cover bg-fixed w-full h-[90vh];
  @apply text-white;
}

h1 {
  @apply text-6xl text-center font-title py-4 uppercase xl:col-span-2;
}

h2 {
  @apply font-title text-4xl;
}

section {
  @apply grid grid-cols-1 xl:grid-cols-2 px-6 py-6 gap-6 items-center;
  @apply -mt-32 z-50 bg-white rounded-t-[4rem];
}

.img {
  @apply w-[600px] justify-self-center;
}

img {
   @apply w-full;
}
</style>