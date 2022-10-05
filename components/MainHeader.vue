<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex items-center h-14 text-xl font-bold">
    <h1>{{ title }}</h1>
  </div>
</template>

<style scoped>

</style>
