<script setup>
  import '@/assets/colors.css';
  import { ref } from 'vue';
  import { UserData } from '@/stores/store';

  const signup = ref(false);
  const usernameField = ref("");
  const passwordField = ref("");
  const userData = UserData();

  const usernameError = ref(false);
  const passwordError = ref(false);
  const loginStatus = ref(false);
  const usernameErrorMessage = ref("");
  const passwordErrorMessage = ref("");
  const loginStatusMessage = ref("");

  function handleLoginError(type, message) {
    if(type == "username") {
      usernameError.value = true;
      usernameErrorMessage.value = message;
    } 
    if(type == "password") {
      passwordError.value = true;
      passwordErrorMessage.value = message;
    }
    if(type == "loginStatus") {
      loginStatus.value = true;
      loginStatusMessage.value = message;
    }
  }

  function handleAuth() {
    usernameError.value = false;
    passwordError.value = false;
    loginStatus.value = false;
    if(usernameField.value.replace(/\s+/g, "") == "") {
      console.log("Username must be filled out!")
      handleLoginError("username", "This field must be filled out!")
      return
    }
    if(passwordField.value.replace(/\s+/g, "") == "") {
      console.log("Password must be filled out!")
      handleLoginError("password", "This field must be filled out!")
      return
    }
   
    if(signup === true) {
      // SignUp functionality
    } else {
      const usernameItem = userData.items.find(item => item.username == usernameField.value)
      if(usernameItem == undefined) {
        console.log("E-mail does not exist in database")
        handleLoginError("username", "E-mail does not exist in database")
      } else {
        const passwordItem = userData.items.find(item => item.password == passwordField.value)
        if(passwordItem == undefined || userData.items[usernameItem.id] != userData.items[passwordItem.id]) {
          console.log("Wrong password!")
          handleLoginError("password", "Wrong password!")
        } else {
          console.log("Successfully logged in!")
          handleLoginError("loginStatus", "Successfully logged in!")
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
    <h5 v-if="usernameError" class="login-error">{{usernameErrorMessage}}</h5>
    <div class="gap-small"></div>
    <h4>Password:</h4>
    <input v-model="passwordField">
    <h5 v-if="passwordError" class="login-error">{{passwordErrorMessage}}</h5>
    <h5 v-if="loginStatus" class="login-status">{{loginStatusMessage}}</h5>
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

  .login-error {
    color: var(--main-color);
  }

  .login-status {
    color: var(--green);
  }
</style>
