<template>
  <header :class="inverse ? 'bg-primary' : 'bg-gray-400'">
    <AppContainer class="flex flex-col sm:flex-row items-center">
      <slot />
    </AppContainer>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  inverse?: boolean
}>()
</script>