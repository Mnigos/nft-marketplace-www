<script setup lang="ts">
defineProps<{
  name: string
  highestBid: number
  image: string
}>()
</script>

<template>
  <v-card class="rounded-lg !shadow-lg max-w-[350px]">
    <div class="p-4">
      <v-img :src="image" class="rounded-lg" />

      <v-card-title>{{ name }}</v-card-title>

      <v-card-subtitle>
        highest bid <span class="font-semibold">{{ highestBid }} ETH</span>
      </v-card-subtitle>

      <v-card-actions class="mt-4">
        <v-btn color="primary" variant="outlined">place a bid</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>
