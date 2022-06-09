<template>
  <AppContainer>
    <h1 class="text-4xl font-black">Article {{ route.params.id }}</h1>
  </AppContainer>
</template>

<script setup>
const route = useRoute();
</script>