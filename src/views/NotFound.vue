<!-- src/views/NotFound.vue -->
<template>
  <section class="min-h-screen flex items-center justify-center khmer">
    <div class="text-center">
      <h1 class="text-9xl font-bold gradient-text">404</h1>
      <p class="text-2xl mt-4">{{ $t('PageNotFound.message') }}</p>
      <router-link
        to="/"
        class="mt-8 inline-block px-6 py-3 gradient-bg text-white rounded-full hover:opacity-90 transition"
      >
        {{ $t('PageNotFound.gohome') }}
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "PageNotFound"
};
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #3a86ff, #8338ec);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.gradient-bg {
  background: linear-gradient(135deg, #3a86ff, #8338ec);
}

.khmer {
  font-family: "Noto Sans Khmer", "Khmer OS", "Battambang", sans-serif;
}
</style>
