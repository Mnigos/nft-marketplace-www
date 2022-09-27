<script setup lang="ts">
import { useWindowSize } from 'vue-window-size'

import { pages } from './pages'

import { useNavigationStore } from '~/stores'
import { useIsCollapsed } from '~/composables'

const { width } = useWindowSize()
const { isCollapsed, toggleCollapsed } = useIsCollapsed()
const navigationStore = useNavigationStore()

const isMobile = computed(() => width.value <= 640)

function toggleDrawer() {
  if (!isMobile.value) return

  navigationStore.toggleDrawer()
}
</script>

<template>
  <div w:h="full">
    <v-app-bar w:p="sm:x-4" w:position="!fixed" :collapse="isCollapsed">
      <v-app-bar-nav-icon v-if="isMobile" @click.stop="toggleDrawer" />
      <v-app-bar-nav-icon
        v-if="!isMobile && isCollapsed"
        icon="mdi-arrow-right-thick"
        @click="toggleCollapsed"
      />

      <v-app-bar-title>NFT Marketplace</v-app-bar-title>

      <template v-if="!isMobile && !isCollapsed" #extension>
        <v-tabs>
          <v-tab v-for="{ name, path } in pages" :key="name" :to="path" exact>
            {{ name }}
          </v-tab>
        </v-tabs>
      </template>

      <connect-wallet-button
        v-if="!isCollapsed"
        w:display="!hidden !sm:block"
      />
    </v-app-bar>

    <navigation-drawer />
  </div>
</template>
