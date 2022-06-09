<template>
  <div class="bg-gray-500 text-gray-100 min-h-screen flex flex-col">
    <TheHeader>
      <div class="flex flex-shrink-0 items-center w-full sm:mr-6 sm:w-auto h-14">
        <AppLogo :inverse="inverse" />

        <TheHeaderToggleButton :inverse="inverse" :active="isShowOnMobile" @toggle="toggleShowOnMobile" />
      </div>

      <TheDesktopMenu :inverse="inverse" />
      <TheMobileMenu :active="isShowOnMobile" @close="toggleShowOnMobile" />
    </TheHeader>

    <main class="py-16 flex-1">
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { Router } from 'vue-router';

const inverse = false

const isShowOnMobile: Ref<boolean> = ref(false)

const router: Router = useRouter();
router.beforeEach(() => {
  isShowOnMobile.value = false
})

function toggleShowOnMobile() {
  isShowOnMobile.value = !isShowOnMobile.value
}

definePageMeta({
  pageTransition: {
    name: 'page',
    mode: 'in-out',
    duration: 1000,
  }
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  @apply transition duration-500;
}

.page-enter,
.page-leave-to {
  @apply opacity-0;
}
</style>