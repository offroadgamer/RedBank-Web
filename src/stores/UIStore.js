import { defineStore } from "pinia";

export const useUiStore = defineStore('ui', {
  state: () => ({
    isLoginMenuVisible: false,
    signUp: false
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
    },
    signUpTrue() {
      this.signUp = true;
    },
    signUpFalse() {
      this.signUp = false;
    }
  }
})