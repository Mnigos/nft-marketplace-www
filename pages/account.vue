<script setup lang="ts">
import { useWalletStore } from '~/stores'

definePageMeta({
  middleware: 'auth',
})

const walletStore = useWalletStore()
</script>

<template>
  <div w:flex="~ col gap-8">
    <header>
      <v-alert type="info">
        Account: <span w:font="semibold">{{ walletStore.account }}</span>
      </v-alert>
    </header>

    <v-card w:rounded="lg" w:shadow="!lg" w:max-w="[350px]">
      <div w:p="4">
        <v-card-title>Your NFTs</v-card-title>

        <div>
          <p>Oops... looks like you don't have any NFTs</p>
        </div>
      </div>
    </v-card>

    <v-card w:rounded="lg" w:shadow="!lg" w:max-w="[350px]" variant="outlined">
      <div w:p="4">
        <v-card-title>Mint your free NFT</v-card-title>

        <v-card-actions>
          <v-btn color="primary" variant="elevated">mint</v-btn>
        </v-card-actions>
      </div>
    </v-card>
  </div>
</template>
