<script lang="ts" setup>
import type { PageNav } from "~/types/page.types";
import type { VCarouselPaginationProps } from "~/types/vcarousel.types";

const props = withDefaults(defineProps<VCarouselPaginationProps>(), {
  direction: "bottom",
});

const nav = inject<PageNav>("nav", {
  current: ref(0),
  total: ref(0),
  prev: () => {},
  next: () => {},
  set: () => {},
});

const activeIndex = computed(() => nav.current.value + 1);
const directionClass = computed(
  () => `v-carousel-pagination_${props.direction}`,
);
const isVertical = computed(
  () => props.direction == "left" || props.direction == "right",
);
</script>

<template>
  <div
    v-if="nav.total.value > 1"
    class="v-carousel-pagination"
    :class="directionClass"
  >
    <ul class="flex gap-1 p-4" :class="{ 'flex-col': isVertical }">
      <li v-for="index in nav.total.value" :key="index">
        <a href="#" class="p-1" @click.prevent="nav.set(index - 1)">
          <span
            class="inline-block size-2 rounded-full"
            :class="index == activeIndex ? 'bg-orange-400' : 'bg-white/30'"
          ></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.v-carousel-pagination {
  --v-carousel-side-offset: 4px;

  position: absolute;

  &_top,
  &_bottom {
    left: 50%;
    transform: translateX(-50%);
  }

  &_left,
  &_right {
    top: 50%;
    transform: translateY(-50%);
  }

  &_top {
    top: var(--v-carousel-side-offset);
  }

  &_bottom {
    bottom: var(--v-carousel-side-offset);
  }

  &_left {
    left: var(--v-carousel-side-offset);
  }

  &_right {
    right: var(--v-carousel-side-offset);
  }
}
</style>
