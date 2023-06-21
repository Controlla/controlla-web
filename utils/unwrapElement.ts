import { MaybeElementRef } from '@vueuse/core'
import { ComponentPublicInstance } from 'vue'

export const unwrapElement = (el: MaybeElementRef): HTMLElement | undefined => {
  const newEl = unref(el)
  return (newEl as ComponentPublicInstance)?.$el ?? newEl ?? null
}
