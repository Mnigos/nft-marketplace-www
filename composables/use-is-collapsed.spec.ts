import { describe, test, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/vue'

import { useIsCollapsed } from '.'

vi.mock('window')

const TestComponent = defineComponent({
  setup() {
    const { isCollapsed, toggleCollapsed } = useIsCollapsed()

    return { isCollapsed, toggleCollapsed }
  },
  template: `
    <div>
      <button @click="toggleCollapsed">toggle</button>

      <p data-testid="isCollapsed">{{ isCollapsed }}</p>
    </div>
  `,
})

describe('UseIsCollapsed', () => {
  test('should change isCollapsed after use toggleCollapsed', async () => {
    render(TestComponent)

    const button = screen.getByText('toggle')
    const isCollapsedLabel = screen.getByTestId('isCollapsed')

    expect(isCollapsedLabel).toHaveTextContent('false')

    await button.click()

    expect(isCollapsedLabel).toHaveTextContent('true')
  })
})
