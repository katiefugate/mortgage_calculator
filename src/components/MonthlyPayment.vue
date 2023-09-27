<template>
  <v-card>
    <v-container class="mt-2">
     <v-row>
       <v-col>
         {{ results.loanAmount }}
       </v-col>
       <v-col>
         {{ results.monthlyPayment }}
       </v-col>
     </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useAppStore} from "@/store/app";
import {computed, reactive} from "vue";
const store = useAppStore();
import { Loan } from "loanjs";


const results = computed(() => {
  console.log('amount should be:  ', store.homePrice - store.downPaymentDollar)
  const loan = new Loan(store.homePrice - store.downPaymentDollar, 30 * 12, store.interestRate)
  console.log('loan:  ', loan)
  console.log('monthly payment:  ', loan.installments[0].installment)
  return {
    monthlyPayment: loan.installments[0].installment,
    loanAmount: loan.amount
  }
})

</script>
