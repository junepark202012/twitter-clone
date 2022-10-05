<script lang="ts" setup>
import type { Component } from 'vue'
import { IconLike, IconReply, IconRetweet, IconShare } from '#components'

const props = defineProps<{
  reply: number
  retweet: number
  like: number
}>()

interface footerBlock {
  order: number
  icon: Component
  count?: number
}

const footerBlocks: footerBlock[] = [
  { order: 1, icon: IconReply, count: props.reply },
  { order: 2, icon: IconRetweet, count: props.retweet },
  { order: 3, icon: IconLike, count: props.like },
  { order: 4, icon: IconShare },
]
</script>

<template>
  <div class="flex items-center justify-between gap-2 max-w-md mt-3">
    <PostFooterBlock v-for="block in footerBlocks" :key="block.order" :icon="block.icon" :count="block.count" />
  </div>
</template>

<style scoped>

</style>
