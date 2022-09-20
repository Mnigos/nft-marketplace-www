import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// eslint-disable-next-line import/no-unresolved
import { defineNuxtPlugin } from '#app'

const defaultTheme: ThemeDefinition = {
  dark: true,
  colors: {
    background: '#202020',
    'background-darker': '#1a1a1a',
    primary: '#9400d5',
    secondary: '#1e89ee',
  },
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'defaultTheme',
      themes: {
        defaultTheme,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
