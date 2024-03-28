<script lang="ts" setup>
import type { VCarouselNavigationProps } from "~/types/vcarousel.types";

const props = withDefaults(defineProps<VCarouselNavigationProps>(), {});
const emits = defineEmits(["update:slide"]);

const activeIndex = computed(() => props.active + 1);
</script>

<template>
  <div class="v-carousel-navigation">
    <ul class="flex py-4 gap-1">
      <li v-for="index in props.total">
        <a
          href="#"
          class="p-1"
          @click.prevent="$emit('update:slide', index - 1)"
        >
          <span
            class="size-2 rounded-full inline-block"
            :class="index == activeIndex ? 'bg-orange-400' : 'bg-white/30'"
          ></span>
        </a>
      </li>
    </ul>
  </div>
</template>
