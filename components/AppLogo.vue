<template>
  <NuxtLink to="/" class="block flex-shrink-0">
    <img v-if="!inverse" class="mt-1 w-[105px]" src="/logotype.svg" alt="" />
    <img v-else class="mt-1 w-[105px]" src="/logotype-secondary.svg" alt="" />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  inverse?: boolean
}>()
</script>