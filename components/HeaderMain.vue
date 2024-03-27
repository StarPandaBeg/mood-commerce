<script lang="ts" setup>
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <header class="flex justify-between items-center gap-6">
    <div>
      <VLink to="/" variant="plain" title="Mood">
        <img src="~/assets/images/mood.png" class="size-8" />
      </VLink>
    </div>
    <div class="grow flex items-center">
      <nav>
        <ul class="flex font-medium">
          <li>
            <VLink variant="background" class="px-3 py-4">Новинки</VLink>
          </li>
          <li>
            <VLink variant="background" class="px-3 py-4">Бренды</VLink>
          </li>
          <li>
            <VLink variant="background" class="px-3 py-4">Мужское</VLink>
          </li>
          <li>
            <VLink variant="background" class="px-3 py-4">Женское</VLink>
          </li>
          <li>
            <VLink variant="background" class="px-3 py-4">Аксессуары</VLink>
          </li>
        </ul>
      </nav>
    </div>
    <div>
      <ul class="flex gap-6">
        <li>
          <VLink>
            <MagnifyingGlassIcon class="size-6" />
          </VLink>
        </li>
        <li>
          <VLink>
            <HeartIcon class="size-6" />
          </VLink>
        </li>
        <li>
          <VLink>
            <ShoppingBagIcon class="size-6" />
          </VLink>
        </li>
      </ul>
    </div>
  </header>
</template>
