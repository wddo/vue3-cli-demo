<template>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
  >

  <DynamicHeading level="4">
    Welcome to Your Vue.js App
  </DynamicHeading>

  <div>
    <UserComp v-model="myName" />
    <div class="wrap">
      <PageComp />
    </div>
  </div>
</template>

<script>
import DynamicHeading from "@/components/DynamicHeading";
import PageComp from "@/components/about/PageComp.vue";
import UserComp from "@/components/about/UserComp.vue";

export default {
  components: {
    UserComp,
    PageComp,
    DynamicHeading,
  },
  data() {
    return {
      myName: "",
    };
  },
};
</script>
