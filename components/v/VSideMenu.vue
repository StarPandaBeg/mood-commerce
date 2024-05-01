<script lang="ts" setup>
export type VSideMenuProps = {
  title?: string | null;
  menuClasses?: string;
};

defineOptions({
  inheritAttrs: false,
});
const opened = defineModel<boolean>();
const overlayOpened = ref(false);

const props = withDefaults(defineProps<VSideMenuProps>(), {
  title: null,
  menuClasses: undefined,
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

    <VOverlay v-model="overlayOpened" @click="close">
      <Transition name="slide" @after-leave="onCloseAnimationEnd">
        <div
          v-if="opened"
          class="v-side-menu absolute left-0 top-0 flex h-full flex-col bg-slate-50 py-4"
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
          <ul class="v-side-menu__items overflow-auto py-4">
            <slot :close="close" />
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
