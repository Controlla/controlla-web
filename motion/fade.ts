export const fade = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const fadeVisible = {
  initial: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const fadeVisibleOnce = {
  initial: {
    opacity: 0
  },
  visibleOnce: {
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const noop = {
  initial: {
    opacity: 1
  }
}

export default {
  noop,
  fade,
  fadeVisible,
  fadeVisibleOnce
}
