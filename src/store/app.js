// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => {
    return {
      homePrice: 45000,
      downPaymentDollar: 9000,
      downPaymentPercent: 20,
      interestRate: 7.7,
      loanTerm: 30,
      propertyTax: 0,
      homeownersInsurance: 0,
      pmi: 0,
      hoa: 0,
    }
  },
  // actions: {
  //   updateValue(property, newValue) {
  //     console.log('update value:  ', newValue)
  //     this[property] = newValue
  //   }
  // }
})
