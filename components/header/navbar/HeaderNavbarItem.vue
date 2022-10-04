<script lang="ts" setup>
defineProps<{
  routerLink: string
  name: string
}>()
</script>

<template>
  <div>
    <HeaderButton :router-link="routerLink" class="hover:bg-logoBgLight dark:hover:bg-logoBgDark">
      <Icon name="bi:twitter" class="text-logoLight dark:text-logoDark dark:hover:bg-logoBgDark" />
      <div v-if="name" class="mr-4 ml-4">
        {{ name }}
      </div>
    </HeaderButton>
  </div>
</template>

<style scoped>

</style>
