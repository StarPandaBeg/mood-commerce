<script lang="ts" setup>
import { useInterval } from "~/composables/interval";
import { useWindow } from "~/composables/window";

export type VCarouselProps = {
  noScroll?: boolean;
  start?: number;
  autoPlay?: number;
  perSlide?: number;
  scrollFull?: boolean;
};

const props = withDefaults(defineProps<VCarouselProps>(), {
  noScroll: false,
  start: 0,
  autoPlay: -1,
  perSlide: 1,
  scrollFull: false,
});
const window = useWindow();

const totalItems = ref(0);
const itemParent = ref<HTMLElement | null>(null);

const autoPlay = computed(() => props.autoPlay);
const itemWidth = computed(() => `calc(100% / ${props.perSlide})`);
const totalPartPages = computed(() => {
  return totalItems.value - props.perSlide + 1;
});
const totalFullPages = computed(() =>
  Math.floor(totalItems.value / props.perSlide),
);
const totalPages = computed(() => {
  return props.scrollFull ? totalFullPages.value : totalPartPages.value;
});
const pageStep = computed(() => (props.scrollFull ? 1 : props.perSlide));

const page = usePage(totalPages, props.start);
useInterval(() => {
  page.next();
}, readonly(autoPlay));

const transform = computed(
  () => `translateX(-${(page.current.value * 100) / pageStep.value}%)`,
);

const onScroll = (e: WheelEvent) => {
  if (props.noScroll) return;
  if (totalPages.value <= 1) return;
  if (!window.breakpoints.md.value) return;

  e.preventDefault();
  const direction = Math.sign(e.deltaY);
  page.set(page.current.value + direction);
};
provide("nav", page);

onMounted(() => {
  totalItems.value = itemParent.value!.childElementCount;
});
onBeforeUpdate(() => {
  totalItems.value = itemParent.value!.childElementCount;
});
</script>

<template>
  <div class="v-carousel relative">
    <div class="v-carousel__viewport overflow-x-hidden">
      <ul
        ref="itemParent"
        class="v-carousel__items flex w-full py-4 transition-all"
        :style="{ transform: transform }"
        @wheel="onScroll"
      >
        <slot />
      </ul>
    </div>
    <slot name="modules" />
  </div>
</template>

<style lang="scss">
.v-carousel__items {
  .v-carousel__item {
    width: v-bind(itemWidth);
  }
}
</style>
