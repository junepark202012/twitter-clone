<script setup lang="ts">
const { x, y } = useMouse()
const isDark = useDark()

watch(isDark, () => {
  console.log(isDark.value)
})
</script>

<template>
  <div class="">
    <h1 class="text-3xl text-primary">
      Tiwtter Clone
    </h1>
    <div class="text-secondary">
      pos: {{ x }} {{ y }}
    </div>
  </div>
</template>

<style scoped>

</style>
