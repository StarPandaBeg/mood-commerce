<script lang="ts" setup>
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/vue/24/outline";
import type { PageNav } from "~/types/page.types";

export type VCarouselNavigationProps = {
  hover?: boolean;
};

const props = withDefaults(defineProps<VCarouselNavigationProps>(), {
  hover: false,
});

const nav = inject<PageNav>("nav", {
  current: ref(0),
  total: ref(0),
  prev: () => {},
  next: () => {},
  set: () => {},
});
</script>

<template>
  <div
    class="v-carousel-navigation size-8"
    :class="{ 'v-carousel-navigation_hover': props.hover }"
  >
    <div
      v-if="nav.current.value > 0"
      class="v-carousel-navigation__left size-8 rounded-full bg-white transition-all"
    >
      <VLink @click="nav.prev()">
        <ArrowLeftCircleIcon class="size-8" />
      </VLink>
    </div>
    <div
      v-if="nav.current.value < nav.total.value - 1"
      class="v-carousel-navigation__right size-8 rounded-full bg-white transition-all"
    >
      <VLink @click="nav.next()">
        <ArrowRightCircleIcon class="size-8" />
      </VLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.v-carousel:hover {
  .v-carousel-navigation_hover {
    .v-carousel-navigation__left,
    .v-carousel-navigation__right {
      opacity: 1;
      transform: translate(0, -50%);
    }
  }
}

.v-carousel-navigation {
  --v-carousel-side-offset: 16px;

  &_hover {
    .v-carousel-navigation__left,
    .v-carousel-navigation__right {
      opacity: 0;
    }
    .v-carousel-navigation__left {
      transform: translate(-100%, -50%);
    }
    .v-carousel-navigation__right {
      transform: translate(100%, -50%);
    }
  }

  &__left,
  &__right {
    position: absolute;
    top: 50%;
  }

  &__left {
    left: var(--v-carousel-side-offset);
  }

  &__right {
    right: var(--v-carousel-side-offset);
  }
}
</style>
