<template>
  <v-card class="pl-2 pr-2">
    <v-container class="mt-4 mb-2">
      <v-row>
        <v-col>
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
        </v-col>
        <v-col>
          <v-row>
            <v-text-field
              label="Property Tax per month"
              variant="outlined"
              type="number"
              v-model="form.propertyTax"
              @input="inputChange('propertyTax')"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              label="Homeowners Insurance per month"
              variant="outlined"
              type="number"
              v-model="form.homeownersInsurance"
              @input="inputChange('homeownersInsurance')"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              label="PMI per month"
              variant="outlined"
              type="number"
              v-model="form.pmi"
              @input="inputChange('pmi')"
            ></v-text-field>
          </v-row>
          <v-row>
            <v-text-field
              label="HOA fees per month"
              variant="outlined"
              type="number"
              v-model="form.hoa"
              @input="inputChange('hoa')"
            ></v-text-field>
          </v-row>
          <v-row justify="end">
            <v-btn @click="getResults" class="bg-indigo-lighten-4">Calculate</v-btn>
          </v-row>
        </v-col>
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
  homePrice: store.homePrice,
  downPaymentDollar: store.downPaymentDollar,
  downPaymentPercent: store.downPaymentPercent,
  interestRate: store.interestRate,
  loanTerm: store.loanTerm,
  propertyTax: store.propertyTax,
  homeownersInsurance: store.homeownersInsurance,
  pmi: store.pmi,
  hoa: store.hoa,
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
}

const getResults = () => {
  store.$patch({...form})
}
</script>
