<script setup lang="ts">
import { useWalletStore } from '~/stores'
import { addressFormatter } from '~/utils'

const walletStore = useWalletStore()
</script>

<template>
  <v-btn
    rounded="lg"
    color="primary"
    variant="elevated"
    @click="walletStore.connect"
  >
    <span v-if="walletStore.isConnected">
      {{ addressFormatter(walletStore.account) }}
    </span>

    <span v-else>Connect Wallet</span>
  </v-btn>
</template>
