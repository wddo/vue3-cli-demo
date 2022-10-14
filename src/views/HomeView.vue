<template>
  <img
    alt="Vue logo"
    src="../assets/logo.png"
  >

  <DynamicHeading level="4">
    <span class="title">Welcome to Your Vue.js App</span>
  </DynamicHeading>

  <div>
    <UserComp v-model="myName" />
  </div>
</template>

<script>
import DynamicHeading from "@/components/DynamicHeading";
import UserComp from "@/components/UserComp";

export default {
  components: {
    UserComp,
    DynamicHeading,
  },
  data() {
    return {
      myName: "",
    };
  },
};
</script>

<style lang="scss" scoped>
::v-deep(.user) {
  background-color: lightseagreen;
}
</style>
