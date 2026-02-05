<script setup>
  import { ref } from 'vue';
  import { UserData } from '@/stores/store';

  const signup = ref(false);
  const usernameField = ref("");
  const passwordField = ref("");
  const userData = UserData();

  function handleAuth() {
    if(usernameField.value.replace(/\s+/g, "") == "" || passwordField.value.replace(/\s+/g, "") == "") {
      console.log("Both fields must be filled out!")
      return
    }
    if(signup === true) {
      // SignUp functionality
    } else {
      const usernameItem = userData.items.find(item => item.username == usernameField.value)
      if(usernameItem == undefined) {
        console.log("E-mail does not exist in database")
      } else {
        const passwordItem = userData.items.find(item => item.password == passwordField.value)
        if(passwordItem != undefined && userData.items[usernameItem.id] != userData.items[passwordItem.id]) {
          console.log("Wrong password!")
        } else {
          console.log("Successfully logged in!")
        }
      }
      
    }
  }
</script>

<template>
  <div class="login-box">
    <div class="gap-medium"></div>
    <h3 class="login-title">Login</h3>
    <div class="gap-small"></div>
    <h4>Username:</h4>
    <input v-model="usernameField">
    <div class="gap-small"></div>
    <h4>Password:</h4>
    <input v-model="passwordField">
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
