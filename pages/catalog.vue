<script lang="ts" setup>
import products from "~/data/products";
import type { Product } from "~/types/data/product.types";

const data = ref<Product[]>(products);
</script>

<template>
  <div class="flex flex-col gap-4 pt-2">
    <VBreadcrumbs>
      <VLink to="/">Главная</VLink>
      <VLink>Каталог</VLink>
      <VLink>Новинки</VLink>
    </VBreadcrumbs>
    <div class="grid grid-cols-1 md:grid-cols-4">
      <div class="col-span-1 px-4 text-lg tracking-tight">
        <h1>Фильтр</h1>
      </div>
      <div
        class="col-span-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4"
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
