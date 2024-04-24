<script lang="ts" setup>
export type VCardTitleProps = {
  title?: string;
};

const props = withDefaults(defineProps<VCardTitleProps>(), {
  title: "",
});
</script>

<template>
  <div class="v-card-title px-6 text-lg font-medium">
    <slot>
      {{ props.title }}
    </slot>
  </div>
</template>
