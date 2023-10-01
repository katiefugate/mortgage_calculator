<template>
  <v-container class="ml-0 mr-0 w-100" style="max-width: 100%">
    <v-row justify="space-between">
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
