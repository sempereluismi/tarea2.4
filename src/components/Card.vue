<template>
  <div class="container">
    <a
      href="https://www.netflix.com/es/title/80093212?source=35"
      target="_blank"
    >
      <div class="logo">
        <img src="@/assets/netflix.png" alt="logo" />
        <h2>NETFLIX</h2>
      </div>

      <div class="body">
        <p>Precio: Subcripción</p>
      </div>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
  @apply w-[70px];
}

.container {
  @apply w-[500px] border-2 border-background rounded-xl;
}
.logo {
  @apply flex items-center justify-center gap-6 text-6xl tracking-[1rem] font-bold text-red-700 py-6 ;
}

.body {
  @apply text-4xl tracking-widest text-center py-10;
}
</style>