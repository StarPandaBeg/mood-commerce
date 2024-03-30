<script lang="ts" setup>
import type { VFooterListProps } from "~/types/vfooterlist.types";

const props = withDefaults(defineProps<VFooterListProps>(), {
  title: "",
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1
      class="w-full border-b-2 border-b-black/10 pb-1 font-medium decoration-gray-400 lg:w-auto"
    >
      <slot name="header">{{ props.title }}</slot>
    </h1>
    <ul class="flex flex-col gap-1">
      <slot></slot>
    </ul>
  </div>
</template>
