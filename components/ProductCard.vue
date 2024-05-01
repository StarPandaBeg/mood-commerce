<script lang="ts" setup>
import { HeartIcon } from "@heroicons/vue/24/outline";
import type { Product, ProductSize } from "~/types/data/product.types";

const props = defineProps<{
  product: Product;
}>();
const price = useNumberWithSpaces(props.product?.price || 0);
const image = computed(() => {
  if (props.product.image != null)
    return `/mood-commerce/images/products/${props.product.image}`;
  return "/mood-commerce/images/placeholders/cloth.png";
});

const getSize = (size: ProductSize | string) => {
  if (typeof size == "string") return size;
  return size.eu;
};
</script>

<template>
  <VCard variant="background" class="product-card relative">
    <div class="h-80 w-full">
      <picture>
        <img
          :alt="product.name"
          :src="image"
          class="block h-full w-full object-cover"
        />
      </picture>
    </div>
    <VCardItem class="items-center gap-1 !pt-0">
      <h1 class="text-center text-sm font-medium lg:text-base">
        {{ product.name }}
      </h1>
      <div>
        <p class="text-center text-xs opacity-50">{{ product.type }}</p>
        <p class="text-center text-xs opacity-50">{{ product.brand }}</p>
      </div>
      <h2 class="text-center">{{ price }} ₽</h2>

      <div
        v-if="product.additional"
        class="product-card__additional pt-1 transition"
      >
        <ul v-if="product.additional.sizes" class="flex gap-1">
          <li
            v-for="(size, i) in product.additional.sizes"
            :key="i"
            class="rounded bg-black/5 px-2"
          >
            {{ getSize(size) }}
          </li>
        </ul>
      </div>
    </VCardItem>

    <div class="product-card__favorite absolute right-4 top-4 z-10 transition">
      <button @click.prevent>
        <HeartIcon class="size-6" />
      </button>
    </div>
  </VCard>
</template>

<style lang="scss" scoped>
.product-card {
  &__favorite {
    button {
      opacity: 0;

      &:focus {
        opacity: 1;
      }
    }
  }
  &__additional {
    opacity: 0;
  }

  &:hover {
    .product-card__favorite button {
      opacity: 1;
    }

    .product-card__additional {
      opacity: 1;
    }
  }
}
</style>
