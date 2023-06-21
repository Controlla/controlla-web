import {
  fade,
  fadeVisible,
  fadeVisibleOnce,
  noop,
  slideBottom,
  slideLeft,
  slideRight,
  slideTop,
  slideVisibleBottom,
  slideVisibleLeft,
  slideVisibleRight,
  slideVisibleTop,
  slideVisibleOnceBottom,
  slideVisibleOnceLeft,
  slideVisibleOnceRight,
  slideVisibleOnceTop,
  pop,
  popVisible,
  popVisibleOnce
} from '@/motion'

export const useMotionAnimation = () => {
  return {
    animations: {
      fade,
      fadeVisible,
      fadeVisibleOnce,
      noop,
      slideBottom,
      slideLeft,
      slideRight,
      slideTop,
      slideVisibleBottom,
      slideVisibleLeft,
      slideVisibleRight,
      slideVisibleTop,
      slideVisibleOnceBottom,
      slideVisibleOnceLeft,
      slideVisibleOnceRight,
      slideVisibleOnceTop,
      pop,
      popVisible,
      popVisibleOnce
    }
  }
}
