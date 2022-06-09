<template>
  <AppContainer self-max-width>
    <h1 class="text-4xl font-black mb-4">Соискатели</h1>
    <div class="mb-4 flex flex-wrap gap-4">
      <InputGroup>
        <AppButton>Мои</AppButton>
        <AppButton>Все</AppButton>
      </InputGroup>
      
      <AppButton class="ml-auto sm:ml-0 sm:mr-auto">
        <span class="hidden md:inline">Добавить</span>
        <span class="md:hidden">
          <Fa icon="plus" />
        </span>
      </AppButton>

      <InputGroup class="w-full sm:w-96 lg:w-2/5">
        <FormInput v-model="searchString" placeholder="Любые данные о соискателе..." />
        <AppButton class="flex-grow">Найти</AppButton>
      </InputGroup>
    </div>

    <AppAccordion>
      <AccordionItemCandidate v-for="index of 10" :key="index" :id="1" title="Закирова Назира Фанисовна"
        created_at="6 июня 2022" first-name="Назира" last-name="Закирова" middle-name="Фанисовна" birthday="06.06.2022"
        passport="0000 000000" passport-issued-by="УФМС РОССИИ" passport-issued-at="06.06.2022"
        violation="Монетка регион Уфа МХ Краснохолмский Фрунзе 28а Закирова Назира Фанисовна похищала алкоголь, вину признала, ущерб возмещен, КУСП 1320"
        phone="00000000000" :author="{ id: 1, name: 'black-info.ru' }" :active="active === index"
        @toggle="toggleActive(index)" />
    </AppAccordion>
  </AppContainer>
</template>

<script setup lang="ts">
const active = ref(null)
const searchString = ref("")

function toggleActive(i: Number) {
  active.value = active.value === i ? null : i
}
</script>