// Slide from left

export const slideLeft = {
  initial: {
    x: -100,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const slideVisibleLeft = {
  initial: {
    x: -100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const slideVisibleOnceLeft = {
  initial: {
    x: -100,
    opacity: 0
  },
  visibleOnce: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

// Slide from right

export const slideRight = {
  initial: {
    x: 100,
    opacity: 0
  },
  enter: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const slideVisibleRight = {
  initial: {
    x: 100,
    opacity: 0
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const slideVisibleOnceRight = {
  initial: {
    x: 100,
    opacity: 0
  },
  visibleOnce: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

// Slide from top

export const slideTop = {
  initial: {
    y: -100,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const slideVisibleTop = {
  initial: {
    y: -100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const slideVisibleOnceTop = {
  initial: {
    y: -100,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

// Slide from bottom

export const slideBottom = {
  initial: {
    y: 100,
    opacity: 0
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const slideVisibleBottom = {
  initial: {
    y: 100,
    opacity: 0
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export const slideVisibleOnceBottom = {
  initial: {
    y: 100,
    opacity: 0
  },
  visibleOnce: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: '100'
    }
  }
}

export default {
  slideLeft,
  slideVisibleLeft,
  slideVisibleOnceLeft,
  slideRight,
  slideVisibleRight,
  slideVisibleOnceRight,
  slideTop,
  slideVisibleTop,
  slideVisibleOnceTop,
  slideBottom,
  slideVisibleBottom,
  slideVisibleOnceBottom
}
