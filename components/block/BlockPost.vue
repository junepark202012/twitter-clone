<script lang="ts" setup>
</script>

<template>
  <article
    class="
    grid grid-cols-[auto_1fr] grid-rows-[repeat(2, auto)]
    cursor-pointer
    hover:bg-hover-light
    dark:hover:bg-transparent
    px-4 py-3
    bor
    "
  >
    <div class="mr-3 flex-shrink-0 min-w-max row-span-2">
      <AvatarRound12 img-src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
    </div>
    <div>
      <h4 class=" font-bold">
        Lorem ipsum
      </h4>
      <p class="mt-1">
        Repudiandae sint consequuntur vel. Amet ut nobis explicabo numquam expedita quia omnis voluptatem. Minus quidem ipsam quia iusto.
      </p>
    </div>
    <PostFooter :reply="200" :retweet="0" :like="1414123" />
  </article>
</template>

<style scoped>

</style>
