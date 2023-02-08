<template>
  <div class="background"></div>
  <section>
    <h1>Dejanos tu opinión sobre la película</h1>

    <form action="#" class="container">
      <div class="group">
        <input
          required
          type="text"
          name="text"
          autocomplete="off"
          class="input"
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Nombre</label>
      </div>

      <div class="group">
        <input
          required
          type="email"
          name="email"
          autocomplete="off"
          class="input"
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Email</label>
      </div>

      <div class="group">
        <input
          required
          type="text"
          name="email"
          autocomplete="off"
          class="input"
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Personaje Favorito</label>
      </div>

      <div class="group">
        <textarea required autocomplete="off" class="input" />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Opinión</label>
      </div>

      <div class="group">
        <input
          required
          type="number"
          name="puntuation"
          class="input"
          max="10"
          min="0"
        />
        <span class="highlight"></span>
        <span class="bar"></span>
        <label>Puntuación</label>
      </div>

      <div class="group">
        <p for="volverVer">Volverias a ver la película</p>
        <div class="radio-container">
          <div class="radio-option">
            <p>si</p>
            <input type="radio" name="si" value="si" id="volverVer" />
          </div>

          <div class="radio-option">
            <p>no</p>
            <input type="radio" name="si" value="si" id="volverVer" />
          </div>
        </div>
      </div>
      <div class="button-wrapper">
        <button>
          <div class="svg-wrapper-1">
            <div class="svg-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
              </svg>
            </div>
          </div>
          <span>Send</span>
        </button>
      </div>
    </form>
  </section>
</template>

<style scoped>
h1 {
  @apply text-6xl text-center font-title py-4;
}
.background {
  @apply w-full h-[90vh] flex -z-50 bg-[url('@/assets/fondoOpinion.jpg')] bg-fixed bg-cover items-end;
}

section {
  @apply -mt-32 z-50 bg-white rounded-t-[4rem] px-10 py-8;
}

.container {
  @apply shadow-2xl rounded-xl col-start-2;
}

.radio-container {
  @apply flex gap-10 m-10;
}

.radio-option {
  @apply flex gap-2 uppercase;
}

.group {
  @apply relative self-center mx-3;
}

.input {
  @apply bg-transparent my-10 block text-lg py-3 pl-2 pr-3 border-b border-b-slate-700 w-full;
}

.input:focus {
  @apply outline-none;
}

label {
  @apply text-slate-500 text-lg absolute pointer-events-none left-1 top-3 transition-all duration-200 ease-in;
}

.input:focus ~ label,
.input:valid ~ label {
  @apply -top-5 text-sm text-black;
}

.bar {
  @apply relative block;
}

.bar:before,
.bar:after {
  content: "";
  @apply h-[2px] w-0 bottom-10 absolute bg-background transition-all duration-200 ease-in;
}

.bar:before {
  @apply left-1/2;
}

.bar:after {
  @apply right-1/2;
}

.input:focus ~ .bar:before,
.input:focus ~ .bar:after {
  @apply w-1/2;
}

.highlight {
  @apply absolute h-3/5 w-28 top-1/4 left-0 pointer-events-none opacity-50;
}

.input:focus ~ .highlight {
  animation: inputHighlighter 0.7s ease;
}

button {
  @apply mb-4 text-xl bg-background text-white py-3 px-5 pl-4 flex items-center border-none rounded-2xl overflow-hidden transition-all duration-200;
}

button span {
  @apply block ml-1 transition-all ease-in-out duration-300;
}

button svg {
  @apply block origin-center transition-transform ease-in-out duration-300;
}

button:hover .svg-wrapper {
  animation: fly-1 0.6s ease-in-out infinite alternate;
}

button:hover svg {
  @apply translate-x-5 rotate-45 scale-110;
}

button:hover span {
  @apply translate-x-20;
}

button:active {
  @apply scale-95;
}

.button-wrapper {
  @apply flex justify-end mx-10 my-3;
}

@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}



@keyframes inputHighlighter {
  from {
    @apply bg-background;
  }

  to {
    @apply w-0 bg-transparent;
  }
}
</style>