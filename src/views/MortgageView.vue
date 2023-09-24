<template>
  <MortgageCalculatorForm />
  <div>
    {{ store.homePrice }}
  </div>
</template>

<script setup>
import MortgageCalculatorForm from "@/components/MortgageCalculatorForm.vue";
import { useAppStore} from "@/store/app";
import { ref } from "vue";
const store = useAppStore();

</script>
