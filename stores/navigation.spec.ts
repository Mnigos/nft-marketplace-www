import { describe, expect, test } from 'vitest'

import { useNavigationStore } from '.'

describe('Store - Navigation', () => {
  test('should toggle `isDrawerOpen` state', () => {
    const navigationStore = useNavigationStore()

    expect(navigationStore.isDrawerOpen).toBe(false)

    navigationStore.toggleDrawer()

    expect(navigationStore.isDrawerOpen).toBe(true)
  })
})
