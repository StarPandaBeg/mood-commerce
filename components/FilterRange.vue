<script lang="ts" setup>
import type { FilterRangeProps } from "~/types/filter.types";
import Slider from "@vueform/slider";

const props = defineProps<FilterRangeProps>();

const min = ref(props.min);
const max = ref(props.max);
const value = ref([min.value, max.value]);
</script>

<template>
  <FilterBase v-bind="props" class="product-filter-range">
    <div class="columns-2">
      <div>
        <div class="text-sm text-black/50">От</div>
        <input
          v-model="value[0]"
          class="w-9/12 bg-transparent p-1 text-sm font-medium text-black/50"
          :min="min"
        />
      </div>
      <div>
        <div class="text-sm text-black/50">До</div>
        <input
          v-model="value[1]"
          class="w-9/12 bg-transparent p-1 text-sm font-medium text-black/50"
          :max="props.max"
        />
      </div>
    </div>
    <div class="px-1 pt-4">
      <Slider
        v-model="value"
        show-tooltip="drag"
        lazy
        :min="min"
        :max="max"
        :options="{ margin: 1000 }"
      />
    </div>
  </FilterBase>
</template>

<style lang="scss">
@import "@vueform/slider/themes/tailwind";

.product-filter-range {
  .slider-connect {
    @apply bg-black;
  }
  .slider-handle {
    @apply rounded focus:ring-black focus:ring-opacity-30;
  }
  .slider-tooltip {
    @apply border-black bg-black;
  }
}
</style>
