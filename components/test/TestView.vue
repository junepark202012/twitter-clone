<script setup lang="ts">
const greetings = ref('')
</script>

<template>
  <h1>Greetings</h1>
  <p class="text-3xl">
    {{ greetings }}
  </p>
  <input v-model="greetings" placeholder="Hello World" type="text">
</template>

<style scoped>

</style>
