<template>
  <BaseButton />
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";

export default {
  components: {
    BaseButton,
  },
  /* props: {
    class: {
      type: String,
      default: "",
    },
  },
  emits: ["flick"],
  mounted() {
    this.$emit("flick");
  }, */
};
</script>

<style lang="scss" scoped></style>
