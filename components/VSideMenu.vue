<script lang="ts" setup>
import type { VSideMenuProps } from "~/types/vsidemenu.types";

defineOptions({
  inheritAttrs: false,
});
const opened = defineModel<boolean>();
const overlayOpened = ref(false);

const props = withDefaults(defineProps<VSideMenuProps>(), {
  title: null,
});

const open = () => (opened.value = true);
const close = () => (opened.value = false);
const onCloseAnimationEnd = () => (overlayOpened.value = false);

watch(opened, async (value, oldValue) => {
  if (value == oldValue) return;
  if (value) {
    overlayOpened.value = true;
  }
});
</script>

<template>
  <div class="v-side-menu-container" v-bind="$attrs">
    <slot name="activator" :open="open" />

    <VOverlay v-model="overlayOpened" @click.native="close">
      <Transition name="slide" @after-leave="onCloseAnimationEnd">
        <div
          v-if="opened"
          class="v-side-menu py-4 flex flex-col absolute left-0 top-0 h-full bg-slate-50"
          :class="props.menuClasses"
          @click.stop
        >
          <slot name="prepend">
            <h1
              v-if="props.title"
              class="v-side-menu__title text-center opacity-50"
            >
              {{ props.title }}
            </h1>
          </slot>
          <ul class="v-side-menu__items py-4">
            <slot />
          </ul>
          <slot name="append" />
          <div class="v-side-menu__footer mt-auto">
            <slot name="footer" />
          </div>
        </div>
      </Transition>
    </VOverlay>
  </div>
</template>
