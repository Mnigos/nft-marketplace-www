import { describe, vi, test, expect } from 'vitest'
import { generateTestingUtils } from 'eth-testing'

import { useWalletStore } from '.'

vi.mock('window')

describe('Store - wallet', () => {
  const ethersTestUtils = generateTestingUtils({ providerType: 'MetaMask' })
  const testAccount = '0xf61B443A155b07D2b2cAeA2d99715dC84E839EEf'
  const providerMock = {
    ...ethersTestUtils.getProvider(),
    request: vi.fn().mockImplementation(() => [testAccount]),
  }

  test('connect', async () => {
    window.ethereum = providerMock

    const walletStore = useWalletStore()

    await walletStore.connect()

    expect(walletStore.account).toEqual(testAccount)
  })
})
