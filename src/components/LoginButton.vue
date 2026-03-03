<script setup>
  import { useUiStore } from '@/stores/UIStore';

  const ui = useUiStore()

  function showLoginMenu() {
    ui.showLoginMenu()
  }
</script>

<template>
  <button class="btn-medium" @click="showLoginMenu()">
    <h4>Login</h4>
  </button>
</template>

<style>

</style>
