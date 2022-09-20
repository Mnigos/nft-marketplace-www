<template>
  <div class="bg-dark-800 h-screen">
    <v-app>
      <v-layout>
        <navigation-bar />

        <main class="w-full mt-[64px] sm:mt-[112px] py-4 px-4">
          <slot />
        </main>
      </v-layout>
    </v-app>
  </div>
</template>
