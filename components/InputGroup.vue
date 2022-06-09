<template>
  <div class="flex" :class="$style.InputGroup">
    <slot />
  </div>
</template>

<style module>

.InputGroup > * {
  border-radius: 0;
}

.InputGroup > :first-child {
  @apply rounded-l;
}

.InputGroup > :last-child {
  @apply rounded-r
}
</style>