<template>
  <NuxtLink 
    class="block -mx-4 px-4 hover:bg-primary leading-10 sm:rounded transition mb-1" 
    active-class="bg-primary"
    :to="to"
  >{{ title }}</NuxtLink>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  title: String
});
</script>