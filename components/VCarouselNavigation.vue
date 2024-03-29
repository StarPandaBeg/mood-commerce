<script lang="ts" setup>
import type { PageNav } from "~/types/page.types";
import type { VCarouselNavigationProps } from "~/types/vcarousel.types";

const props = withDefaults(defineProps<VCarouselNavigationProps>(), {
  direction: "bottom",
});

const nav = inject<PageNav>("nav", {
  current: ref(0),
  total: ref(0),
  prev: () => {},
  next: () => {},
  set: (index: number) => {},
});

const activeIndex = computed(() => nav.current.value + 1);
const directionClass = computed(
  () => `v-carousel-navigation_${props.direction}`
);
const isVertical = computed(
  () => props.direction == "left" || props.direction == "right"
);
</script>

<template>
  <div class="v-carousel-navigation" :class="directionClass">
    <ul class="flex p-4 gap-1" :class="{ 'flex-col': isVertical }">
      <li v-for="index in nav.total.value">
        <a href="#" class="p-1" @click.prevent="nav.set(index - 1)">
          <span
            class="size-2 rounded-full inline-block"
            :class="index == activeIndex ? 'bg-orange-400' : 'bg-white/30'"
          ></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.v-carousel-navigation {
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
