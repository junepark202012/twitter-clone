<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div class="dark">
    <h1 class="text-dim-500">
      Tiwtter Clone
    </h1>
    <div class="">
      pos: {{ x }} {{ y }}
    </div>
  </div>
</template>

<style scoped>

</style>
