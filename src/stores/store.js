import { defineStore } from "pinia";

export const UserData = defineStore("userDataStore", {
  state: () => ({
    items: []
  })
});

export const AccountData = defineStore("accountDataStore", {
  state: () => ({
    items: []
  })
});
