<template>
  <component :is="tag" class="container mx-auto px-4" :class="{'max-w-prose': !selfMaxWidth}">
    <slot />
  </component>
</template>

<script setup lang="ts">
interface Props {
  tag?: string,
  selfMaxWidth?: boolean
}

withDefaults(defineProps<Props>(), {
  tag: "div",
  selfMaxWidth: false
})
</script>