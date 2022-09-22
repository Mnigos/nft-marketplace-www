<template>
  <div class="bg-dark-800 min-h-screen">
    <v-app>
      <v-layout>
        <navigation-bar />

        <div class="flex justify-center w-full">
          <main
            class="w-full mt-[64px] sm:mt-[112px] py-4 <sm:px-4 sm:px-8 md:px-12 max-w-[1300px]"
          >
            <slot />
          </main>
        </div>
      </v-layout>
    </v-app>
  </div>
</template>
