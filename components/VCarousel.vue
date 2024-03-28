<script lang="ts" setup>
import type { VCarouselProps } from "~/types/vcarousel.types";

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
const onScroll = (e: WheelEvent) => {
  if (props.noScroll) return;
  const direction = Math.sign(e.deltaY);
  setSlide(slide.value + direction);
};

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
    <VCarouselNavigation
      :active="slide"
      :total="total"
      @update:slide="setSlide"
    />
  </div>
</template>

<style lang="scss" scoped>
.v-carousel-navigation {
  position: absolute;
  left: 50%;
  bottom: 4px;
  transform: translateX(-50%);
}
</style>
