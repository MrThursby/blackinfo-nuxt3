<template>
  <button 
    class="block sm:hidden ml-auto w-6"
    :class="active ? 'text-gray-100' : inverse ? 'text-gray-600' : 'text-gray-200'" 
    @click="toggle"
  >
    <span class="block -m-4 p-4">
      <Fa :icon="icon" size="lg" />
    </span>
  </button>
</template>

<script setup lang="ts">
interface Props {
  active?: boolean,
  inverse?: boolean,
  icon?: string
}

withDefaults(defineProps<Props>(), {
  active: false,
  inverse: false,
  icon: "bars"
})

const emit = defineEmits<{
  (e: 'toggle'): void
}>()

function toggle() {
  emit('toggle');
}
</script>