<template>
  <section id="projects" class="py-20 bg-gray-100 px-6">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 fade-in">
      {{ $t('') }}
    <span class="gradient-text">{{ $t('projectsPage.title') }}</span>

      </h2>

      <!-- Project Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProjectCard
          v-for="(project, index) in visibleProjects"
          :key="index"
          :project="project"
          :delay="index % 3"
        />
      </div>

      <!-- Show More Button -->
      <div class="text-center mt-12 fade-in delay-3">
        <button
          @click="showAll = !showAll"
          class="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition"
        >
          {{ showAll ? $t('projectsPage.showLess') : $t('projectsPage.showMore') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ProjectCard.vue'

export default {
  name: 'Projects',
  components: {
    ProjectCard
  },
  data() {
    return {
      showAll: false,
      projects: [
        {
          title: 'E-commerce Platform',
          description: 'A full-featured online store with payment integration.',
          tags: ['Vue.js', 'Node.js', 'MongoDB'],
          image:
            'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
        },
        {
          title: 'Task Management App',
          description:
            'Productivity application for personal and team tasks.',
          tags: ['React', 'Firebase', 'Tailwind'],
          image:
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1715&q=80'
        },
        {
          title: 'Weather Dashboard',
          description:
            'Real-time weather information with forecasts.',
          tags: ['JavaScript', 'API', 'CSS3'],
          image:
            'https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1774&q=80'
        }
      ],
      moreProjects: [
        {
          title: 'Portfolio Website',
          description:
            'Personal portfolio showcasing projects and skills.',
          tags: ['HTML5', 'CSS3', 'JavaScript'],
          image:
            'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1791&q=80'
        },
        {
          title: 'Recipe Finder',
          description:
            'Search engine for finding recipes by ingredients.',
          tags: ['Vue.js', 'API', 'SCSS'],
          image:
            'https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=1772&q=80'
        },
        {
          title: 'Fitness Tracker',
          description:
            'Application for tracking workouts and progress.',
          tags: ['React', 'Chart.js', 'Firebase'],
          image:
            'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80'
        }
      ]
    }
  },
  computed: {
    visibleProjects() {
      return this.showAll
        ? [...this.projects, ...this.moreProjects]
        : this.projects
    }
  }
}
</script>

<style scoped>
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease forwards;
}

.delay-0 {
  animation-delay: 0s;
}
.delay-1 {
  animation-delay: 0.1s;
}
.delay-2 {
  animation-delay: 0.2s;
}
.delay-3 {
  animation-delay: 0.3s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.gradient-text {
  background: linear-gradient(135deg, #3a86ff, #8338ec);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.container {
  font-family: "Noto Sans Khmer", "Khmer OS", "Battambang", sans-serif;
}
.khmer {
  font-family: "Noto Sans Khmer", "Khmer OS", "Battambang", sans-serif;
}
</style>
