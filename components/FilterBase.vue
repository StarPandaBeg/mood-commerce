<script lang="ts" setup>
export type FilterBaseProps = {
  title: string;
};

const props = defineProps<FilterBaseProps>();
</script>

<template>
  <div class="product-filter">
    <h1 class="text-base font-medium">{{ props.title }}</h1>
    <div class="product-filter__content pt-2">
      <slot />
    </div>
  </div>
</template>
