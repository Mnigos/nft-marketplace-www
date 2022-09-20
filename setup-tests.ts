import { setActivePinia, createPinia } from 'pinia'
import '@testing-library/jest-dom/extend-expect'

setActivePinia(createPinia())

global.CSS = { supports: () => false, escape: () => '' }
