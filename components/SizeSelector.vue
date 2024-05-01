<script lang="ts" setup>
import type { ProductSize } from "~/types/data/product.types";

export type SizeSelectorProps = {
  sizes: ProductSize[] | string[];
};

const props = withDefaults(defineProps<SizeSelectorProps>(), {});

const getEu = (size: ProductSize | string) => {
  return typeof size === "object" ? size.eu : size;
};
const getRu = (size: ProductSize | string) => {
  return typeof size === "object" ? size.ru : undefined;
};
</script>

<template>
  <div class="size-selector flex gap-1">
    <VLink
      v-for="(size, i) in props.sizes"
      :key="i"
      class="size-selector__item"
      variant="background"
    >
      <p></p>
      <p>{{ getEu(size) }}</p>
      <p class="text-xs font-light opacity-50">{{ getRu(size) }}</p>
    </VLink>
  </div>
</template>

<style lang="scss" scoped>
.size-selector {
  .size-selector__item {
    @apply flex size-12 flex-col items-center justify-center rounded border border-neutral-300;
  }
}
</style>
