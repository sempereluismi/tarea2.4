<template>
  <div class="container"></div>

  <section>

    <h1>OCHO APELLIDOS CATALANES</h1>
    <div class="layout">
      <div class="img">
        <img src="@/assets/info.webp" alt="portada pelicula">
      </div>
      <div>
        <h2>Argumento</h2>
        <p>Después de que Rafa (Dani Rovira) rompiera su relación con Amaia (Clara Lago), el padre de ella, Koldo (Karra
          Elejalde), se presenta en Sevilla para anunciarle los nuevos planes de boda de su hija con un catalán.
          Arrepentido
          por provocar la ruptura, Rafa acompaña a Koldo al ficticio pueblo de Soronelles, en la masía gerundense del
          pretendiente, Pau (Berto Romero), que ha movilizado al pueblo para hacer creer a su abuela, Roser (Rosa María
          Sardá), que Cataluña consiguió la independencia y que su boda será la primera que albergue el nuevo país.</p>
        <p>Invitada por Amaia, Merche (Carmen Machi), que se presenta esta vez con el nombre de Carme, reprocha a Koldo no
          haber sabido hacer frente al compromiso, aunque él realmente sigue enamorado de ella. Merche, por otra parte,
          anima a Rafa a recuperar el amor de Amaia. Cuando el sevillano se entera de que Judit (Belén Cuesta), la mujer
          que
          organiza la boda, está perdidamente enamorada de Pau, ambos se unirán a Koldo y Merche para intentar frenar el
          enlace y conseguir que Amaia y Rafa acaben juntos para siempre.</p>
      </div>
      <div class="pie">
        <p >Es una película española dirigida por Emilio Martínez-Lázaro que se estrenó el 18 de noviembre de 2015 en
          España.
          Siendo la secuela de ocho apellidos vascos.</p>
      </div>
 
    </div>
  </section>
</template>

<style scoped>
h1 {
  @apply text-6xl text-center font-title py-4;
}

h2 {
  @apply text-4xl font-title;
}

.pie {
  @apply xl:col-span-2;
}

.img {
  @apply justify-self-center;
}

section img {
  @apply w-[800px] rounded;
}
.container {
  @apply w-full h-[90vh] flex -z-50 bg-[url('@/assets/portada.jpg')] bg-fixed bg-cover items-end;
}

section {
  @apply -mt-32 z-50 bg-white rounded-t-[4rem];
}

section p {
  @apply text-xl;
}

.layout {
  @apply mx-10 grid grid-cols-1 xl:grid-cols-2 gap-4 items-center;
}
</style>
