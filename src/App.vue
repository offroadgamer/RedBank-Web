<script setup>
  import Header from './components/Header.vue';
  import TransactionMenu from './components/TransactionMenu.vue';
</script>

<template>
  <Header></Header>
  <div class="main">
    <TransactionMenu></TransactionMenu>
  </div>
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
