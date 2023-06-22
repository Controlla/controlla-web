import { defineStore } from 'pinia'

export const useRootStore = defineStore('rootStore', () => {
  const isMenuOpen = ref(false)
  const isContactTypeFormOpen = ref(false)
  const isDOMloaded = ref(false)
  const wasDOMloaded = ref(false)

  const toggleMenu = (toggle: boolean) => {
    isMenuOpen.value = toggle
  }

  const toggleTypeForm = (toggle: boolean) => {
    isContactTypeFormOpen.value = toggle
  }

  const toggleDOMloaded = (toggle: boolean) => {
    isDOMloaded.value = toggle
    wasDOMloaded.value = toggle
  }

  return {
    toggleMenu,
    toggleDOMloaded,
    toggleTypeForm,
    isMenuOpen,
    isDOMloaded,
    wasDOMloaded,
    isContactTypeFormOpen,
  }
})
