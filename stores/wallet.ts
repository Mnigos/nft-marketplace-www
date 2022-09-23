import { providers } from 'ethers'
import { defineStore } from 'pinia'

export interface WalletState {
  isConnected: boolean
  account?: string
  provider?: providers.ExternalProvider
}

export const useWalletStore = defineStore('wallet', {
  state: (): WalletState => ({
    isConnected: false,
    account: undefined,
    provider: undefined,
  }),
  actions: {
    async connect() {
      if (!window.ethereum) return

      this.provider = new providers.Web3Provider(window.ethereum).provider

      const [currentAccount] = await this.provider.request({
        method: 'eth_requestAccounts',
      })

      this.account = currentAccount
      this.isConnected = true
    },
  },
})
