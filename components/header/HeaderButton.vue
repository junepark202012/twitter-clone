<script lang="ts" setup>
defineProps<{
  routerLink: string
}>()
</script>

<template>
  <NuxtLink :to="routerLink" class="w-12 h-12 rounded-full flex justify-center items-center cursor-pointer lg:w-auto lg:max-w-min p-3 text-xl">
    <slot />
  </NuxtLink>
</template>

<style scoped>

</style>
