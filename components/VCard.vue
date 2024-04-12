<script lang="ts" setup>
import type { VCardProps } from "~/types/vcard.types";

const classes = {
  default: "bg-white shadow",
  plain: "",
  background: "hover:bg-black/5 active:bg-black/10",
};

const props = withDefaults(defineProps<VCardProps>(), {
  variant: "default",
});

const variantClass = computed(() => classes[props.variant]);
</script>

<template>
  <div class="v-card flex flex-col gap-2" :class="[variantClass]">
    <VCardItem v-if="props.title || props.subtitle">
      <slot name="title">
        <VCardTitle v-if="props.title">
          {{ props.title }}
        </VCardTitle>
      </slot>
      <slot name="subtitle">
        <VCardSubtitle v-if="props.subtitle">
          {{ props.subtitle }}
        </VCardSubtitle>
      </slot>
    </VCardItem>
    <slot />
  </div>
</template>
