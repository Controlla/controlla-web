import { MaybeElement } from '@vueuse/core'
import { unwrapElement } from '~~/utils/unwrapElement'

type StickyOptions = {
  offset: number
  customClass?: string
  direction?: boolean
}

export const useScroll = (options: StickyOptions) => {
  const elementRef = ref<HTMLElement | null>(null)
  const lastPosition = ref(0)

  const onScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    scrollTop > options.offset
      ? elementRef.value?.classList.add(options.customClass ?? 'sticky')
      : elementRef.value?.classList.remove(options.customClass ?? 'sticky')

    if (options.direction) {
      getDirection(scrollTop, lastPosition.value)
    }
  }

  const getDirection = (scroll: number, currentScroll: number) => {

    scroll >= currentScroll
      ? document.documentElement.setAttribute('data-scroll-direction', 'down')
      : document.documentElement.setAttribute('data-scroll-direction', 'up')

    if (scroll <= 0) {
      
      document.documentElement.setAttribute('data-scroll-direction', 'hold')
    }

    lastPosition.value = scroll
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', onScroll)
  })

  return {
    register: (maybeElement: MaybeElement) => {
      const el = unwrapElement(maybeElement)
      if (el) {
        elementRef.value = el
      }
    }
  }
}
