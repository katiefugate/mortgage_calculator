<template>
  <v-card>
    <v-table>
      <thead>
      <tr class="text-center">
        <th>
          Loan Amount
        </th>
        <th>
          Principal & Interest
        </th>
        <th>
          Property Tax
        </th>
        <th>
          Homeowners Insurance
        </th>
        <th>
          PMI
        </th>
        <th>
          HOA fees
        </th>
        <th class="bg-indigo-lighten-4">
          Total Monthly Payment
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="text-center">
        <td>{{ results.loanAmount }}</td>
        <td>{{ results.monthlyPayment }}</td>
        <td>{{ store.propertyTax }}</td>
        <td>{{ store.homeownersInsurance }}</td>
        <td>{{ store.pmi }}</td>
        <td>{{ store.hoa }}</td>
        <td class="bg-indigo-lighten-5">{{ totalMonthly }}</td>
      </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import { useAppStore} from "@/store/app";
import { computed } from "vue";
const store = useAppStore();
import { Loan } from "loanjs";


const results = computed(() => {
  const loan = new Loan(store.homePrice - store.downPaymentDollar, store.loanTerm * 12, store.interestRate)
  return {
    monthlyPayment: loan.installments[0].installment,
    loanAmount: loan.amount
  }
});

const totalMonthly = computed(() => {
  return parseInt(results.value.monthlyPayment) + parseInt(store.hoa) + parseInt(store.pmi) + parseInt(store.homeownersInsurance) + parseInt(store.propertyTax);
})

</script>
