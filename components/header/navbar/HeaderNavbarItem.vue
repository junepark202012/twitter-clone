<script lang="ts" setup>
import type { Component } from '@vue/runtime-core'

defineProps<{
  routerLink: string
  name: string
  icon: Component
}>()
</script>

<template>
  <div>
    <NuxtLink
      :to="routerLink"
      class="
      rounded-full
      flex items-center
      cursor-pointer
      w-max p-3
      text-xl
      hover:bg-[#eaeaeb] dark:hover:bg-[#181818] transition-colors
      "
    >
      <Component :is="icon" class="w-7 h-7 fill-typo-primary-light dark:fill-typo-primary-dark" />
      <div class="mr-4 ml-4">
        {{ name }}
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>
