<script lang="ts" setup>
import type { BannerCardProps } from "~/types/bannercard.types";

const props = withDefaults(defineProps<BannerCardProps>(), {});
</script>

<template>
  <VLink v-bind="props" variant="plain" class="!block">
    <div class="banner-card relative">
      <slot name="content" v-bind="props">
        <div class="banner-card__content absolute right-8 top-8 text-right">
          <BannerCardTitle>{{ props.title }}</BannerCardTitle>
          <BannerCardSubtitle v-if="props.subtitle">
            {{ props.subtitle }}
          </BannerCardSubtitle>
          <slot />
        </div>
      </slot>

      <img :src="props.imagePath" class="banner-card__image w-full" />
    </div>
  </VLink>
</template>
