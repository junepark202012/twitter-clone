<script setup lang="ts">
import { storeToRefs } from 'pinia'

const greetings = ref('')
const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }
  return { count, increment }
})

const counterStore = useCounterStore()
const { count } = storeToRefs(counterStore)
const { increment } = counterStore
</script>

<template>
  <div class="">
    <h1 class="text-3xl">
      Greetings
    </h1>
    <p class="text-3xl">
      {{ greetings }}
    </p>
    <input v-model="greetings" placeholder="Hello World" type="text" class="bg-slate-200">
    <p>
      The count is: {{ count }}
    </p>
    <button @click="increment()">
      Increment
    </button>
  </div>
</template>

<style scoped>

</style>
