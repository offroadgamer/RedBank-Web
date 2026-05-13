<script setup>
  import { useUiStore } from '@/stores/UIStore';

  const ui = useUiStore()

  function showLoginMenu() {
    ui.hideLoginMenu()
    ui.showLoginMenu()
    ui.signUpFalse()
  }
</script>

<template>
  <button class="btn-medium" @click="showLoginMenu()">
    <h4>Login</h4>
  </button>
</template>

<style>

</style>
