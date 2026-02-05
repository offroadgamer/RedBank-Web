<script setup>
  import { ref } from 'vue';
  import Header from './components/Header.vue';
  import TransactionMenu from './components/TransactionMenu.vue';
  import LoginMenu from './components/LoginMenu.vue';

  const loginMenuVisible = ref(false);

  function toggleLoginMenu() {
    loginMenuVisible.value = !loginMenuVisible.value
  }
</script>

<template>
  <Header @toggleLoginMenu="toggleLoginMenu"></Header>
  <div class="main">
    <TransactionMenu></TransactionMenu>
    <LoginMenu v-if="login"></LoginMenu>
  </div>
  <div class="gap-large"></div>
</template>

<style>

  .welcome-message-container {
    margin-top: 50px;
  }
  .trainsactions-container {
    text-align: center;
    margin-top: 40px;
  }

  .trainsactions-button-container {
    margin-top: 20px;
  }

</style>
