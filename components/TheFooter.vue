<template>
  <footer class="bg-gray-400">
    <AppContainer class="py-4 flex flex-col gap-2">
      <AppLogo />
      <AppNav>
        <AppNavLink to="/articles/1" title="О сервисе" />
        <AppNavLink to="/articles/2" title="Политика обработки персональных данных" />
      </AppNav>
      <p>Не является публичной офертой</p>
      <div class="flex flex-col sm:flex-row justify-between gap-4 text-gray-200">
        <span class="sm:order-first">Соискателей в базе: 130</span>
        <span>&copy; black-info - 2018-2022</span>
      </div>
    </AppContainer>
  </footer>
</template>