<template>
  <section id="about" class="py-20 bg-gray-100 px-6">
    <div class="container mx-auto">
      <!-- About Heading -->
      <h1 class="text-4xl font-bold text-center text-gray-800 mb-8">
        {{ $t('About.title') }}
        <span class="gradient-text">{{ $t('') }}</span>
      </h1>
      

      <!-- About Content -->
      <div class="max-w-8xl mx-auto text-center text-gray-800 text-lg mb-12">
        <p class="mb-3">
          {{ $t('About.content1') }}
        </p>
        <p>
          {{ $t('About.content2') }}
        </p>
      </div>

      <!-- Quick Facts -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-12">
        <div>
          <h3 class="text-2xl font-bold text-gray-800">
            {{ $t('About.education') }}
          </h3>
          <p class="text-gray-600">{{ $t('About.degree') }}</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-gray-800">
            {{ $t('About.years') }}
          </h3>
          <p class="text-gray-600">{{ $t('About.experience') }}</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-gray-800">
            {{ $t('About.completed') }}
          </h3>
          <p class="text-gray-600">{{ $t('About.projects') }}</p>
        </div>
        <div>
          <h3 class="text-2xl font-bold text-gray-800">
            {{ $t('About.happy') }}
          </h3>
          <p class="text-gray-600">{{ $t('About.clients') }}</p>
        </div>
      </div>

      <!-- Skills Section -->
      <div class="mt-14">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-12">
          {{ $t('About.heading') }}
        </h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <SkillItem
            v-for="(skill, index) in skills"
            :key="index"
            :skill="skill"
            :index="index"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SkillItem from '@/components/SkillItem.vue'

import { data } from 'autoprefixer';    

export default {
  name: 'aboutView',
  
  components: {
    SkillItem
  },
  data() {
    return {
      skills: [
        { name: 'Vue.js', icon: 'fab fa-vuejs', level: 95},
        { name: 'JavaScript', icon: 'fab fa-js', level: 90 },
        { name: 'HTML5', icon: 'fab fa-html5', level: 90 },
        { name: 'CSS3', icon: 'fab fa-css3-alt', level: 85 },
        { name: 'Git', icon: 'fab fa-git-alt', level: 80 },
        { name: 'TailwindCSS', icon: 'fas fa-paint-brush', level: 85 },
        { name: 'Figma', icon: 'fab fa-figma', level: 75 },
        { name: 'Node.js', icon: 'fab fa-node-js', level: 70 }
      ]
    }
  }
}
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #225eac, #864dc7);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: bold;
  
}
.container {
  font-family: "Noto Sans Khmer", "Khmer OS", "Battambang", sans-serif;
}
</style>
