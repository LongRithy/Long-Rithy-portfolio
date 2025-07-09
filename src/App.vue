<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <main class="flex-grow">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'


</script>
<style>
/* Optional: fallback base styles */
body {
  font-family: sans-serif;
  background: #f9fafb;
  color: #333;
}
</style>