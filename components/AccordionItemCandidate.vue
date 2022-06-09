<template>
  <AppAccordionItem :active="active" :title="`${firstName} ${lastName} ${middleName}`" :created_at="created_at"
    @toggle="$emit('toggle')">
    <div class="flex gap-4 mb-4">
      <div>
        ФИО: {{ firstName }} {{ lastName }} {{ middleName }} <br>
        Дата рождения: {{ birthday }} <br>
        Телефон: {{ phone }} <br>
      </div>
      <div>
        Серия и номер паспорта: {{ passport }} <br>
        Кем выдан: {{ passportIssuedBy }} <br>
        Когда выдан: {{ passportIssuedAt }} <br>
      </div>
    </div>
    <div>
      Нарушение: <br>
      {{ violation }}
    </div>
  </AppAccordionItem>
</template>

<script setup lang="ts">
defineProps<{
  active?: boolean,
  id: number
  created_at: string,
  firstName: string,
  lastName: string,
  middleName: string,
  birthday: string,
  passport: string,
  passportIssuedBy: string,
  passportIssuedAt: string,
  violation: string,
  phone: string,
  author: {
    id: number,
    name: string
  }
}>()

defineEmits<{
  (e: 'toggle'): void
}>()
</script>