<template>
  <div>RepositoriesFilters</div>
  <span>{{ store.count }}</span>
</template>

<script>
import { store } from "@/store/store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped></style>
