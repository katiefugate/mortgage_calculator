<template>
  <v-card>
    <v-container>
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
          :items="['30 years', '20 years', '15 years', '10 years']"
          v-model="form.loanTerm"
          @input="inputChange('loanTerm')"
        ></v-select>
      </v-row>
    </v-container>
  </v-card>
</template>

<script setup>
import { useAppStore} from "@/store/app";
import { reactive } from "vue";
const store = useAppStore();

const form = reactive({
  homePrice: 0,
  downPaymentDollar: 0,
  downPaymentPercent: 0,
  interestRate: 0,
  loanTerm: 0,
})
let lastChanged = 'percent'

const inputChange = (inputName, newValue = null) => {
  if (inputName === 'downPaymentPercent') {
    form.downPaymentDollar = newValue * 0.01 * form.homePrice
    lastChanged = 'percent'
  } else if (inputName === 'downPaymentDollar') {
    form.downPaymentPercent = newValue / form.homePrice * 100
    lastChanged = 'dollar'
  }

  if (inputName === 'homePrice') {
    if (lastChanged === 'percent') {
      form.downPaymentDollar = form.downPaymentPercent * 0.01 * form.homePrice
    } else {
      form.downPaymentPercent = form.downPaymentDollar / form.homePrice * 100
    }
  }
  store.$patch({...form})
}
</script>
