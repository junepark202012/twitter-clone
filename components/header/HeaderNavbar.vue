<script lang="ts" setup>

</script>

<template>
  <nav id="header-navbar" class="flex flex-1 flex-col overflow-y-auto w-64 mx-3">
    <HeaderNavbarLogo />
    <HeaderIcon text="Home" router-link="/" class="hover:bg-logoBgDark">
      <Icon name="bi:house" class="text-logoLight dark:text-logoDark" />
    </HeaderIcon>
    <HeaderIcon text="Explore" router-link="/explore" class="hover:bg-logoBgDark">
      <Icon name="bi:hash" class="text-logoLight dark:text-logoDark" />
    </HeaderIcon>
    <HeaderIcon text="Notifications" router-link="/notifications" class="hover:bg-logoBgDark">
      <Icon name="bi:hash" class="text-logoLight dark:text-logoDark" />
    </HeaderIcon>
    <HeaderIcon text="Messages" router-link="/messages" class="hover:bg-logoBgDark">
      <Icon name="bi:twitter" class="text-logoLight dark:text-logoDark" />
    </HeaderIcon>
    <HeaderIcon text="Bookmarks" router-link="/bookmarks" class="hover:bg-logoBgDark">
      <Icon name="bi:twitter" class="text-logoLight dark:text-logoDark" />
    </HeaderIcon>
    <HeaderIcon text="Lists" router-link="/lists" class="hover:bg-logoBgDark">
      <Icon name="bi:twitter" class="text-logoLight dark:text-logoDark" />
    </HeaderIcon>
    <HeaderIcon text="Profile" router-link="/profile" class="hover:bg-logoBgDark">
      <Icon name="bi:twitter" class="text-logoLight dark:text-logoDark" />
    </HeaderIcon>
    <HeaderIcon text="More" router-link="/more" class="hover:bg-logoBgDark">
      <Icon name="bi:twitter" class="text-logoLight dark:text-logoDark" />
    </HeaderIcon>
  </nav>
</template>

<style scoped>

</style>
