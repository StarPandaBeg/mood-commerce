<script lang="ts" setup>
import type { VFooterListProps } from "~/types/vfooterlist.types";

const props = withDefaults(defineProps<VFooterListProps>(), {
  title: "",
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1 class="decoration-gray-400 underline underline-offset-8 font-medium">
      <slot name="header">{{ props.title }}</slot>
    </h1>
    <ul class="flex flex-col gap-1">
      <slot></slot>
    </ul>
  </div>
</template>
