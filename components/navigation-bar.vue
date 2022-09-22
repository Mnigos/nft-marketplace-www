<script setup lang="ts">
import { useWindowSize } from 'vue-window-size'

import { useNavigationStore } from '~/stores'

const { width } = useWindowSize()
const navigationStore = useNavigationStore()

const pages = ref([
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'auctions',
    path: '/auctions',
  },
])

const isMobile = computed(() => width.value <= 640)

function toggleDrawer() {
  if (!isMobile.value) return

  navigationStore.toggleDrawer()
}
</script>

<template>
  <div w:h="full">
    <v-app-bar w:p="sm:x-4">
      <v-app-bar-nav-icon @click.stop="toggleDrawer" />

      <v-app-bar-title>NFT Marketplace</v-app-bar-title>

      <template v-if="!isMobile" #extension>
        <v-tabs>
          <v-tab v-for="{ name, path } in pages" :key="name" :to="path" exact>
            {{ name }}
          </v-tab>
        </v-tabs>
      </template>

      <connect-wallet-button w:display="!hidden !sm:block" />
    </v-app-bar>

    <navigation-drawer />
  </div>
</template>
