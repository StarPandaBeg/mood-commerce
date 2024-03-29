<script lang="ts" setup>
import type { VCarouselProps } from "~/types/vcarousel.types";

const props = withDefaults(defineProps<VCarouselProps>(), {
  noScroll: false,
  start: 0,
});
const slots = useSlots();

const total = ref(slots.default!.length);

const page = usePage(total, props.start);
const transform = computed(() => `translateX(-${page.current.value * 100}%)`);

const onScroll = (e: WheelEvent) => {
  if (props.noScroll) return;
  const direction = Math.sign(e.deltaY);
  page.set(page.current.value + direction);
};
provide("nav", page);

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
