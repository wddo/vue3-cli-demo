<template>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
  >

  <DynamicHeading level="4">
    Welcome to Your Vue.js App
  </DynamicHeading>

  <DefaultComp />
</template>

<script>
import DefaultComp from "../layouts/DefaultComp";
import DynamicHeading from "../components/DynamicHeading";

export default {
  name: "App",
  components: {
    DefaultComp,
    DynamicHeading,
  },
};
</script>
