<template>
  <div class="hidden sm:flex gap-2 flex-row items-center h-14 w-full">
    <AppNav>
      <AppNavLink 
        v-for="item of navigation.baseItems" 
        :inverse="inverse" 
        :key="item.title"
        v-bind="item" 
      />

      <AppNavDropdown title="Ещё" :inverse="inverse">
        <AppNavDropdownLink 
          v-for="item of navigation.additionalItems" 
          v-bind="item"
          :key="item.title"
        />
      </AppNavDropdown>
    </AppNav>

    <AppNav class="ml-auto">
      <AppNavLink 
        :inverse="inverse" 
        v-for="item of navigation.authItems" 
        v-bind="item" 
        :key="item.title"
      ></AppNavLink>
    </AppNav>
  </div>
</template>

<script setup lang="ts">
import useNavigation, { INavigation } from "../composables/use-navigation";

defineProps<{
  inverse?: boolean
}>()

const navigation: INavigation = useNavigation()
</script>