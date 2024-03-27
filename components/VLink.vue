<script lang="ts" setup>
import type { VLinkProps } from "~/types/vlink.types";

const props = withDefaults(defineProps<VLinkProps>(), {
  to: "#",
  external: false,
  newtab: false,
});
const target = computed(() => (props.newtab ? "_blank" : ""));
</script>

<template>
  <a
    v-if="external || newtab"
    :href="props.to"
    :target="target"
    class="opacity-50 hover:opacity-100"
  >
    <slot />
  </a>
  <NuxtLink v-else :to="props.to" class="opacity-50 hover:opacity-100">
    <slot />
  </NuxtLink>
</template>
