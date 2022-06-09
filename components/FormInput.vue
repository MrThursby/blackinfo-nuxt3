<template>
  <input :class="[
    'max-w-lg w-full py-2 px-4',
    'bg-gray-400 border-gray-600 transition',
    'focus:border-primary focus:ring-4 focus:outline-none',
    'ring-primary ring-opacity-40 border rounded',
    'placeholder:text-gray-100'
  ]" type="text" :placeholder="placeholder" @input="handleInput">
</template>

<script setup lang="ts">
import { EmitsOptions } from 'vue';

defineProps<{
  placeholder?: string,
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'input', value: string): void
}>()

function handleInput(event: InputEvent) {
  const target = <HTMLInputElement>event.target

  emit('input', target.value)
}
</script>