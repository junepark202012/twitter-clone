<script lang="ts" setup>
import { Icon } from '#components'
</script>

<template>
  <nav id="header-navbar" class="flex flex-1 flex-col overflow-y-auto w-64 mx-3">
    <IconButton router-link="/" class="hover:bg-lightLogoBg dark:hover:bg-darkLogoBg">
      <Icon name="bi:twitter" class="text-lightLogo dark:text-darkLogo dark:hover:bg-darkLogoBg" />
    </IconButton>
    <IconButton text="Home" router-link="/" class="hover:bg-darkLogoBg">
      <Icon name="bi:house" class="text-lightLogo dark:text-darkLogo" />
    </IconButton>
    <IconButton text="Explore" router-link="/explore" class="hover:bg-darkLogoBg">
      <Icon name="bi:hash" class="text-lightLogo dark:text-darkLogo" />
    </IconButton>
    <IconButton text="Notifications" router-link="/notifications" class="hover:bg-darkLogoBg">
      <Icon name="bi:hash" class="text-lightLogo dark:text-darkLogo" />
    </IconButton>
    <IconButton text="Messages" router-link="/messages" class="hover:bg-darkLogoBg">
      <Icon name="bi:twitter" class="text-lightLogo dark:text-darkLogo" />
    </IconButton>
    <IconButton text="Bookmarks" router-link="/bookmarks" class="hover:bg-darkLogoBg">
      <Icon name="bi:twitter" class="text-lightLogo dark:text-darkLogo" />
    </IconButton>
    <IconButton text="Lists" router-link="/lists" class="hover:bg-darkLogoBg">
      <Icon name="bi:twitter" class="text-lightLogo dark:text-darkLogo" />
    </IconButton>
    <IconButton text="Profile" router-link="/profile" class="hover:bg-darkLogoBg">
      <Icon name="bi:twitter" class="text-lightLogo dark:text-darkLogo" />
    </IconButton>
    <IconButton text="More" router-link="/more" class="hover:bg-darkLogoBg">
      <Icon name="bi:twitter" class="text-lightLogo dark:text-darkLogo" />
    </IconButton>
  </nav>
</template>

<style scoped>

</style>
