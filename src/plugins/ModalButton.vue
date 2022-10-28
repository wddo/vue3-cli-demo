<template>
  <button @click="modalOpen = true">
    Open full screen modal!!
  </button>
  <DimModal v-model:opener.slim="modalOpen" />
</template>

<script setup>
import DimModal from "@/components/DimModal.vue";
import { ref } from "vue";

const modalOpen = ref(false);
</script>

<style lang="scss" scoped></style>
