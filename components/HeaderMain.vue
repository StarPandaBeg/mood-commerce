<script lang="ts" setup>
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
</script>

<template>
  <header class="flex items-center justify-between gap-6">
    <VSideMenu
      title="Каталог"
      class="block md:hidden"
      menu-classes="min-w-[50%]"
    >
      <template #activator="{ open }">
        <VLink variant="background" round @click="open()">
          <Bars3Icon class="size-8 opacity-50" />
        </VLink>
      </template>
      <template #default>
        <VSideMenuItem>Новинки</VSideMenuItem>
        <VSideMenuItem>Бренды</VSideMenuItem>
        <VSideMenuItem>Мужское</VSideMenuItem>
        <VSideMenuItem>Женское</VSideMenuItem>
        <VSideMenuItem>Аксессуары</VSideMenuItem>
      </template>
    </VSideMenu>
    <div class="pl-16 md:order-none md:pl-0">
      <VLink to="/" variant="plain" title="Mood">
        <img src="~/assets/images/mood.png" class="size-8" />
      </VLink>
    </div>
    <div class="hidden grow items-center md:flex">
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
    <div class="">
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
