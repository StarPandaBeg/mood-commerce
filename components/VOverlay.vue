<script lang="ts" setup>
const opened = defineModel<boolean>();
</script>

<template>
  <Teleport to="body">
    <div
      v-show="opened"
      v-bind="$attrs"
      v-prevent-scroll="opened"
      class="v-overlay w-full h-full fixed left-0 top-0 bg-black/70 z-10"
    >
      <slot />
    </div>
  </Teleport>
</template>
