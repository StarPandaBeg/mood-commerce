<template>
  <div class="v-card-item flex flex-col px-4 py-2">
    <slot />
  </div>
</template>

<style lang="scss">
.v-card-item .v-card-title {
  padding: 0;
}
.v-card-item .v-card-subtitle {
  padding: 0;
}
.v-card-item + .v-card-text {
  padding-top: 0;
}
</style>
