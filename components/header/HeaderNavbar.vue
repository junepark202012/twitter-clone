<script lang="ts" setup>
import { CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, UsersIcon } from '@heroicons/vue/24/outline'

const navigation = [
  { name: 'Dashboard', icon: HomeIcon, href: '#', current: true },
  { name: 'Team', icon: UsersIcon, href: '#', count: 3, current: false },
  { name: 'Projects', icon: FolderIcon, href: '#', count: 4, current: false },
  { name: 'Calendar', icon: CalendarIcon, href: '#', current: false },
  { name: 'Documents', icon: InboxIcon, href: '#', count: 12, current: false },
  { name: 'Reports', icon: ChartBarIcon, href: '#', current: false },
]
</script>

<template>
  <div>
    <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
      <div class="">
        <Icon name="bi:twitter" class="text-lightLogo dark:text-darkLogo" />
      </div>
      <nav class="mt-5 flex-1 space-y-1 bg-white px-2" aria-label="Sidebar">
        <a v-for="item in navigation" :key="item.name" :href="item.href" class="group flex items-center px-2 py-2 text-sm font-medium rounded-md" :class="[item.current ? 'bg-gray-100 text-gray-900 hover:text-gray-900 hover:bg-gray-100' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50']">
          <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" :class="[item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500']" aria-hidden="true" />
          <span class="flex-1">{{ item.name }}</span>
          <span v-if="item.count" class="ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full" :class="[item.current ? 'bg-white' : 'bg-gray-100 group-hover:bg-gray-200']">{{ item.count }}</span>
        </a>
      </nav>
    </div>
  </div>
</template>

<style scoped>

</style>
