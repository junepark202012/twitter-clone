<script lang="ts" setup>
defineProps<{
  routerLink: string
}>()
</script>

<template>
  <NuxtLink
    :to="routerLink"
    class="
     w-max rounded-full
     flex items-center
     cursor-pointer
     p-3
     text-xl
     transition-colors
    "
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>

</style>
