<script lang="ts" setup>
const opened = defineModel<boolean>();
</script>

<template>
  <Teleport to="body">
    <div
      v-show="opened"
      v-prevent-scroll="opened"
      v-bind="$attrs"
      class="v-overlay fixed left-0 top-0 z-10 h-full w-full bg-black/70"
    >
      <slot />
    </div>
  </Teleport>
</template>
