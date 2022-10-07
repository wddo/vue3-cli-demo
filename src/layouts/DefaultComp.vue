<template>
  <div>
    <UserComp v-model="myName" />
    <div class="wrap">
      <PageComp />
    </div>
  </div>
</template>

<script>
import PageComp from "../components/PageComp.vue";
import UserComp from "../components/UserComp.vue";

export default {
  components: {
    UserComp,
    PageComp,
  },
  data() {
    return {
      myName: "",
    };
  },
};
</script>

<style scoped></style>
