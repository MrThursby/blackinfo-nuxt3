<template>
  <li>
    <RouterLink 
      :to="to" 
      custom
      v-slot="{ isActive, href, navigate }"
    >
      <a 
        class="cursor-pointer text-base transition"
        :class="isActive ? 'text-gray-100' : inverse ? 'text-gray-600 hover:text-gray-100' : 'text-gray-200 hover:text-gray-100'"
        :href="href" 
        v-bind="$attrs" 
        @click="navigate"
      >{{ title }}</a>
    </RouterLink>
  </li>
</template>

<script setup>
defineProps({
  title: { type: String, required: true},
  to: { type: String, required: true },
  inverse: Boolean,
});
</script>