<script setup lang="ts">
defineProps<{
  name: string
  highestBid: number
  image: string
}>()
</script>

<template>
  <v-card w:rounded="lg" w:shadow="!lg" w:max-w="[350px]">
    <div w:p="4">
      <v-img :src="image" w:rounded="lg" />

      <v-card-title>{{ name }}</v-card-title>

      <v-card-subtitle>
        highest bid <span w:font="semibold">{{ highestBid }} ETH</span>
      </v-card-subtitle>

      <v-card-actions w:m="t-4">
        <v-btn color="primary" variant="outlined">place a bid</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>
