<template>
  <section class="min-h-screen flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-9xl font-bold gradient-text">404</h1>
      <p class="text-2xl mt-4">{{ $t('PageNotFound.message') }}</p>
      <router-link
        to="/"
        class="mt-8 inline-block px-6 py-3 gradient-bg text-white rounded-full hover:opacity-90 transition"
      >
        {{ $t('PageNotFound.home') }}
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "NotFound",
  i18n: {
    messages: {
      en: {
        PageNotFound: {
          message: "Sorry, the page you are looking for does not exist.",
          home: "Back to Home"
        }
      },
      km: {
        PageNotFound: {
          message: "សូមអភ័យទោស ទំព័រដែលអ្នកកំពុងស្វែងរក មិនមានទេ។",
          home: "ត្រលប់ទៅទំព័រដើម"
        }
      }
    }
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

.gradient-bg {
  background: linear-gradient(135deg, #3a86ff, #8338ec);
}
</style>
