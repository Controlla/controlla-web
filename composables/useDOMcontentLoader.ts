import { useRootStore } from '@/store'

export const useDOMcontentLoader = () => {
  const store = useRootStore()

  const toggleState = (value: boolean) => {
    value
      ? store.toggleDOMloaded(value)
      : setTimeout(() => store.toggleDOMloaded(value), 200)
  }

  onMounted(() => toggleState(true))
}
