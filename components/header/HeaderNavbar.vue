<script lang="ts" setup>
import { IconHome } from '#components'
</script>

<template>
  <nav id="header-navbar" class="flex flex-1 flex-col w-64 mx-3">
    <HeaderNavbarLogo />
    <HeaderNavbarItem router-link="/" name="Home" :icon="IconHome" />
  </nav>
</template>

<style scoped>

</style>
