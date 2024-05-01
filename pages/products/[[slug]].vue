<script lang="ts" setup>
import type { Product } from "~/types/data/product.types";
import {
  StarIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  ArchiveBoxIcon,
} from "@heroicons/vue/24/solid";
import { ArrowsRightLeftIcon, TagIcon } from "@heroicons/vue/24/outline";

const route = useRoute();
const { $api } = useNuxtApp();

const product = ref<Product>(
  await $api.products.bySlug(route.params.slug as string),
);
const images = [
  "/images/gallery/1.webp",
  "/images/gallery/2.webp",
  "/images/gallery/3.webp",
  "/images/gallery/4.webp",
  "/images/gallery/5.webp",
  "/images/gallery/6.webp",
  "/images/gallery/7.webp",
  "/images/gallery/8.webp",
  "/images/gallery/9.webp",
  "/images/gallery/10.webp",
  "/images/gallery/11.webp",
];

const galleryPerPage = useBreakpoints(3, {
  md: 2,
  lg: 4,
});
</script>

<template>
  <div class="flex flex-col pt-2">
    <VBreadcrumbs>
      <VLink to="/">Главная</VLink>
      <VLink>Каталог</VLink>
      <VLink>{{ product.brand }}</VLink>
      <VLink>{{ product.name }}</VLink>
    </VBreadcrumbs>
    <div class="grid grid-cols-1 gap-4 pt-2 md:grid-cols-3">
      <VCarousel dense>
        <VCarouselItem v-for="(image, i) in images" :key="i">
          <img :src="image" class="w-full object-contain" />
        </VCarouselItem>

        <template #modules>
          <VCarouselGallery :images="images" :per-page="galleryPerPage" />
          <VCarouselNavigation hover />
        </template>
      </VCarousel>
      <VCard variant="plain" class="flex flex-col py-2">
        <VCardItem>
          <VChip class="my-2">{{ product.brand }}</VChip>
          <VCardTitle class="!font-bold">{{ product.name }}</VCardTitle>
          <VCardSubtitle>
            <StarIcon class="inline size-4 text-amber-500" />
            <span class="pl-1 text-sm">4.8</span>
          </VCardSubtitle>
          <VCardText no-x-padding class="flex flex-col gap-4">
            <div v-if="product.additional?.sizes">
              <VLink class="text-sm underline">Таблица размеров</VLink>
              <SizeSelector class="pt-1" :sizes="product.additional?.sizes" />
            </div>
            <VTable class="w-full text-sm" variant="plain">
              <tbody>
                <tr>
                  <td class="w-1/2">
                    <span>Артикул</span>
                  </td>
                  <td>
                    <span>{{ product.id }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Состав</span>
                  </td>
                  <td>
                    <span>хлопок 92%; эластан 8%</span>
                  </td>
                </tr>
                <tr v-if="product.additional?.gender">
                  <td>
                    <span>Пол</span>
                  </td>
                  <td>
                    <span>{{ product.additional?.gender }}</span>
                  </td>
                </tr>
                <tr v-if="product.additional?.color">
                  <td>
                    <span>Цвет</span>
                  </td>
                  <td>
                    <span>{{ product.additional?.color }}</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Страна производства</span>
                  </td>
                  <td>
                    <span>Россия</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span>Особенности модели</span>
                  </td>
                  <td>
                    <span>Оверсайз</span>
                  </td>
                </tr>
              </tbody>
            </VTable>
            <div class="additional flex flex-col gap-2 pt-2">
              <div class="additional__row text-sm">
                <ArrowsRightLeftIcon class="inline size-5" />
                <span class="pl-2">14 дней на возврат</span>
              </div>
              <div class="additional__row text-sm">
                <TagIcon class="inline size-5" />
                <span class="pl-2">Примерка</span>
              </div>
            </div>
          </VCardText>
        </VCardItem>
      </VCard>
      <VCard variant="plain">
        <VCardText class="h-full px-8" no-x-padding>
          <div class="sticky top-4">
            <VCard>
              <VCardItem>
                <VCardTitle>
                  <span class="text-xl font-bold text-amber-600">
                    {{ product.price }} ₽
                  </span>
                  <span class="text-light text-sm line-through opacity-50">
                    {{ product.price + 1000 }} ₽
                  </span>
                </VCardTitle>
              </VCardItem>
              <VCardText>
                <VLink
                  variant="button"
                  class="bg-orange-500 text-lg font-medium text-white opacity-90"
                >
                  <ShoppingCartIcon class="inline size-6" />
                  <span class="pl-2">В корзину</span>
                </VLink>
                <div class="pt-4 text-sm font-light opacity-75">
                  <ArchiveBoxIcon class="inline size-4 align-middle" />
                  <span class="pl-1 align-middle">Доставим: 1 мая</span>
                </div>
                <div class="text-sm font-light opacity-75">
                  <BuildingStorefrontIcon class="inline size-4 align-middle" />
                  <span class="pl-1 align-middle">
                    {{ product.brand }}
                  </span>
                </div>
              </VCardText>
            </VCard>
          </div>
        </VCardText>
      </VCard>
    </div>
  </div>
</template>
