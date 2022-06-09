<template>
  <li>
    <NuxtLink 
      class="flex items-center px-6 h-8 text-gray-100 hover:bg-primary whitespace-nowrap" 
      active-class="bg-primary"
      :to="to"
    >{{ title }}</NuxtLink>
  </li>
</template>

<script setup>
defineProps({
  to: { type: String, required: true },
  title: String
});
</script>