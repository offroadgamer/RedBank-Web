<script setup>
  import Header from './components/Header.vue';
</script>

<template>
  <Header></Header>
  <div class="main">
    <div class="welcome-message-container">
      <h1>Welcome to RedBank!</h1>
      <div class="trainsactions-container">
        <div class="trainsactions-balance">
          <h3>Your balance: $0</h3>
        </div>
        <div class="trainsactions-button-container">
          <button class="btn-big">
            <h3>Deposit</h3>
          </button>
          <button class="btn-big">
            <h3>Withdraw</h3>
          </button>
        </div>
      </div>
    </div>
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