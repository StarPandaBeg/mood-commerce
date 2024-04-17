<script lang="ts" setup>
import products from "~/data/products";
import type { Product } from "~/types/data/product.types";
import type { FilterSelectProps } from "~/types/filter.types";

const data = ref<Product[]>(products);

const minPrice = products.reduce((p, c) => (p.price < c.price ? p : c)).price;
const maxPrice = products.reduce((p, c) => (p.price > c.price ? p : c)).price;
const selectables: FilterSelectProps[] = [
  {
    title: "Пол",
    items: ["Мужской", "Женский"],
    multiple: true,
  },
  {
    title: "Категория",
    items: [
      "Блузка",
      "Джинсы",
      "Кардиган",
      "Костюм",
      "Куртка",
      "Пальто",
      "Пиджак",
      "Платье",
      "Рубашка",
      "Свитер",
      "Толстовка",
      "Футболка",
      "Шорты",
    ],
    multiple: true,
  },
  {
    title: "Размер",
    items: ["XS", "S", "M", "L", "XL"],
    multiple: true,
  },
  {
    title: "Цвет",
    items: [
      "Белый",
      "Бежевый",
      "Голубой",
      "Зелёный",
      "Красный",
      "Серый",
      "Синий",
      "Чёрный",
    ],
    multiple: true,
  },
  {
    title: "Бренд",
    items: [
      "Berry",
      "Calvina",
      "EliteWear",
      "ImperialOutfit",
      "La Coste",
      "Mood",
      "OnlyYou",
      "RLauren",
      "The North Face",
      "YourStyle",
      "WinterPremium",
    ],
    multiple: true,
  },
];
</script>

<template>
  <div class="flex flex-col gap-4 pt-2">
    <VBreadcrumbs>
      <VLink to="/">Главная</VLink>
      <VLink>Каталог</VLink>
      <VLink>Новинки</VLink>
    </VBreadcrumbs>
    <div class="grid grid-cols-1 md:grid-cols-5">
      <div class="col-span-1 px-4 text-lg tracking-tight">
        <h1>Фильтр</h1>
        <div class="product-filters flex flex-col gap-6 pr-4 pt-4">
          <FilterRange title="Цена" :min="minPrice" :max="maxPrice" />
          <FilterSelect
            v-for="(item, i) in selectables"
            :key="i"
            v-bind="item"
          />
        </div>
      </div>
      <div
        class="col-span-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
      >
        <VLink
          v-for="product in data"
          :key="product.id"
          :to="`/products/${product.slug}`"
          variant="plain"
          class="transition-all duration-300 hover:scale-105 focus:scale-105"
        >
          <ProductCard :product="product" class="w-full" />
        </VLink>
      </div>
    </div>
  </div>
</template>
