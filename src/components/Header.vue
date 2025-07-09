<template>
  <nav class="fixed w-full bg-gray-500 shadow-md z-50">
    <div class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <!-- Logo -->
        <router-link to="/" class="text-2xl font-bold gradient-text flex items-center">
          <i class="fas fa-user-circle mr-2"></i>
          {{ $t('nav.logo') }}
        </router-link>

        <!-- Desktop Links & Language Switcher -->
        <div class="flex items-center">
          <div class="hidden md:flex space-x-8">
            <router-link
              to="/"
              class="nav-link"
              active-class="active-link"
              exact
            >
              {{ $t('home') }}
            </router-link>
            <router-link
              to="/about"
              class="nav-link"
              active-class="active-link"
            >
              {{ $t('about') }}
            </router-link>
            <router-link
              to="/projects"
              class="nav-link"
              active-class="active-link"
            >
              {{ $t('projects') }}
            </router-link>
            <router-link
              to="/contact"
              class="nav-link"
              active-class="active-link"
            >
              {{ $t('contact') }}
            </router-link>
          </div>

          <!-- Language Switcher -->
          <div class="lang-switcher">
            <button
              @click="changeLanguage('en')"
              :class="{ active: $i18n.locale === 'en' }"
              class="lang-btn"
            >
              EN
            </button>
            <button
              @click="changeLanguage('km')"
              :class="{ active: $i18n.locale === 'km' }"
              class="lang-btn"
            >
              ខ្មែរ
            </button>
          </div>

          <!-- Mobile Toggle Button -->
          <div class="md:hidden ml-4">
            <button @click="toggleMenu" class="text-gray-800 focus:outline-none">
              <i class="fas" :class="{ 'fa-bars': !isMenuOpen, 'fa-times': isMenuOpen }"></i>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-4 space-y-3">
        <router-link
          to="/"
          @click="closeMenu"
          class="block nav-link"
          active-class="active-link"
          exact
        >
          {{ $t('nav.home') }}
        </router-link>
        <router-link
          to="/about"
          @click="closeMenu"
          class="block nav-link"
          active-class="active-link"
        >
          {{ $t('nav.about') }}
        </router-link>
        <router-link
          to="/projects"
          @click="closeMenu"
          class="block nav-link"
          active-class="active-link"
        >
          {{ $t('nav.projects') }}
        </router-link>
        <router-link
          to="/contact"
          @click="closeMenu"
          class="block nav-link"
          active-class="active-link"
        >
          {{ $t('nav.contact') }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem("portfolio-lang", lang);
    }
  }
};
</script>

<style scoped>
/* Gradient text */
.gradient-text {
  background: linear-gradient(135deg, #3a86ff, #8338ec);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* Navigation link styling */
.nav-link {
  text-decoration: none;
  color: #f5f5f5;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #3b82f6; /* Tailwind blue-500 */
  text-decoration: underline;
}

/* Active link styling */
.active-link {
  color: #3b82f6 !important;
  text-decoration: underline;
  font-weight: bold;
}

/* Language switcher styles */
.lang-switcher {
  display: flex;
  gap: 8px;
  margin-left: 20px;
}

.lang-btn {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  font-size: 0.8rem;
  border: 1px solid #d1d5db;
  cursor: pointer;
  transition: all 0.2s ease;
  font-weight: bold;
  background-color: #9cabc5; /* Tailwind gray-200 */
}

.lang-btn.active {
  background-color: #818ea0;
  border-color: #3b82f6;
  color: #3165b9;
}
.active-link {
  color: #3b82f6 !important;
  text-decoration: underline;
  font-weight: bold;

}
.nav-link:hover {
  color: #3b82f6; /* Tailwind blue-500 */
  text-decoration: underline;
}.nav-link {
  font-family: "Noto Sans Khmer", "Khmer OS", "Battambang", sans-serif;
}

</style>
