<template>
  <footer class="w-100 px-5 py-16 bg-slate-200">
    <div class="px-10 flex justify-between">
      <div>
        <img src="~/assets/images/mood-brand.png" class="h-8 object-contain" />
        <p class="pt-2 max-w-80 text-sm text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa
          mi. Aliquam in hendrerit urna.
        </p>
      </div>
      <div class="flex justify-end grow gap-6">
        <VFooterList title="Компания" class="min-w-44">
          <VFooterListItem>О бренде</VFooterListItem>
          <VFooterListItem>Работа</VFooterListItem>
          <VFooterListItem>Контакты</VFooterListItem>
          <VFooterListItem>Клуб</VFooterListItem>
          <VFooterListItem>Оферта</VFooterListItem>
        </VFooterList>
        <VFooterList title="Помощь" class="min-w-44">
          <VFooterListItem>Магазины</VFooterListItem>
          <VFooterListItem>Оплата</VFooterListItem>
          <VFooterListItem>Доставка</VFooterListItem>
          <VFooterListItem>Как вернуть товар</VFooterListItem>
          <VFooterListItem>Вопросы и ответы</VFooterListItem>
        </VFooterList>
        <VFooterList title="Мы в соцсетях" class="min-w-44">
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
              class="text-xl text-black/75 font-semibold"
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
                class="text-black/75 font-semibold"
              >
                hello@mood.ru
              </a>
            </p>
            <p class="pt-1 text-sm text-gray-500">
              Сотрудничество:
              <a
                href="mailto:hello@mood.ru"
                class="text-black/75 font-semibold"
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
