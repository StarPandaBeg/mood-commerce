<script lang="ts" setup>
import type { VLinkProps } from "~/types/vlink.types";

const classes = {
  default: "opacity-50 hover:opacity-100 active:opacity-75",
  plain: "",
  background: "hover:bg-black/5 active:bg-black/10",
};

const props = withDefaults(defineProps<VLinkProps>(), {
  to: "#",
  external: false,
  newtab: false,
  variant: "default",
});

const target = computed(() => (props.newtab ? "_blank" : ""));
const variantClass = computed(() => classes[props.variant]);
</script>

<template>
  <a
    v-if="external || newtab"
    :href="props.to"
    :target="target"
    :class="variantClass"
  >
    <slot />
  </a>
  <NuxtLink v-else :to="props.to" :class="variantClass">
    <slot />
  </NuxtLink>
</template>
