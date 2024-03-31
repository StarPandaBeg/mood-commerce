<script lang="ts" setup>
import type { VCardTitleProps } from "~/types/vcard.types";

const props = withDefaults(defineProps<VCardTitleProps>(), {});
</script>

<template>
  <div class="v-card-title px-6 text-lg font-medium">
    <slot>
      {{ props.title }}
    </slot>
  </div>
</template>
