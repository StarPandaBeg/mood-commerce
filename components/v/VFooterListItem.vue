<script lang="ts" setup>
import type { VLinkProps } from "./VLink.vue";

export type VFooterListItemProps = VLinkProps & {};

const props = withDefaults(defineProps<VFooterListItemProps>(), {});
</script>

<template>
  <li class="text-sm">
    <VLink v-bind="props">
      <slot />
    </VLink>
  </li>
</template>
