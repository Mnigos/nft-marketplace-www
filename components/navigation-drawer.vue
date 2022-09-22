<script setup lang="ts">
import { useNavigationStore } from '~/stores'

const navigationStore = useNavigationStore()
</script>

<template>
  <v-navigation-drawer
    v-model="navigationStore.isDrawerOpen"
    app
    clipped
    disable-resize-watcher
    disable-route-watcher
    width="300"
  >
    <div w:m="t-2" w:flex="~" w:justify="center">
      <connect-wallet-button />
    </div>

    <v-list nav density="compact" color="primary">
      <v-list-item title="Home" value="home" />

      <v-list-item title="Auctions" value="auctions" />
    </v-list>
  </v-navigation-drawer>
</template>
