import { defineStore } from "pinia";

export const useUiStore = defineStore('ui', {
  state: () => ({
    isLoginMenuVisible: false,
  }),
  actions: {
    toggleLoginMenu() {
      this.isLoginMenuVisible = !this.isLoginMenuVisible;
    },
    showLoginMenu() {
      this.isLoginMenuVisible = true;
    },
    hideLoginMenu() {
      this.isLoginMenuVisible = false;
    }
  }
})