import { ref } from "vue";

const profilePopupOpen = ref(false);

export function useProfilePopup() {
  return {
    profilePopupOpen,
  };
}
