<template>
  <section class="pt-32 pb-20 px-6">
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <div class="md:w-1/2 mb-10 md:mb-0" :class="{ 'khmer': $i18n.locale === 'km' }">
        <h1 class="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          {{ $t('Home.title') }}
          <span class="gradient-text"></span>
        </h1>
        <h2 class="text-2xl md:text-3xl text-gray-600 mb-6">
          {{ $t('Home.subtitle') }}
        </h2>
        <p class="text-gray-600 mb-8 max-w-md">
          {{ $t('Home.description') }}
        </p>
        <div class="flex space-x-4">
          <router-link
            to="/contact"
            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition"
          >
            {{ $t('Home.contactme') }}
          </router-link>
          <router-link
            to="/projects"
            class="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition"
          >
            {{ $t('Home.readmore') }}
          </router-link>
        </div>
      </div>
      <div class="md:w-1/2 flex justify-center">
        <div class="relative">
          <div class="absolute -inset-4 bg-gradient-to-r from-blue-900 to-purple-500 rounded-3xl blur-md opacity-75"></div>
          <img
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Professional portrait"
            class="relative rounded-2xl w-full max-w-md border-4 border-white object-cover h-96"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Homeview',
  // mounted() {
  //   this.$i18n('en', {
  //       home: {
  //         title: "Hi, my name is Long Rithy",
  //         subtitle: "A passionate web developer",
  //         description: "I create beautiful and functional websites that provide great user experiences.",
  //         contactme: "Contact Me",
  //         readmore: "Read More"
  //       }
  //     },
  //   )
  // }
}
</script>
<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #3a86ff, #8338ec);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.khmer {
  font-family: "Noto Sans Khmer", "Khmer OS", "Battambang", sans-serif;
}
</style>


