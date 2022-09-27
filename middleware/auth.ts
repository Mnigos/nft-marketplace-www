import { useWalletStore } from '~/stores'

export default defineNuxtRouteMiddleware((to, from) => {
  const walletStore = useWalletStore()

  const pathToRedirect = to.path === from.path ? '/' : from.path ?? '/'

  if (!walletStore.isConnected) return navigateTo(pathToRedirect)
})
