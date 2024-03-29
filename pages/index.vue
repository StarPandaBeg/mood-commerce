<template>
  <VCarousel class="w-100">
    <VCarouselItem
      class="flex justify-between bg-no-repeat bg-cover rounded"
      id="banner-1"
    >
      <div class="px-16 flex flex-col justify-center">
        <h1 class="font-bold text-6xl">SUMMER ‘24</h1>
        <p class="text-2xl">Летняя коллекция футболок только для тебя</p>
      </div>
      <img src="~/assets/images/t-shirts.png" alt="" width="512" />
    </VCarouselItem>

    <template #modules>
      <VCarouselNavigation direction="left" />
    </template>
  </VCarousel>
</template>

<style lang="scss" scoped>
#banner-1 {
  background-image: url(~/assets/images/banner-1-pattern.png);
}
</style>
