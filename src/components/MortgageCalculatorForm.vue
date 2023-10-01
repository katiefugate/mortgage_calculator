<template>
  <v-card class="pl-2 pr-2">
    <v-container class="mt-4 mb-2">
      <v-row>
        <v-text-field label="Home Price" variant="outlined" type="number"
                      v-model="form.homePrice"
                      @input="inputChange('homePrice')"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-col class="pa-0">
          <v-text-field
            label="Down Payment"
            type="number"
            variant="outlined"
            :prepend-inner-icon="'mdi-currency-usd'"
            v-model="form.downPaymentDollar"
            @input="inputChange('downPaymentDollar', $event.target.value)"
          ></v-text-field>
        </v-col>
        <v-col cols="4" class="pa-0">
          <v-text-field
            label="Down Payment"
            type="number"
            variant="outlined"
            :append-inner-icon="'mdi-percent'"
            v-model="form.downPaymentPercent"
            @input="inputChange('downPaymentPercent', $event.target.value)"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-text-field
          label="Interest Rate"
          variant="outlined"
          :append-inner-icon="'mdi-percent'"
          v-model="form.interestRate"
          @input="inputChange('interestRate')"
        ></v-text-field>
      </v-row>
      <v-row>
        <v-select
          label="Loan Term"
          variant="outlined"
          :items="[
            { title: '30 years', value: 30 },
            { title: '20 years', value: 20 },
            { title: '15', value: 15 },
            { title: '10 years', value: 10 }
          ]"
          v-model="form.loanTerm"
          @input="inputChange('loanTerm')"
        ></v-select>
      </v-row>
      <v-row>
        <v-btn @click="getResults" class="bg-indigo-lighten-4">Calculate</v-btn>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useAppStore} from "@/store/app";
import { reactive } from "vue";
import { Loan } from "loanjs";
const store = useAppStore();

const form = reactive({
  homePrice: 0,
  downPaymentDollar: 0,
  downPaymentPercent: 0,
  interestRate: 0,
  loanTerm: 0,
});
let lastChanged = 'percent';

const inputChange = (inputName, newValue = null) => {
  if (inputName === 'downPaymentPercent') {
    form.downPaymentDollar = newValue * 0.01 * form.homePrice
    lastChanged = 'percent';
  } else if (inputName === 'downPaymentDollar') {
    form.downPaymentPercent = newValue / form.homePrice * 100
    lastChanged = 'dollar';
  }

  if (inputName === 'homePrice') {
    if (lastChanged === 'percent') {
      form.downPaymentDollar = form.downPaymentPercent * 0.01 * form.homePrice;
    } else {
      form.downPaymentPercent = form.downPaymentDollar / form.homePrice * 100;
    }
  }
  store.$patch({...form})
}

// const getResults = () => {
//   console.log('amount should be:  ', store.homePrice - store.downPaymentDollar)
//   const loan = new Loan(store.homePrice - store.downPaymentDollar, 30 * 12, store.interestRate)
//   console.log('loan:  ', loan)
//   console.log('monthly payment:  ', loan.installments[0].installment)
//   return loan.amount
// }
</script>
