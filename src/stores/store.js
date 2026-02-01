import { defineStore } from "pinia";

export const UserData = defineStore("userDataStore", {
  state: () => ({
    items: [
      {"id": 1, "username": "test@test.com", "password": "123"},
      {"id": 2, "username": "ola@gmail.com", "password": "password"}
    ]
  })
});

export const AccountData = defineStore("accountDataStore", {
  state: () => ({
    items: []
  })
});
