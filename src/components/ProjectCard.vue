<template>
  <div
    class="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
    :style="{ animationDelay: `${delay * 0.1}s` }"
  >
    <img
      :src="project.image"
      class="mb-4 rounded w-full h-48 object-cover"
      alt="Project image"
    />

    <h3 class="text-xl font-bold mb-2">
      {{ $t(project.titleKey) }}
    </h3>

    <p class="text-gray-600 mb-3">
      {{ $t(project.descriptionKey) }}
    </p>

    <div class="flex flex-wrap gap-2">
      <span
        v-for="(tag, i) in project.tags"
        :key="i"
        class="text-xs inline-block px-2 py-1 rounded-full bg-blue-100 text-blue-700"
      >
        {{ tag }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true,
    },
    delay: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style scoped>
/* Optional: fade-in animation for cards */
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.bg-white {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease forwards;
}
</style>
