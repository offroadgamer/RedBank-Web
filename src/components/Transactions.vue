<script setup>
const props = defineProps({
  type: String
})

const emit = defineEmits(['change-balance'])

function transact(amount) {
  emit(
    'change-balance',
    props.type === 'withdraw' ? -amount : amount
  )
}

function onClick() {
  emit('close');
}
</script>

<template>
  <div class="transactions-container">
    <h3>How much would you like to {{ type === 'withdraw' ? 'Withdraw' : 'Deposit' }}?</h3>
    <div class="transactions-button-container">
      <button @click="transact(100)" class="btn-big">
        <h3>$100</h3>
      </button>
      <button @click="transact(500)" class="btn-big">
        <h3>$500</h3>
      </button>
      <button @click="transact(1000)" class="btn-big">
        <h3>$1000</h3>
      </button>
    </div>
  </div>
  <button @click="onClick" class="btn-underline">close</button>
</template>

<style>
  .trainsactions-container {
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
