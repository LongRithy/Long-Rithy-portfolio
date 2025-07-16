<template>
  <!-- Contact Section -->
  <section id="Contact" class="py-20 px-6">
    <div class="container mx-auto max-w-4xl">
     <h2 class="text-3xl font-bold text-center text-gray-800 mb-12 fade-in">
  {{ $t('Contact.title') }}
  <span class="gradient-text">{{ $t('Contact.touch') }}</span>
  </h2>
      <div class="bg-white rounded-xl shadow-lg overflow-hidden">
  <div class="grid grid-cols-1 md:grid-cols-2">
    <!-- Left Side: Contact Info -->
    <div class="gradient-bg text-white p-12">
      <h3 class="text-2xl font-semibold mb-4">
        {{ $t('Contact.infoTitle') }}
      </h3>
      <p class="mb-8">
        {{ $t('Contact.infoText') }}
      </p>

      <div class="space-y-6">
        <div class="flex items-start">
          <div class="bg-white bg-opacity-20 p-3 rounded-full mr-4">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <div>
            <h5 class="font-medium">{{ $t('Contact.location') }}</h5>
            <p>{{ $t('Contact.locationValue') }}</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="bg-white bg-opacity-20 p-3 rounded-full mr-4">
            <i class="fas fa-envelope"></i>
          </div>
          <div>
            <h4 class="font-medium">{{ $t('Contact.email') }}</h4>
            <p>rithylong2013@email.com</p>
          </div>
        </div>
        <div class="flex items-start">
          <div class="bg-white bg-opacity-20 p-3 rounded-full mr-4">
            <i class="fas fa-phone"></i>
          </div>
          <div>
            <h4 class="font-medium">{{ $t('Contact.phone') }}</h4>
            <p>{{ $t('Contact.phoneValue') }}</p>
          </div>
        </div>
      </div>
   
          
            <!-- Social Media Buttons -->
            <div class="flex flex-wrap gap-3 mt-8">
              <a
                href="https://github.com/LongRithy"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-full bg-gray-900 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/long-rithy-b0111b358/"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-full bg-gray-900 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://facebook.com/yourprofile"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-full bg-gray-900 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/yourprofile"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-full bg-gray-900 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition"
              >
                <i class="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/speedy_crochet/"
                target="_blank"
                rel="noopener"
                class="w-10 h-10 rounded-full bg-gray-900 bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <!-- Right Side: Contact Form -->
          <div class="p-12">
            <form @submit.prevent="submitForm" class="space-y-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('Contact.name') }}
                </label>
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  class="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  :placeholder="$t('Contact.namePlaceholder')"
                  required
                />
                <p v-if="errors.name" class="text-red-500 text-sm mt-1">
                  {{ errors.name }}
                </p>
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                {{ $t('Contact.email') }}
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  class="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  :placeholder="$t('Contact.emailPlaceholder')"
                  :aria-required="true"
                  required
                />
                <p v-if="errors.email" class="text-red-500 text-sm mt-1">
                  {{ errors.email }}
                </p>
              </div>
              <div>
                <label for="subject" class="block text-sm font-medium text-gray-700 mb-1">
                 {{ $t('Contact.subject') }}
                </label>
                <input
                  v-model="form.subject"
                  type="text"
                  id="subject"
                  class="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  :placeholder="$t('Contact.subjectPlaceholder')"
                  required                                
                />
              </div>
              <div>
                <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                  {{ $t('Contact.message') }}
                </label>
                <textarea
                  v-model="form.message"
                  id="message"
                  rows="5"
                  class="input-field w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  :placeholder="$t('Contact.messagePlaceholder')"
                  :aria-required="true" 
                  required
                ></textarea>
                <p v-if="errors.message" class="text-red-500 text-sm mt-1">
                  {{ errors.message }}
                </p>
              </div>

              <button
                type="submit"
                class="w-full gradient-bg text-white py-3 rounded-lg font-medium hover:opacity-90 transition"
              >
                {{ $t('Contact.send') }}
              </button>

              <!-- Success Message -->
              <div
                v-if="submissionStatus === 'success'"
                class="bg-green-100 text-green-700 p-4 rounded-lg mt-4"
              >
                {{ $t('Contact.thankYou') }}, {{ submittedName }}! {{ $t('Contact.responseMessage') }}
              </div>

              <!-- Error Message -->
              <div
                v-if="submissionStatus === 'error'"
                class="bg-red-100 text-red-700 p-4 rounded-lg mt-4"
              >
                Please fix the errors in the form and try again.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Contact",
  mounted() {
    // Scroll to top when the component is mounted
    window.scrollTo(0, 0);
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      },
      errors: {},
      submissionStatus: null,
      submittedName: ""
    };
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      this.resetForm();
      localStorage.setItem('portfolio-lang', lang);
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    validateForm() {
      this.errors = {};

      if (!this.form.name) {
        this.errors.name = "Name is required.";
      }

      if (!this.form.email) {
        this.errors.email = "Email is required.";
      } else if (!this.validEmail(this.form.email)) {
        this.errors.email = "Please enter a valid email address.";
      }

      if (!this.form.message) {
        this.errors.message = "Message is required.";
      }

      return Object.keys(this.errors).length === 0;
    },
    validEmail(email) {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email);
    },
    submitForm() {
      if (this.validateForm()) {
        this.submissionStatus = "success";
        this.submittedName = this.form.name;
        this.resetForm();
      } else {
        this.submissionStatus = "error";
      }
    },
    resetForm() {
      this.form = {
        name: "",
        email: "",
        subject: "",
        message: ""
      };
    }
  }
};

</script>

<style scoped>
.gradient-text {
  background: linear-gradient(135deg, #0a61da, #8338ec);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  
}

.gradient-bg {
  background: linear-gradient(135deg, #9ea8b9, #8338ec);
}
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.container {
  font-family: "Noto Sans Khmer", "Khmer OS", "Battambang", sans-serif;
}
</style>
