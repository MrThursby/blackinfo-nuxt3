<template>
  <button
    class="bg-primary px-4 py-2 rounded hover:bg-primary-dark transition focus:ring-4 focus:bg-primary-dark ring-primary ring-opacity-30"
    @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup lang="ts">
defineEmits<{
  (e: 'click'): void
}>()
</script>