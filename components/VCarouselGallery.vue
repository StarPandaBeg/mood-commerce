<script lang="ts" setup>
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/vue/24/outline";
import type { PageNav } from "~/types/page.types";

export type VCarouselGalleryProps = {
  images: string[];
  perPage?: number;
};

const props = withDefaults(defineProps<VCarouselGalleryProps>(), {
  perPage: 3,
});
const nav = inject<PageNav>("nav", {
  current: ref(0),
  total: ref(0),
  prev: () => {},
  next: () => {},
  set: () => {},
});
const page = ref<number>(0);

const items = computed(() => {
  return props.images.slice(page.value, page.value + props.perPage);
});
const selected = computed(() => {
  return nav.current.value - page.value;
});
const hasPrev = computed(() => {
  return page.value != 0;
});
const hasNext = computed(() => {
  return page.value != props.images.length - props.perPage;
});

const select = (relativeIndex: number) => {
  nav.set(page.value + relativeIndex);
};
const prevPage = () => {
  if (!hasPrev) return;
  page.value--;
};
const nextPage = () => {
  if (!hasNext) return;
  page.value++;
};

watch(nav.current, (value) => {
  const min = page.value;
  const max = page.value + props.perPage;
  if (value >= max || value < min) {
    page.value = Math.min(value, props.images.length - props.perPage);
  }
});
watch(selected, (value) => {
  if (value < 0) {
    select(0);
  }
  if (value >= props.perPage) {
    select(props.perPage - 1);
  }
});
</script>

<template>
  <ul class="v-carousel-gallery flex justify-between gap-2">
    <li>
      <button
        class="h-16 disabled:opacity-50"
        :disabled="!hasPrev"
        @click="prevPage()"
      >
        <ArrowLeftIcon class="inline size-4" />
      </button>
    </li>
    <ul class="flex justify-center gap-2">
      <li
        v-for="i in Math.min(props.perPage, props.images.length)"
        :key="i"
        class="v-carousel-gallery__item rounded"
        :class="{ active: i - 1 == selected }"
      >
        <button
          class="size-16 rounded"
          :style="{ backgroundImage: `url(${items[i - 1]})` }"
          @click="select(i - 1)"
        />
      </li>
    </ul>
    <li>
      <button
        class="h-16 text-right disabled:opacity-50"
        :disabled="!hasNext"
        @click="nextPage()"
      >
        <ArrowRightIcon class="inline size-4" />
      </button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.v-carousel-gallery {
  &__item {
    border: 2px solid transparent;
    &.active {
      border-color: #f97316;
    }

    button {
      background-position: center center;
      background-size: cover;
    }
  }
}
</style>
