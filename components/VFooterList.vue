<script lang="ts" setup>
import type { VFooterListProps } from "~/types/vfooterlist.types";

const props = withDefaults(defineProps<VFooterListProps>(), {
  title: "",
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1
      class="pb-1 w-full lg:w-auto decoration-gray-400 border-b-black/10 border-b-2 font-medium"
    >
      <slot name="header">{{ props.title }}</slot>
    </h1>
    <ul class="flex flex-col gap-1">
      <slot></slot>
    </ul>
  </div>
</template>
