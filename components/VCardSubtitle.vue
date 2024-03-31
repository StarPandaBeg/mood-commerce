<script lang="ts" setup>
import type { VCardSubtitleProps } from "~/types/vcard.types";

const props = withDefaults(defineProps<VCardSubtitleProps>(), {});
</script>

<template>
  <div class="v-card-title px-6 text-gray-500">
    <slot>
      {{ props.subtitle }}
    </slot>
  </div>
</template>
