<script setup>
  import { ref } from 'vue'
  import Transactions from './Transactions.vue'

  const transactions = ref(false)
  const balance = ref(0)
  const transactionType = ref('none')

  function openTransactions(type) {
    transactions.value = true
    transactionType.value = type
  }

  function changeBalance(amount) {
    balance.value += amount
  }

  function closeTransactions() {
    transactions.value = false
  }

</script>

<template>
  <div class="welcome-message-container">
    <h1>Welcome to RedBank!</h1>
  </div>

  <div class="transactions-container">
    <div class="trainsactions-balance">
      <h3>Your balance: ${{ balance }}</h3>
    </div>

    <div class="transactions-button-container">
      <button @click="openTransactions('deposit')" class="btn-big">
        <h3>Deposit</h3>
      </button>

      <button @click="openTransactions('withdraw')" class="btn-big">
        <h3>Withdraw</h3>
      </button>
    </div>
  </div>

  <Transactions
    v-if="transactions"
    :type="transactionType"
    @change-balance="changeBalance"
    @close="closeTransactions"
  />
</template>


<style>

  .welcome-message-container {
    text-align: center;
    margin-top: 50px;
  }

  .transactions-container {
    text-align: center;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .transactions-button-container {
    width: 22vw;
    margin: 20px auto auto;
  }

</style>
