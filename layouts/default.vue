<template>
  <div w:bg="dark-800" w:min-h="screen">
    <v-app>
      <v-layout>
        <navigation-bar />

        <div w:w="full" w:flex="~" w:justify="center">
          <main
            w:w="full"
            w:max-w="[1300px]"
            w:m="t-[64px] sm:t-[112px]"
            w:p="y-4 <sm:x-4 sm:x-8 md:x-12"
          >
            <slot />
          </main>
        </div>
      </v-layout>
    </v-app>
  </div>
</template>
