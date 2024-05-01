<template>
  <VCard class="mt-2">
    <VCardItem class="items-center gap-1">
      <div
        class="brand flex size-20 items-center justify-center rounded-full border-2"
      >
        <img src="~/assets/images/mood.png" class="inline size-10" />
      </div>
      <VCardTitle>Mood - Интернет-магазин одежды</VCardTitle>
    </VCardItem>
    <VCardText class="flex flex-col gap-2">
      <p>
        Пример простого интернет-магазина модной одежды. Реализованы три
        страницы — главная, просмотр списка товаров, просмотр товара.
        <br />
        Создан как пример работы на данном стэке.
        <br />
        <br />
        Использован минимум сторонних библиотек — необходимые компоненты
        релизованы с нуля.
      </p>
      <div class="stack">
        <h2 class="font-bold">Стэк</h2>
        <ul class="stack__list pt-2">
          <li class="stack__list-item">
            <img src="~/assets/images/about/nuxt.png" />
            <p>Nuxt 3</p>
          </li>
          <li class="stack__list-item">
            <img src="~/assets/images/about/vue.png" />
            <p>Vue 3</p>
          </li>
          <li class="stack__list-item">
            <img src="~/assets/images/about/tailwind.png" />
            <p>TailwindCSS</p>
          </li>
          <li class="stack__list-item">
            <img src="~/assets/images/about/sass.png" />
            <p>Sass</p>
          </li>
          <li class="stack__list-item">
            <img src="~/assets/images/about/typescript.png" />
            <p>TypeScript</p>
          </li>
        </ul>
      </div>
      <div class="links">
        <h2 class="font-bold">Ссылки</h2>
        <VLink
          class="items-center gap-2 pt-2"
          variant="plain"
          to="https://github.com/StarPandaBeg/mood-commerce"
          new-tab
        >
          <img src="~/assets/images/about/github.png" class="size-8" />
          <p class="underline">Исходный код</p>
        </VLink>
      </div>
    </VCardText>
  </VCard>
</template>

<style lang="scss" scoped>
.stack {
  &__list {
    @apply flex flex-wrap gap-1;
    &-item {
      @apply rounded border px-4 py-2;

      img {
        @apply inline w-8 align-middle;
      }
      p {
        @apply inline pl-2 align-middle;
      }
    }
  }
}
</style>
