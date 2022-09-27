import { render, screen } from '@testing-library/vue'
import { describe, vi, test, expect } from 'vitest'

import ConnectWalletButton from './connect-wallet-button.vue'

vi.mock('window')

describe('ConnectWalletButton', () => {
  test('Should open dialog because of no metamask', async () => {
    render(ConnectWalletButton)

    const button = screen.getByText('Connect Wallet')

    await button.click()

    const dialog = screen.getByText(
      "Oops. Looks like you don't have installed metamask extension"
    )

    expect(dialog).toBeInTheDocument()
  })
})
