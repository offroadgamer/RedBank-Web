<script>
  import { ref } from 'vue';
  import { UserData } from '@/stores/store';

  const signup = ref(false);

  const userData = UserData();

  function handleAuth(username, password) {
    if(signup) {
      // SignUp functionality
    } else {
      const currentItem = userData.items.find(item => item.username === username)
    }
  }
</script>

<template>
  <div class="login-box">
    <div class="gap-medium"></div>
    <h3 class="login-title">Login</h3>
    <div class="gap-small"></div>
    <h4>Username:</h4>
    <input>
    <div class="gap-small"></div>
    <h4>Password:</h4>
    <input>
    <button class="btn-small" id="login-btn" @click="handleAuth()">
      <h5 v-if="signup">Sign up</h5>
      <h5 v-else>Login</h5>
    </button>
  </div>
</template>

<style>
  .login-box {
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  #login-btn {
    margin: 10px 0;
  }
  
</style>
