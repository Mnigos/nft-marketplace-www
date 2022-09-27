<script setup lang="ts">
import { useWalletStore } from '~/stores'
import { addressFormatter } from '~/utils'

const walletStore = useWalletStore()

const isDialogOpen = ref(false)

function connectWallet() {
  if (!window.ethereum) return (isDialogOpen.value = true)

  walletStore.connect()
}
</script>

<template>
  <v-btn rounded="lg" color="primary" variant="elevated" @click="connectWallet">
    <span v-if="walletStore.isConnected">
      {{ addressFormatter(walletStore.account) }}
    </span>

    <span v-else>Connect Wallet</span>

    <v-dialog v-model="isDialogOpen">
      <v-alert type="error" variant="flat">
        <div w:flex="~ gap-4" w:items="center">
          <p>Oops. Looks like you don't have installed metamask extension</p>

          <v-btn color="white" variant="outlined" @click="isDialogOpen = false">
            Close
          </v-btn>
        </div>
      </v-alert>
    </v-dialog>
  </v-btn>
</template>

<style>
.v-overlay__content {
  width: auto !important;
}
</style>
