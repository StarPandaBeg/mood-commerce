<script lang="ts" setup>
import { CheckCircleIcon, FunnelIcon } from "@heroicons/vue/24/outline";
import type { Product } from "~/types/data/product.types";
import type { FilterSelectProps } from "~/components/FilterSelect.vue";
import type { Category } from "~/types/data/category.types";

const route = useRoute();
const { $api } = useNuxtApp();

const category = ref<Category>(
  await $api.categories.bySlug(route.params.category as string),
);

const data = ref<Product[]>(await $api.products.all());
const minMax = ref(await $api.products.getPriceMinMax());
const selectables = computed(
  () => category.value.filters as FilterSelectProps[],
);
</script>

<template>
  <div class="flex flex-col gap-4 pt-2">
    <VBreadcrumbs>
      <VLink to="/">Главная</VLink>
      <VLink>Каталог</VLink>
      <VLink>{{ category.name }}</VLink>
    </VBreadcrumbs>
    <div class="grid grid-cols-1 md:grid-cols-5">
      <div class="col-span-1 py-2 md:hidden">
        <VSideMenu>
          <template #activator="{ open }">
            <VLink variant="button" @click="open()">
              <FunnelIcon class="size-6" />
              <span class="pl-2">Фильтры</span>
            </VLink>
          </template>
          <template #default>
            <div class="max-w-[75vw] px-8 pb-4">
              <h1>Фильтр</h1>
              <div class="product-filters flex flex-col gap-6 pr-4 pt-4">
                <FilterRange title="Цена" :min="minMax.min" :max="minMax.max" />
                <FilterSelect
                  v-for="(item, i) in selectables"
                  :key="i"
                  v-bind="item"
                />
              </div>
            </div>
            <VSideMenuItem>
              <CheckCircleIcon class="size-6" />
              <span class="pl-2">Применить</span>
            </VSideMenuItem>
          </template>
        </VSideMenu>
      </div>
      <div class="col-span-1 hidden px-4 text-lg tracking-tight md:block">
        <h1>Фильтр</h1>
        <div class="product-filters flex flex-col gap-6 pr-4 pt-4">
          <FilterRange title="Цена" :min="minMax.min" :max="minMax.max" />
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
