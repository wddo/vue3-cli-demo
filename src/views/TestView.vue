<template>
  <button @click="user = 'ddoeng'">
    change user
  </button>

  <UserRepositories :user="user" />
</template>

<script>
import UserRepositories from "@/components/UserRepositories";
export default {
  components: { UserRepositories },
  data() {
    return {
      user: "wddo",
    };
  },
};
</script>

<style lang="scss" scoped></style>
