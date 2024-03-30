<template>
  <footer class="w-100 bg-slate-200 px-5 py-8 lg:py-16">
    <div class="flex flex-col justify-between lg:flex-row lg:px-10 lg:px-5">
      <div>
        <img src="~/assets/images/mood-brand.png" class="h-8 object-contain" />
        <p class="pt-2 text-sm text-gray-500 lg:max-w-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna.
        </p>
      </div>
      <div
        class="mt-5 flex grow flex-col gap-6 lg:mt-0 lg:flex-row lg:justify-end"
      >
        <VFooterList title="Компания" class="xl:min-w-44">
          <VFooterListItem>О бренде</VFooterListItem>
          <VFooterListItem>Работа</VFooterListItem>
          <VFooterListItem>Контакты</VFooterListItem>
          <VFooterListItem>Клуб</VFooterListItem>
          <VFooterListItem>Оферта</VFooterListItem>
        </VFooterList>
        <VFooterList title="Помощь" class="xl:min-w-44">
          <VFooterListItem>Магазины</VFooterListItem>
          <VFooterListItem>Оплата</VFooterListItem>
          <VFooterListItem>Доставка</VFooterListItem>
          <VFooterListItem>Как вернуть товар</VFooterListItem>
          <VFooterListItem>Вопросы и ответы</VFooterListItem>
        </VFooterList>
        <VFooterList title="Мы в соцсетях" class="xl:min-w-44">
          <VFooterListItem>ВКонтакте</VFooterListItem>
          <VFooterListItem>Telegram</VFooterListItem>
          <VFooterListItem>Instagram</VFooterListItem>
          <VFooterListItem>TikTok</VFooterListItem>
        </VFooterList>
        <div class="py-1">
          <div class="flex flex-col gap-1">
            <p class="text-sm text-gray-500">Телефон:</p>
            <a
              href="tel:88001234567"
              class="text-xl font-semibold text-black/75"
            >
              8 800 123-45-67
            </a>
            <p class="text-sm text-gray-500">По будням с 8:00 до 17:00</p>
          </div>
          <div class="pt-5">
            <p class="text-sm text-gray-500">
              E-Mail:
              <a
                href="mailto:hello@mood.ru"
                class="font-semibold text-black/75"
              >
                hello@mood.ru
              </a>
            </p>
            <p class="pt-1 text-sm text-gray-500">
              Сотрудничество:
              <a
                href="mailto:hello@mood.ru"
                class="font-semibold text-black/75"
              >
                pr@mood.ru
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
