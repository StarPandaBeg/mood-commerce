<script lang="ts" setup>
const perSlide = useBreakpoints(2, {
  md: 3,
  lg: 5,
});
</script>

<template>
  <div class="flex flex-col">
    <VCarousel>
      <VCarouselItem class="rounded">
        <img src="~/assets/images/banner-1.png" class="w-full" />
      </VCarouselItem>

      <template #modules>
        <VCarouselPagination direction="left" />
      </template>
    </VCarousel>

    <VCardItem class="items-center p-0">
      <VCardTitle>Бестселлеры</VCardTitle>
      <VCardSubtitle>Главные хиты сезона</VCardSubtitle>
    </VCardItem>

    <VCarousel :per-slide="perSlide" :auto-play="2500">
      <VCarouselItem v-for="i in 20" :key="i">
        <VCard variant="plain" class="max-w-80 px-1">
          <img src="~/assets/images/card.webp" class="w-auto" />
          <VCardItem class="items-center">
            <h1 class="text-center font-medium">Свитшот с принтом {{ i }}</h1>
            <VCardSubtitle class="text-center">5 990Р</VCardSubtitle>
          </VCardItem>
        </VCard>
      </VCarouselItem>

      <template #modules>
        <VCarouselNavigation hover />
      </template>
    </VCarousel>

    <div class="md:columns-2 md:gap-2">
      <BannerCard title="Тренды" image-path="/images/banner-2.png" />
      <BannerCard
        title="Обувь"
        image-path="/images/banner-3.png"
        class="pt-1 md:pt-0"
      />
    </div>
    <div class="columns-1 py-2">
      <BannerCard
        id="banner-4"
        title="Будь собой"
        subtitle="Коллекции на любой вкус"
        image-path="/images/banner-4.png"
      />
    </div>
  </div>
</template>

<style lang="scss">
#banner-4 .banner-card__content {
  top: 50%;
  transform: translateY(-50%);
}
</style>
