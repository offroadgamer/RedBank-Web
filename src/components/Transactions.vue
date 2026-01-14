<script>

  let balance = 0;

  function deposit() {
    balance += 500;
  }

  function withdraw() {
    balance -= 500;
  }
</script>

<template>
  <div class="welcome-message-container">
    <h1>Welcome to RedBank!</h1>
  </div>
  <div class="trainsactions-container">
    <div class="trainsactions-balance">
      <h3>Your balance: $0</h3>
    </div>
    <div class="trainsactions-button-container">
      <button @click="deposit" class="btn-big">
        <h3>Deposit</h3>
      </button>
      <button @click="withdraw" class="btn-big">
        <h3>Withdraw</h3>
      </button>
    </div>
  </div>
  <div class="trainsactions-container">
    <div class="trainsactions-balance">
      <h3>How much would you like to deposit?</h3>
    </div>
    <div class="trainsactions-button-container">
      <button @click="deposit" class="btn-big">
        <h3>Deposit</h3>
      </button>
      <button @click="withdraw" class="btn-big">
        <h3>Withdraw</h3>
      </button>
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