<template>
  <form action="#">

    <label for="nombre">Nombre</label>
    <input type="text" id="nombre" name="nombre">

    <label for="email">email</label>
    <input type="email" id="email" name="email">

    <label for="personaje">Personaje favorito</label>
    <input type="text" id="personaje" name="personaje">

    <label for="opinion">Opinion</label>
    <textarea name="opinion" id="opinion" cols="30" rows="10"/>

    <label for="puntuacion">Puntuacion</label>
    <input type="number" max="10" min="0" name="puntuacion" id="puntuacion">

    <label for="volverVer">Volverias a ver la película</label>
    <p>si</p>
    <input type="radio" name="si" value="si" id="volverVer">
    <p>no</p>
    <input type="radio" name="si" value="si" id="volverVer">

    <button>Enviar</button>
</form>
</template>

