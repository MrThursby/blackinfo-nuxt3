<template>
  <li class="relative">
    <div class="cursor-pointer text-base inline-block"
      :class="isActive ? 'text-gray-100' : inverse ? 'text-gray-600 hover:text-gray-100' : 'text-gray-200 hover:text-gray-100'"
      @click="toggleIsActive">
      <span class="mr-2">{{ title }}</span>
      <Fa :icon="['fas', 'caret-down']" size="xs" />
    </div>

    <div 
      class="fixed z-10 left-0 top-0 w-screen h-screen hidden" 
      :class="{ 'block': isActive }"
      @click="toggleIsActive" 
    />

    <ul 
      class="absolute z-20 mt-2 bg-gray-500 rounded border border-gray-300 py-2 flex-col" 
      :class="[
        isActive ? 'flex' : 'hidden',
        { 'right-0': right }
      ]"
    ><slot /></ul>
  </li>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { Router } from 'vue-router';

defineProps<{
  title: String,
  inverse?: boolean,
  right?: boolean,
}>()

const isActive: Ref = ref(false)

const router: Router = useRouter();
router.beforeEach((): void => {
  isActive.value = false
})

function toggleIsActive(): void {
  isActive.value = !isActive.value
}
</script>