<script setup lang="ts">
import { useWindowSize } from 'vue-window-size'

import { useNavigationStore } from '~/stores'

const { width } = useWindowSize()
const navigationStore = useNavigationStore()

const isMobile = computed(() => width.value <= 640)

function toggleDrawer() {
  if (!isMobile.value) return

  navigationStore.toggleDrawer()
}
</script>

<template>
  <div>
    <v-app-bar class="sm:px-4">
      <v-app-bar-nav-icon @click.stop="toggleDrawer" />

      <v-app-bar-title>NFT Marketplace</v-app-bar-title>

      <template v-if="!isMobile" #extension>
        <v-tabs color="primary">
          <v-tab>Home</v-tab>
          <v-tab>Auctions</v-tab>
        </v-tabs>
      </template>

      <connect-wallet-button class="!hidden !sm:block" />
    </v-app-bar>

    <navigation-drawer />
  </div>
</template>
