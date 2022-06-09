<template>
  <AppContainer>
    <div>
      <FormKit type="form" v-model="form" @submit="handleSubmit">
        <FormKitSchema :schema="loginForm" :data="form" />
      </FormKit>
    </div>
    <pre>{{
      form
    }}</pre>
  </AppContainer>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
import { loginForm } from '~~/forms/login-form';

const form: Ref = ref({})

function handleSubmit() {
  alert('Good')
}
</script>