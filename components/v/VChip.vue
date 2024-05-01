<script lang="ts" setup>
export type VChipProps = {
  color?: string;
};

const props = withDefaults(defineProps<VChipProps>(), {
  color: "bg-neutral-200",
});
</script>

<template>
  <div class="v-chip w-min rounded px-2 font-light" :class="props.color">
    <slot />
  </div>
</template>
