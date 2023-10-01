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
        <td>{{ 'results' }}</td>
        <td>{{ 'results' }}</td>
        <td>{{ 'results' }}</td>
        <td>{{ 'results' }}</td>
        <td class="bg-indigo-lighten-5">{{ 'results' }}</td>
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
