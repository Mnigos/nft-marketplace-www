export enum ScrollDirection {
  NONE,
  UP,
  DOWN,
}

export function useIsCollapsed() {
  const scrollDirection = ref(ScrollDirection.NONE)
  const isCollapsed = ref(false)
  const lastScrollPosition = ref(0)

  const toggleCollapsed = () => {
    isCollapsed.value = !isCollapsed.value
  }

  function handleScroll() {
    const currentScrollPosition = window.pageYOffset

    scrollDirection.value =
      currentScrollPosition > lastScrollPosition.value
        ? ScrollDirection.DOWN
        : ScrollDirection.UP

    isCollapsed.value =
      currentScrollPosition > 0
        ? scrollDirection.value === ScrollDirection.UP
        : true

    isCollapsed.value = currentScrollPosition > lastScrollPosition.value
    lastScrollPosition.value = currentScrollPosition
  }

  onMounted(() => window.addEventListener('scroll', handleScroll))
  onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

  return { isCollapsed, toggleCollapsed, scrollDirection }
}
