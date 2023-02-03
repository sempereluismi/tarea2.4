<template>
  <h1>Dejanos tu opinión sobre la película</h1>

  <form action="#">
    <div class="input-group">
      <input
        required
        type="text"
        name="text"
        autocomplete="off"
        class="input"
      />
      <label class="user-label">Nombre</label>
    </div>

    <div class="input-group">
      <input
        required
        type="email"
        name="email"
        autocomplete="off"
        class="input"
      />
      <label class="user-label">Email</label>
    </div>

    <div class="input-group">
      <input
        required
        type="email"
        name="email"
        autocomplete="off"
        class="input"
      />
      <label class="user-label">Personaje favorito</label>
    </div>

    <div class="input-group">
      <textarea
        required
        autocomplete="off"
        class="input"
      />
      <label class="user-label">Opinión</label>
    </div>

    <div class="input-group">
      <input
        required
        type="number"
        name="email"
        autocomplete="off"
        class="input"
      />
      <label class="user-label">Puntuación</label>
    </div>

    

    <div>
      <label for="volverVer">Volverias a ver la película</label>
      <div>
        <p>si</p>
        <input type="radio" name="si" value="si" id="volverVer" />
      </div>

      <div>
        <p>no</p>
        <input type="radio" name="si" value="si" id="volverVer" />
      </div>
    </div>
    <button>enviar</button>
  </form>
</template>

<style scoped>

.input-group {
 @apply relative;
}

.input {
    @apply border-[1.5px] border-background rounded-xl p-2 text-black duration-150 ease-[cubic-bezier(0.4,0,0.2,1)];
}

.user-label {
 @apply absolute left-4 text-black translate-y-4 transition-all ease-[cubic-bezier(0.4,0,0.2,1)] duration-150;
}

.input:focus, input:valid {
 @apply outline-none border-[1.5px] border-amber-400;
}

.input:focus ~ label, input:valid ~ label {
 transform: translateY(-50%) scale(0.8);
 background-color: #212121;
 padding: 0 .2em;
 color: #2196f3;

 @apply -translate-y-1/2;
}



</style>