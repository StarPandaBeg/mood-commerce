<script lang="ts" setup>
import type { VLinkProps } from "./VLink.vue";

export type VSideMenuItemProps = VLinkProps & {};

const props = withDefaults(defineProps<VSideMenuItemProps>(), {
  variant: "background",
});
</script>

<template>
  <li class="v-side-menu__item">
    <VLink class="w-full py-4 pl-8 pr-24" v-bind="props">
      <slot></slot>
    </VLink>
  </li>
</template>
