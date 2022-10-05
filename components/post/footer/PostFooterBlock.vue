<script lang="ts" setup>
import type { Component } from 'vue'

interface Props {
  icon: Component
  count?: number
}

const props = withDefaults(defineProps<Props>(), { count: 0 })
const localizeOptions: Intl.NumberFormatOptions = { notation: 'compact' }
const localizedCount = Intl.NumberFormat('en-Us', localizeOptions).format(props.count)
</script>

<template>
  <div class="flex items-center">
    <Component :is="icon" class="w-5 h-5" />
    <span v-if="count" class="px-3 text-xs">{{ count > 0 ? localizedCount : '' }}</span>
  </div>
</template>

<style scoped>

</style>
