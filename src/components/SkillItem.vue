<template>
  <div class="skill-item bg-white p-6 rounded-lg shadow-md text-center fade-in" :class="'delay-' + index">
    <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-300 flex items-center justify-center transition duration-300 hover:bg-purple-100">
      <i :class="[skill.icon, 'text-4xl text-blue-900 hover:text-purple-900']"></i>
    </div>

    <h4 class="text-lg font-semibold text-gray-800 mb-2">
      {{ skill.name }}
    </h4>

    <div class="w-full bg-gray-300 rounded-full h-2.5 relative">
      <div
        class="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full"
        :style="{ width: skill.level + '%' }"
      ></div>
      <span
        class="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs font-medium text-gray-700"
      >
        {{ skill.level }}%
      </span>
    </div>
  </div>
</template>


<script>
export default {
  name: 'SkillItem',
  props: {
    skill: Object,
    index: Number
  }
}
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease forwards;
}

.delay-0 { animation-delay: 0s; }
.delay-1 { animation-delay: 0.1s; }
.delay-2 { animation-delay: 0.2s; }
.delay-3 { animation-delay: 0.3s; }
.delay-4 { animation-delay: 0.4s; }

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Progress bar fill gradient */
.progress-fill {
  background: linear-gradient(to right, #155c9e, #8338ec);
  transition: width 0.5s ease;
}

/* Wrapper glow on hover */
.progress-bar-wrapper {
  box-shadow: inset 0 0 5px rgba(131, 56, 236, 0.3);
}

.skill-item:hover .progress-bar-wrapper {
  box-shadow: inset 0 0 10px rgba(131, 56, 236, 0.5);
}


/* Additional subtle scaling on hover */
.skill-item:hover {
  cursor: pointer;
  transform: scale(1.05);
}
.skill-item:hover .icon {
  color: #8338ec;
}
  
</style>
