import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', {
  state: () => ({
    isDrawerOpen: false,
    isDialogOpen: false,
  }),
  actions: {
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen
    },
    toggleDialog() {
      this.isDialogOpen = !this.isDialogOpen
    },
  },
})
