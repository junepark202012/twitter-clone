<script lang="ts" setup>
import type { Component } from '@vue/runtime-core'
import { IconExplore, IconHome, IconMessages, IconMore, IconNotification, IconProfile } from '#components'

interface headerNavbarItem {
  routerLink: string
  name: string
  icon: Component
}

const headerNavbarItems: headerNavbarItem[] = [
  { routerLink: '/', name: 'Home', icon: IconHome },
  { routerLink: '/explore', name: 'Explore', icon: IconExplore },
  { routerLink: '/notifications', name: 'Notification', icon: IconNotification },
  { routerLink: '/messages', name: 'Messages', icon: IconMessages },
  { routerLink: '/profile', name: 'Profile', icon: IconProfile },
  { routerLink: '/more', name: 'More', icon: IconMore },
]
</script>

<template>
  <nav id="header-navbar" class="flex flex-col w-auto lg:w-64 p-1 xs:px-3 transition-spacing">
    <HeaderNavbarLogo />
    <HeaderNavbarItem
      v-for="item in headerNavbarItems" :key="item.name"
      :router-link="item.routerLink"
      :name="item.name"
      :icon="item.icon"
    />
    <ButtonTweet />
  </nav>
</template>

<style scoped>

</style>
