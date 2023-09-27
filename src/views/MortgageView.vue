<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <MortgageCalculatorForm />
      </v-col>
      <v-col>
        <MonthlyPayment />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import MortgageCalculatorForm from "@/components/MortgageCalculatorForm.vue";
import { useAppStore} from "@/store/app";
import MonthlyPayment from "@/components/MonthlyPayment.vue";
const store = useAppStore();

</script>
