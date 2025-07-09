<template>
  <section class="pt-32 pb-20 px-6">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <!-- Left Text Block -->
      <div
        class="md:w-1/2 mb-10 md:mb-0"
        :class="{ khmer: $i18n.locale === 'km' }"
      >
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          {{ $t('homePage.title') }}
          <span class="gradient-text"></span>
        </h1>
        <h2 class="text-2xl md:text-3xl text-gray-600 mb-6">
          {{ $t('homePage.subtitle') }}
        </h2>
        <p class="text-gray-600 mb-8 max-w-md">
          {{ $t('homePage.description') }}
        </p>
        <div class="flex space-x-4">
          <router-link
            to="/contact"
            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition"
          >
            {{ $t('homePage.contactme') }}
          </router-link>
          <router-link
            to="/projects"
            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition"
          >
            {{ $t('homePage.readmore') }}
          </router-link>
        </div>
      </div>

      <!-- Right Image Block -->
      <div class="md:w-1/2 flex justify-center">
        <div class="relative">
          <div
            class="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-3xl blur-md opacity-75"
          ></div>
          <img
            :src="portraitImage"
            alt="Professional portrait"
            class="relative rounded-2xl w-full max-w-md border-4 border-white object-cover h-96"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import portraitImage from '@/assets/portrait.jpg';

export default {
  name: 'Home',
  data() {
    return {
      portraitImage
    };
  },
  mounted() {
    window.scrollTo(0, 0);
  }
};
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #3a86ff, #8338ec);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.khmer {
  font-family: 'Noto Sans Khmer', 'Khmer OS', 'Battambang', sans-serif;
}
</style>
