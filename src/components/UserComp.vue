<template>
  <span>user: {{ userId }}</span>
  <button @click="clickHandler">
    login
  </button>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: null,
      required: false,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    userId() {
      return !!this.modelValue.length ? this.modelValue : "-";
    },
  },
  methods: {
    clickHandler() {
      setTimeout(() => {
        this.$emit("update:modelValue", "wddo");
      }, 500);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin-left: 0.5rem;
}
</style>
