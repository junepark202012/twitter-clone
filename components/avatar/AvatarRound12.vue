<script lang="ts" setup>
defineProps<{
  imgSrc: string
}>()
</script>

<template>
  <span class="">
    <img
      class="rounded-full w-12 h-12"
      :src="imgSrc"
      alt="profile picture"
    >
  </span>
</template>

<style scoped>

</style>
