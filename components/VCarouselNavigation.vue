<script lang="ts" setup>
import type { VCarouselNav } from "~/types/vcarousel.types";

const nav = inject<VCarouselNav>("nav", {
  active: ref(0),
  total: ref(0),
  prev: () => {},
  next: () => {},
  set: (index: number) => {},
});

const activeIndex = computed(() => nav.active.value + 1);
</script>

<template>
  <div class="v-carousel-navigation">
    <ul class="flex py-4 gap-1">
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
