<template>
  <form action="#">

    <div>
      <label for="nombre">Nombre</label>
      <input type="text" id="nombre" name="nombre">
    </div>

    <div>
      <label for="email">email</label>
      <input type="email" id="email" name="email">
    </div>
    <label for="personaje">Personaje favorito</label>
    <input type="text" id="personaje" name="personaje">
    <div>
      <label for="opinion">Opinion</label>
      <textarea name="opinion" id="opinion" cols="30" rows="10" />
    </div>
    <label for="puntuacion">Puntuacion</label>
    <input type="number" max="10" min="0" name="puntuacion" id="puntuacion">
    <div>

      <label for="volverVer">Volverias a ver la película</label>
      <div>
        <p>si</p>
        <input type="radio" name="si" value="si" id="volverVer">
      </div>

      <div>
        <p>no</p>
        <input type="radio" name="si" value="si" id="volverVer">
      </div>
    </div>
    <button>Enviar</button>
  </form>
</template>

