import { onMounted, ref } from 'vue'
import { createPopup, Popup } from '@typeform/embed'
import "@typeform/embed/build/css/popup.css"
export const useTypeformPopup = () => {
  const popup = ref<Popup | null>(null);

  onMounted(() => {
    popup.value = createPopup('BYWHV4', {
     fullScreen: true,
    });
  });

  const onOpen = (): void => {
    if (popup.value) popup.value.open();
  }

  return {
    onOpen
  };
}
