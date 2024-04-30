<script lang="ts" setup>
import type { FilterBaseProps } from "./FilterBase.vue";

export type FilterSelectProps = FilterBaseProps & {
  items: string[];
  multiple?: boolean;
};

const props = withDefaults(defineProps<FilterSelectProps>(), {
  multiple: false,
});
const name = ref(Math.random().toString(36).slice(2));
const inputType = computed(() => (props.multiple ? "checkbox" : "radio"));
</script>

<template>
  <FilterBase v-bind="props" class="product-filter-select">
    <div
      v-for="(item, i) in props.items"
      :key="i"
      class="product-filter-select__checkbox"
    >
      <label class="flex items-center">
        <ClientOnly>
          <input
            :type="inputType"
            :name="name"
            :checked="i == 0 && !props.multiple"
            class="product-filter-select__input"
          />
          <div class="product-filter-select__checkmark"></div>
          <span
            class="product-filter-select__label pl-2 text-sm font-medium text-black/75"
          >
            {{ item }}
          </span>
        </ClientOnly>
      </label>
    </div>
  </FilterBase>
</template>

<style lang="scss" scoped>
.product-filter-select {
  :deep(.product-filter__content) {
    @apply space-y-1;
  }

  &__checkbox {
    .product-filter-select__input {
      @apply absolute h-0 w-0 opacity-0;

      &:checked + .product-filter-select__checkmark {
        @apply relative bg-black;

        &:after {
          @apply visible;
        }
      }
    }

    .product-filter-select__checkmark {
      @apply inline-block size-5 cursor-pointer rounded bg-gray-200;

      &:after {
        content: "";
        position: absolute;
        left: 8px;
        top: 4px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        transform: rotate(45deg);
        visibility: hidden;
      }
    }

    .product-filter-select__label {
      @apply cursor-pointer;
    }
  }
}
</style>
