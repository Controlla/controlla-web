export const useCounter = (limit: number) => {
  const number = ref(0)
  const counterConfig = reactive({
    defaultInterval: 3000,
    delay: 1500
  })
  const interval = ref<ReturnType<typeof setInterval>>()

  const durationInterval = computed(() => counterConfig.defaultInterval / limit)

  const onInitCounter = () => {
    interval.value = setInterval(() => {
      number.value++
      if (number.value === limit) {
        clearInterval(interval.value)
        setTimeout(() => onResetCounter(), counterConfig.delay)
      }
    }, durationInterval.value)
  }

  const onResetCounter = () => {
    number.value = 0
    onInitCounter()
  }

  onMounted(() => onInitCounter())

  return {
    number
  }
}
