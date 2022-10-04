<script setup lang="ts">
import TheHeader from '~/components/TheHeader.vue'
</script>

<template>
  <div id="default-layout" class="grid grid-cols-12">
    <TheHeader />
    <slot />
  </div>
</template>

<style scoped>

</style>
