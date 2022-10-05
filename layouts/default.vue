<script setup lang="ts">

</script>

<template>
  <div id="default-layout" class="grid grid-cols-[auto_1fr] grid-rows-[theme(spacing.14)_auto]">
    <TheHeader class="row-span-2" />
    <main class="row-span-2">
      <slot />
    </main>
  </div>
</template>

<style scoped>
</style>
