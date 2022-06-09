<template>
  <div class="divide-y divide-gray-600">
    <div class="h-12 px-4 flex items-center cursor-pointer transition select-none"
      :class="active ? 'text-gray-100' : 'text-gray-200'" @click="$emit('toggle')">
      <Fa icon="caret-down" size="xs" class="transition" :class="{ 'transform -rotate-90': !active }" />
      <span class="ml-3 truncate">{{ title }}</span>
      <span v-if="created_at" class="ml-auto whitespace-nowrap">{{ created_at }}</span>
    </div>
    <Transition 
      @before-enter="setHeight($event, 0)"
      @enter="setHeight($event, getHeightFromElChild($event))"
      @after-enter="setHeight($event, null)" 

      @before-leave="setHeight($event, getHeightFromElChild($event))"
      @leave="setHeight($event, 0)" 
      @after-leave="setHeight($event, null)"
    >
      <div v-show="active" class="overflow-hidden transition-all">
        <div class="p-4 bg-gray-500">
          <slot />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  created_at?: string,
  active?: boolean,
  title: string,
}>()

defineEmits<{
  (e: 'toggle'): void
}>()

function setHeight(el: HTMLElement, px?: Number) {
  el.style.height = px !== null ? `${px}px` : null
}

function getHeightFromElChild(el: HTMLElement) {
  return el.children[0].getBoundingClientRect().height
}
</script>