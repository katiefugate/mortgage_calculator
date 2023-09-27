// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      homePrice: 45000,
      downPaymentDollar: 9000,
      downPaymentPercent: 0,
      interestRate: 7.7,
      loanTerm: 0,
    }
  },
  // actions: {
  //   updateValue(property, newValue) {
  //     console.log('update value:  ', newValue)
  //     this[property] = newValue
  //   }
  // }
})
