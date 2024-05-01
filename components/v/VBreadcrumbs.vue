<template>
  <div class="v-breadcrumbs flex">
    <slot />
  </div>
</template>

<style lang="scss">
.v-breadcrumbs > * {
  font-size: smaller;

  &:last-child {
    opacity: 1;
    pointer-events: none;
  }

  &:not(:last-child)::after {
    content: "/";
    padding: 0 10px;
  }
}
</style>
