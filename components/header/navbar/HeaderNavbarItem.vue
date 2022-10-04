<script lang="ts" setup>
defineProps<{
  routerLink: string

}>()
</script>

<template>
  <div>
    <HeaderIcon router-link="/" class="hover:bg-logoBgLight dark:hover:bg-logoBgDark">
      <Icon name="bi:twitter" class="text-logoLight dark:text-logoDark dark:hover:bg-logoBgDark" />
    </HeaderIcon>
  </div>
</template>

<style scoped>

</style>
