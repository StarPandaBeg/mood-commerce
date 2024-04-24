<script lang="ts" setup>
export type VCardSubtitleProps = {
  subtitle?: string;
};

const props = withDefaults(defineProps<VCardSubtitleProps>(), {
  subtitle: "",
});
</script>

<template>
  <div class="v-card-title px-6 text-gray-500">
    <slot>
      {{ props.subtitle }}
    </slot>
  </div>
</template>
