<script lang="ts" setup>
import { useInterval } from "~/composables/interval";
import type { VCarouselProps } from "~/types/vcarousel.types";

const props = withDefaults(defineProps<VCarouselProps>(), {
  noScroll: false,
  start: 0,
  autoPlay: -1,
});
const slots = useSlots();

const total = ref(slots.default!.length);
const autoPlay = computed(() => props.autoPlay);

const page = usePage(total, props.start);
useInterval(() => {
  page.next();
}, readonly(autoPlay));

const transform = computed(() => `translateX(-${page.current.value * 100}%)`);

const onScroll = (e: WheelEvent) => {
  if (props.noScroll) return;
  if (total.value <= 1) return;
  e.preventDefault();
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
