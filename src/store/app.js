// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      homePrice: 0,
      downPaymentDollar: 0,
      downPaymentPercent: 0,
      interestRate: 0,
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
