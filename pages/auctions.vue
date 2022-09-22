<script setup lang="ts">
const generateExampleAuction = (index = 1) => ({
  name: `MNG NFT #${index}`,
  highestBid: ~~(Math.random() * 30) / 10,
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWRXYkyg-ndx0tvGNUHSqwtF_Ocu40jhpGozodZPU2DPIkc9F9zyYBmKuKnIuCHHIn4I&usqp=CAU',
})

const auctions = Array.from({ length: 20 }).map((_value, index: number) =>
  generateExampleAuction(index + 1)
)
</script>

<template>
  <div w:flex="~ col gap-8">
    <header>
      <h1 w:font="bold" w:text="4xl <sm:center md:left">Auctions</h1>
    </header>

    <section w:grid="~ cols-1 sm:cols-2 md:cols-3 lg:cols-4 xl:cols-5 gap-8">
      <div
        v-for="{ name, highestBid, image } in auctions"
        :key="name"
        w:flex="~"
        w:justify="center"
      >
        <auction-card :name="name" :highest-bid="highestBid" :image="image" />
      </div>
    </section>
  </div>
</template>
