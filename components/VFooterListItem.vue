<script lang="ts" setup>
import type { VFooterListItemProps } from "~/types/vfooterlist.types";

const props = withDefaults(defineProps<VFooterListItemProps>(), {});
</script>

<template>
  <li class="text-sm">
    <VLink v-bind="props">
      <slot />
    </VLink>
  </li>
</template>
