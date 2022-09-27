<script setup lang="ts">
import { pages } from './pages'

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
    w:position="!fixed"
    w:m="-t-16"
    w:p="t-16"
    w:h="!full"
  >
    <div w:m="t-2" w:flex="~" w:justify="center">
      <connect-wallet-button />
    </div>

    <v-list nav density="compact" color="primary">
      <v-list-item
        v-for="{ name, path } in pages"
        :key="name"
        :title="name"
        :to="path"
      />
    </v-list>
  </v-navigation-drawer>
</template>
