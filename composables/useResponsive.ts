export const useResponsive = () => {
  const width = ref(0)
  const height = ref(0)

  const sm = computed(() => width.value < 768)
  const md = computed(() => width.value >= 768)
  const lg = computed(() => width.value >= 976)
  const xl = computed(() => width.value >= 1440)

  const onWindowSizesUpdated = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  onBeforeMount(() => {
    onWindowSizesUpdated()
  })

  onMounted(() => {
    onWindowSizesUpdated()
    window.addEventListener('resize', onWindowSizesUpdated)
  })

  onDeactivated(() => {
    window.removeEventListener('resize', onWindowSizesUpdated)
  })

  return {
    sm,
    md,
    lg,
    xl,
    sizes: { sm, md, lg, xl }
  }
}
