<script setup lang="ts">
import { useNavigationStore, useWalletStore } from '~/stores'
import { addressFormatter } from '~/utils'

const walletStore = useWalletStore()
const navigationStore = useNavigationStore()

function connectWallet() {
  if (!window.ethereum) return navigationStore.toggleDialog()

  walletStore.connect()
}
</script>

<template>
  <v-btn rounded="lg" color="primary" variant="elevated" @click="connectWallet">
    <span v-if="walletStore.isConnected">
      {{ addressFormatter(walletStore.account) }}
    </span>

    <span v-else> Connect Wallet </span>
  </v-btn>
</template>
