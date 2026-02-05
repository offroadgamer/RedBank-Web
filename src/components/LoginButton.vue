<script>
  const emit = defineEmits(['toggleLogin'])

  function toggleLogin() {
    emit(
      'toggleLogin'
    )
  }
</script>

<template>
  <button class="btn-medium" @click="toggleLogin">
    <h4>Login</h4>
  </button>
</template>

<style>

</style>
