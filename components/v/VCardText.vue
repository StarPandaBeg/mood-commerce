<script lang="ts" setup>
export type VCardTextProps = {
  noXPadding?: boolean;
};

const props = withDefaults(defineProps<VCardTextProps>(), {
  noXPadding: false,
});
const classes = computed(() => {
  const padding = props.noXPadding ? "py-4" : "p-4";
  return [padding];
});
</script>

<template>
  <div class="v-card-text py-4 text-gray-700" :class="classes">
    <slot />
  </div>
</template>
