<template>
  <Transition leave-to-class="opacity-0" enter-from-class="opacity-0">
    <div v-if="active" class="fixed top-0 left-0 w-screen h-screen z-50 bg-gray-500 transition md:hidden">
      <AppContainer>
        <div class="flex items-center justify-between h-14">
          <AppLogo class="my-2" />

          <TheHeaderToggleButton
            active
            icon="xmark"
            @toggle="$emit('close')"
          />
        </div>

        <AppSeparator />

        <div>
          <TheMobileMenuNavItem v-for="item of navigation.baseItems" :key="item.title" v-bind="item" />
          <AppSeparator />
          <TheMobileMenuNavItem v-for="item of navigation.additionalItems" :key="item.title" v-bind="item" />
          <AppSeparator />
          <TheMobileMenuNavItem v-for="item of navigation.authItems" :key="item.title" v-bind="item" />
        </div>
      </AppContainer>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import useNavigation from "../composables/use-navigation";

defineProps<{
  active: boolean
}>()

const navigation = useNavigation()
</script>