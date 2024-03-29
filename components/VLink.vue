<script lang="ts" setup>
import type { VLinkProps } from "~/types/vlink.types";

const classes = {
  default: "opacity-50 hover:opacity-100 active:opacity-75",
  plain: "",
  background: "hover:bg-black/5 active:bg-black/10",
};

const props = withDefaults(defineProps<VLinkProps>(), {
  newTab: false,
  variant: "default",
  round: false,
});

const target = computed(() => (props.newTab ? "_blank" : ""));
const variantClass = computed(() => classes[props.variant]);
</script>

<template>
  <NuxtLink
    :to="props.to"
    :target="target"
    :class="[variantClass, { 'rounded-full': props.round }]"
    class="inline-flex cursor-pointer"
  >
    <slot />
  </NuxtLink>
</template>
