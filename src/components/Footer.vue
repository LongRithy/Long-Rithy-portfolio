<template>
  <footer class="bg-gray-900 text-white py-4 px-1 footer-border">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <div class="mb-6 md:mb-0 text-center md:text-left">
          <div class="text-2xl font-bold mb-2 footer-logo"></div>
          <p class="text-gray-400">
            {{ $t('footer.tagline') }}
          </p>
        </div>
        <div class="flex space-x-6 mb-6 md:mb-0">
          <a href="https://github.com/LongRithy" class="text-gray-400 footer-icon">
            <i class="fab fa-github text-xl"></i>
          </a>
          <a href="https://www.linkedin.com/in/long-rithy-b0111b358/" class="text-gray-400 footer-icon">
            <i class="fab fa-linkedin-in text-xl"></i>
          </a>
          <a href="#" class="text-gray-400 footer-icon">
            <i class="fab fa-twitter text-xl"></i>
          </a>
          <a href="#" class="text-gray-400 footer-icon">
            <i class="fab fa-instagram text-xl"></i>
          </a>
        </div>
        <div class="text-gray-400 text-sm text-center md:text-right">
          "© {{ new Date().getFullYear() }} Portfolio. {{ $t('footer.rights') }}"
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer-logo {
  background: linear-gradient(135deg, #3a86ff, #8338ec);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.footer-icon {
  transition: color 0.3s ease;
}

.footer-icon:hover {
  color: #ffffff;
}

.footer-border {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
</style>
