import { createI18n } from "vue-i18n";

const messages = {
  en: {
    welcome_text: "Welcome to redbank",
    balance_text: "Your balance: ",
    transactions_text: "How much would you like to ",
    deposit_btn_text: "Deposit",
    withdraw_btn_text: "Withdraw",
    btn : {
      close: "close"
    }
  }
}

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages,
  legacy: false,
})
