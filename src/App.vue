<script setup>
  import Header from './components/Header.vue';
  import TransactionMenu from './components/TransactionMenu.vue';
  import LoginMenu from './components/LoginMenu.vue';
  import { useUiStore } from './stores/UIStore';

  const ui = useUiStore()
</script>

<template>
  <Header></Header>
  <div class="main">
    <TransactionMenu></TransactionMenu>
    <LoginMenu v-if="ui.isLoginMenuVisible"></LoginMenu>
  </div>
  <div class="gap-large"></div>
  <p>This is a test</p>
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
