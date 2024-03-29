<script lang="ts" setup>
import type { VCarouselProps, VCarouselNav } from "~/types/vcarousel.types";

const slide = defineModel<number>({ default: 0 });
const props = withDefaults(defineProps<VCarouselProps>(), {
  noScroll: false,
});
const slots = useSlots();

const total = ref(slots.default!.length);
const transform = computed(() => `translateX(-${slide.value * 100}%)`);

const setSlide = (index: number) => {
  if (index < 0) index = 0;
  if (index >= total.value) index = total.value - 1;
  slide.value = index;
};
const prev = () => {
  const newValue = slide.value == 0 ? total.value - 1 : slide.value - 1;
  setSlide(newValue);
};
const next = () => {
  const newValue = slide.value == total.value - 1 ? 0 : slide.value + 1;
  setSlide(newValue);
};
const onScroll = (e: WheelEvent) => {
  if (props.noScroll) return;
  const direction = Math.sign(e.deltaY);
  setSlide(slide.value + direction);
};

const nav: VCarouselNav = {
  active: readonly(slide),
  total: readonly(total),
  set: setSlide,
  prev,
  next,
};
provide("nav", nav);

onMounted(() => {
  total.value = slots.default!().length;
});
onBeforeUpdate(() => {
  total.value = slots.default!().length;
});
</script>

<template>
  <div class="v-carousel relative">
    <div class="v-carousel__viewport overflow-x-hidden">
      <ul
        class="v-carousel__items py-4 w-full flex transition-all"
        :style="{ transform: transform }"
        @wheel="onScroll"
      >
        <slot />
      </ul>
    </div>
    <slot name="modules" />
  </div>
</template>

<style lang="scss" scoped>
:deep(.v-carousel-navigation) {
  position: absolute;
  left: 50%;
  bottom: 4px;
  transform: translateX(-50%);
}
</style>
