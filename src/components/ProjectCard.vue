<template>
  <div
    class="project-card bg-white rounded-xl overflow-hidden shadow-md fade-in"
    :class="'delay-' + delay"
  >
    <div class="relative overflow-hidden">
      <img
        :src="project.image"
        :alt="project.title"
        class="w-full h-48 object-cover transition duration-500 hover:scale-105"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition"
      >
        <a
          href="#"
          class="px-4 py-2 bg-white text-gray-800 rounded-full font-medium"
        >
          {{ $t('viewDetails') }}
        </a>
      </div>
    </div>
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">
        {{ project.title }}
      </h3>
      <p class="text-gray-600 mb-4">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2">
        <span
          v-for="(tag, index) in project.tags"
          :key="index"
          class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
        >
          {{ tag }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: Object,
    delay: Number
  }
}
</script>
